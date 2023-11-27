"use client";
import Image from "next/image";
import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <div className=" bg-[#11A37F] h-screen flex flex-col justify-center items-center text-center">
      <Image
        src={
          "https://freelogopng.com/images/all_img/1681038242chatgpt-logo-png.png"
        }
        height={300}
        width={300}
        alt="logo"
      />
      <button
        className=" text-white font-bold text-3xl animate-pulse border p-2 border-red-500 pointer-events-auto"
        onClick={() => signIn("google")}
      >
        Sign in to use ChatGPT
      </button>
    </div>
  );
};

export default Login;
