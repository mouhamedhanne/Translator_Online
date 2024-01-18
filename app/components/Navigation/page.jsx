"use client";
import Image from "next/image";
import Buttons from "@/app/ui/Buttons/page";
import Link from "next/link";
import Logo from "@/app/Assets/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import BuyCoffe from "@/app/Assets/Svg/bmc-logo.svg";

export default function page() {
  return (
    <header>
      <nav
        className=" bg-white opacity-95 shadow border-gray-200
         fixed w-full z-20 top-0 left-0 border-b border-gray-200
         py-[1.2rem]"
      >
        <div className="flex justify-between items-center mx-7">
          <div>
            <Logo />
          </div>

          <div>
            <Link href="/">
              <Image
                src={BuyCoffe}
                alt="buy me a coffe"
                className="hidden lg:block"
              />
            </Link>
          </div>

          <div className="flex items-center justify-center space-x-3">
            <Link href="https://github.com/mouhamedhanne">
              {" "}
              <FontAwesomeIcon icon={faGithub} className="text-3xl" />
            </Link>
            <Link href="/Inscription">
              <Buttons size="big">Connexion</Buttons>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

{
  /*
   */
}
