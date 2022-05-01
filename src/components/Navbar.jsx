import React, { useEffect, useState } from "react";
import {
  solutionsText,
  blogText,
  contactText,
  helpText,
  partnerText,
} from "../locales/pt-br";

function Navbar(props) {
  const [navbarColor, setNavbarColor] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY >= 479) {
      setNavbarColor(true);
    }
    if (window.scrollY < 479) {
      setNavbarColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackgroundColor);
  });

  return (
    <header
      className={`flex justify-between p-5 ${
        navbarColor ? "bg-rose-200" : "bg-slate-100"
      } border-y border-slate-400 z-2`}
    >
      <div className="flex items-center space-x-5">
        <a href="/">
          <div className="flex object-contain items-center cursor-pointer">
            <img className="w-28" src="/images/logo.svg" alt="logo" />
          </div>
        </a>
      </div>
      <div className="flex items-center space-x-5 text-black">
        <div className="hidden md:inline-flex items-center space-x-5 font-extralight">
          <span className="cursor-pointer">{solutionsText}</span>
          <span className="cursor-pointer">{blogText}</span>
          <span className="cursor-pointer">{contactText}</span>
          <span className="cursor-pointer">{helpText}</span>
          <span className="cursor-pointer">{partnerText}</span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
