"use client";
import NewChat from "./NewChat";
import { useSession, signOut } from "next-auth/react";

const SideBar = () => {
  const { data: session } = useSession();
  console.log(session?.user?.image);

  return (
    <div className=" p-2 flex flex-col h-full min-h-screen">
      <div className="flex-1">
        {/* New chat */}
        <NewChat />
        <div>{/* model */}</div>
        {/* map through chat rows */}
      </div>

      {session && (
        <img
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
