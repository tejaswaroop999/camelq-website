import { NextResponse } from "next/server";
import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI || "mongodb+srv://tejaswaroop999:Swaroop123@camelq.mz1dsxm.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Only connect once for performance (important in serverless)
let isConnected = false;

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = formData.get("name")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const phone = formData.get("phone")?.toString() || "";
    const position = formData.get("position")?.toString() || "";
    const experience = formData.get("experience")?.toString() || "";
    const coverLetter = formData.get("cover-letter")?.toString() || "";
    const resume = formData.get("resume-upload") as File;

    if (!name || !email || !position || !experience  ) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }


    // Connect to DB and insert application
    if (!isConnected) {
      await client.connect();
      isConnected = true;
    }
    const db = client.db("camelq");
    const collection = db.collection("applications");

    const application = {
      name,
      email,
      phone,
      position,
      experience,
      coverLetter,

    //   resumeFile: resumePath,
      submittedAt: new Date(),
    };

    await collection.insertOne(application);

    return NextResponse.json({ success: true, message: "Application submitted successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error submitting application:", error);
    return NextResponse.json({ error: "Submission failed. Please try again later." }, { status: 500 });
   } 
}
