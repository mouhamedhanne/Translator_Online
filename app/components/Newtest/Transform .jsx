"use client";
import BuyCoffe from "@/app/Assets/Svg/bmc-logo.svg";
import Image from "next/image";
import Link from "next/link";

const Transform = () => {
  return (
    <>
      <div className="relative">
        <div
          className="hidden lg:block absolute bottom-6 left-[6rem]
         lg:left-[32rem] bg-gray-200 py-2 px-2 rounded-lg"
        >
          <Link
            href="https://www.buymeacoffee.com/mouhamedhanne"
            target="_blank"
          >
            <Image src={BuyCoffe} alt="buy me a coffe" />
          </Link>
        </div>

        <div>
          <iframe
            title="Embedded HTML"
            src="/index.html"
            width="100%"
            height="700px"
          />
        </div>
      </div>
    </>
  );
};

export default Transform;
