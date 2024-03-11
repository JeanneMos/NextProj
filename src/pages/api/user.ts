import clientPromise from "../../db/db-client";
import { NextResponse, NextRequest } from "next/server";
import { redirect } from "next/navigation";
import { bcripted, comparedBcripted } from "../../utils/bcrypt";

export default async function handler(req, res) {
	const client = await clientPromise;
	const db = client.db("saint_seiya");
	switch (req.method) {
		case "POST":
			const bodyPostObject = req.body;
			const postObject = await db
				.collection("credentials")
				.findOne({ email: bodyPostObject.email });
			if (postObject) {
				const isConnected = await comparedBcripted(
					bodyPostObject.password,
					postObject.password
				);
				if (isConnected) {
					res.json({ status: 200, permissions: postObject.permissions || [] });
				} else {
					res.json({ status: 401 });
				}
			} else {
				res.json({ status: 404 });
			}

			break;
		case "PATCH":
			const bodyPatchObject = req.body;
			const password = bodyPatchObject.password;
			const myPost = await db
				.collection("credentials")
				.findOneAndUpdate(
					{ email: bodyPatchObject.email },
					{ $set: { password: bcripted(password) } }
				);
			res.json({ status: 200, data: myPost });
			break;
		case "GET":
			const allUsers = await db.collection("credentials").find({});
			res.json({ status: 200, data: allUsers });
			break;
	}
}
