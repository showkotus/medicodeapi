import clientPromise from "../../lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const client = await clientPromise;
    const db = client.db("medi-code");

    const codes = await db.collection("codes").find().toArray();
    res.json(codes);
  } catch (e) {
    console.error(e);
  }
};
