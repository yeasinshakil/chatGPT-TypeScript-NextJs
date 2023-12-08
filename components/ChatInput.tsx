"use client";
import { FormEvent, useState } from "react";

import { PaperAirplaneIcon } from "@heroicons/react/20/solid";
import { useSession } from "next-auth/react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase";
import { toast } from "react-hot-toast";

type Props = { chatId: string };
const ChatInput = ({ chatId }: Props) => {
  const [prompt, setPrompt] = useState("");
  const { data: session } = useSession();
  //   useSWR to get model
  const model = "text-davinci-003";
  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!prompt) return;
    const input = prompt.trim();
    setPrompt("");
    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar:
          session?.user?.image! ||
          `https://ui-avatars.com/api/?name=${session?.user?.name}`,
      },
    };
    await addDoc(
      collection(
        db,
        "users",
        session?.user?.email!,
        "chats",
        chatId,
        "messages"
      ),
      message
    );

    // toast notification to say loading
    const notification = toast.loading("ChatGPT is thinking...");

    await fetch("/api/askQuestions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: input,
        chatId,
        model,
        session,
      }),
    }).then(() => {
      // toast notification to say successful
      toast.success("ChatGPT Responded...", {
        id: notification,
      });
    });
  };
  return (
    <div className=" bg-gray-700/50 text-gray-400 rounded-lg text-sm">
      <form className=" p-5 space-x-5 flex" onSubmit={sendMessage}>
        <input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          disabled={!session}
          className=" bg-transparent focus:outline-none disabled:cursor-not-allowed disabled:text-gray-300 flex-1"
          type="text"
          placeholder="Type your message......."
        />
        <button
          disabled={!session || !prompt}
          className=" bg-[#11A37f] hover:opacity-50 font-bold px-4 py-2 rounded text-white disabled:bg-gray-300 disabled:cursor-not-allowed"
          type="submit"
        >
          <PaperAirplaneIcon className=" h-4 w-4 -rotate-45" />
        </button>
      </form>

      {/* model selection */}
    </div>
  );
};

export default ChatInput;
