import Link from "next/link";
import React from "react";
// https://www.linkedin.com/in/mayuresh-shitole-580a36105/
const Footer = () => {
  return (
    <div className="h-16 flex justify-center items-center">
      <div className="flex flex-row justify-center items-center space-x-2">
        <h2>Developed by- </h2>
        <Link
          passHref
          href={"https://www.linkedin.com/in/mayuresh-shitole-580a36105/"}
          target="_blank"
        >
          <a target="_blank">
            <h1 className="text-indigo-600 text-xl font-semibold italic cursor-pointer hover:text-indigo-900">
              Mayuresh Shitole
            </h1>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
