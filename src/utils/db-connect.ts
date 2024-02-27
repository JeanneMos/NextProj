import { MongoClient, ServerApiVersion } from "mongodb";
const uri = process.env.DB_URL;
const options = {
	useUnifiedTopology: true,
	useNewUrlParser: true,
};

let client;
let clientPromise;

if (!uri) {
	throw new Error("Add Mongo URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
	console.log("dev", uri);
	if (!global._mongoClientPromise) {
		client = new MongoClient(uri);
		global._mongoClientPromise = client.connect();
	}
	clientPromise = global._mongoClientPromise;
} else {
	client = new MongoClient(uri);
	clientPromise = client.connect();
}

export default clientPromise;
