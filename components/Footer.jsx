import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = ({isDarkMode}) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image src={isDarkMode?assets.logo_dark:assets.logo} alt="" className="w-32 mx-auto mb-2 " />
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={isDarkMode?assets.mail_icon_dark:assets.mail_icon} alt="" className="w-6" />
          hashimayamon44@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p className="text-sm font-light opacity-80">
          ©{" "}
          {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          Hashim. All Rights Reserved.
        </p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/HashimAyamon">
              GitHub
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/hashim-a-139a00269/">
              Linkedin
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
