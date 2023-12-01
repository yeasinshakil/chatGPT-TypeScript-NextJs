"use client";
import { useRouter } from "next/navigation";
import { PlusIcon } from "@heroicons/react/20/solid";
import { useSession } from "next-auth/react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase";

const NewChat = () => {
  const router = useRouter();
  // console.log(router);
  const { data: session } = useSession();
  // console.log(session);

  const createNewChat = async () => {
    const doc = await addDoc(
      collection(db, "users", session?.user?.email!, "chats"),
      {
        userId: session?.user?.email,
        createdAt: serverTimestamp(),
      }
    );
    router.push(`/chat/${doc.id}`);
  };
  return (
    <div onClick={createNewChat} className=" border-gray-700 border chatRow">
      <PlusIcon className=" h-4 w-4" />
      <p>New Chat</p>
    </div>
  );
};

export default NewChat;
