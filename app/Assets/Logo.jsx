"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
export default function Logo() {
  return (
    <div className="flex items-center">
      <FontAwesomeIcon
        icon={faLanguage}
        beatFade
        className="text-2xl  text-indigo-700"
      />
      <h2 className="text-[20px]  lg:text-3xl font-extrabold text-violet-700">
        Online Translator
      </h2>
    </div>
  );
}
