// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { textQuery } from "@/lib/queryApi";
import type { NextApiRequest, NextApiResponse } from "next";
import admin from "firebase-admin";
import { adminDb } from "@/firebaseAdmin";

type Data = {
  answer: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { prompt, chatId, model, session } = req.body;
  console.log("prompt>>>>>>", prompt);
  if (!prompt) {
    res.status(400).json({ answer: "Please provide a prompt!" });
    return;
  }
  if (!chatId) {
    res.status(400).json({ answer: "Please provide a valid Chat ID!" });
    return;
  }

  // ChatGPT Query

  const response = await textQuery(prompt, model);
  const message: Message = {
    text: response || "ChatGPT unable to find the answer!",
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: "chatGPT",
      name: "chatGPT",
      avatar: "https://links.papareact.com/89k",
    },
  };
  await adminDb
    .collection("users")
    .doc(session?.user?.email)
    .collection("chats")
    .doc(chatId)
    .collection("messages")
    .add(message);

  res.status(200).json({ answer: message.text });
  console.log("message>>>>>>", message);
}
