import clientPromise from "../../utils/db-connect";

export default async function test(req, res) {
	const client = await clientPromise;
	const db = client.db("saint_seiya");
	switch (req.method) {
		// case "POST":
		// 	let bodyObject = JSON.parse(req.body);
		// 	let myPost = await db.collection("credentials").insertOne(bodyObject);
		// 	res.json(myPost.ops[0]);
		// break;
		case "GET":
			const admin = await db.collection("credentials").find({}).toArray();
			res.json({ status: 200, data: admin });
			break;
	}
}
