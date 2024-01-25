"use client";
import { useEffect, useState } from "react";
import { auth, provider } from "@/app/firebase/config";
import { signInWithPopup } from "firebase/auth";
import Translation from "@/app/Translation/page";
import Image from "next/image";
import GoogleIcon from "@/app/Assets/Svg/web_light_rd_na.svg";
import Logo from "@/app/Assets/Logo";

function page() {
  const [isConnected, setIsConnected] = useState("");

  const handleConnected = () => {
    signInWithPopup(auth, provider).then((data) => {
      setIsConnected(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };

  useEffect(() => {
    setIsConnected(localStorage.getItem("email"));
  });

  return (
    <div>
      {isConnected ? (
        <Translation />
      ) : (
        <div
          className="flex items-center justify-center bg-[#1C1B20]
         h-screen w-screen"
        >
          <div className="bg-[#111116] px-12 py-6 rounded-2xl">
            <div className="flex items-center justify-center mb-8">
              <Logo />
            </div>
            <button
              onClick={handleConnected}
              className="bg-gray-100 px-8 py-3 flex items-center rounded-2xl"
            >
              <div className="mr-2">
                <Image src={GoogleIcon} alt="logo google" />
              </div>
              <div className="font-medium">Sign in with Google</div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default page;
