"use client";
import { collection, orderBy, query } from "firebase/firestore";
import NewChat from "./NewChat";
import { useSession, signOut } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "@/firebase";
import ChatRow from "./ChatRow";
import ModelSelection from "./ModelSelection";
import Image from "next/image";

const SideBar = () => {
  const { data: session } = useSession();
  // console.log(session?.user?.image);

  const [chats, loading, error] = useCollection(
    session &&
    query(
      collection(db, "users", session?.user?.email!, "chats"),
      orderBy("createdAt", "desc")
    )
  );
  // console.log(chats);
  return (
    <div className=" p-2 flex flex-col h-full min-h-screen">
      <div className="flex-1">
        {/* New chat */}
        <NewChat />
        <div>
          {/* model */}
          <ModelSelection />
        </div>
        <div className="flex flex-col space-y-2 my-2">
          {/* map through chat rows */}
          {chats?.docs.map((chat) => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}
        </div>
      </div>

      {session && (
        <Image
          onClick={() => signOut()}
          src={session?.user?.image!}
          alt="Profile pic"
          className="h-12 w-12 rounded-full cursor-pointer mx-auto
                mb-2 hover:opacity-50"
        />
      )}
    </div>
  );
};

export default SideBar;
