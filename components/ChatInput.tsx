"use client";
import { useState } from "react";

import { PaperAirplaneIcon } from "@heroicons/react/20/solid";
import { useSession } from "next-auth/react";

type Props = { chatId: string };
const ChatInput = ({ chatId }: Props) => {
  const [promt, setPromt] = useState("");
  const { data: session } = useSession();
  return (
    <div className=" bg-gray-700/50 text-gray-400 rounded-lg text-sm">
      <form className=" p-5 space-x-5 flex">
        <input
          value={promt}
          onChange={(e) => setPromt(e.target.value)}
          disabled={!session}
          className=" bg-transparent focus:outline-none disabled:cursor-not-allowed disabled:text-gray-300 flex-1"
          type="text"
          placeholder="Type your message......."
        />
        <button
          disabled={!session || !promt}
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
