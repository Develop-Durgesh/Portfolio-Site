import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div
      id="contact"
      className="flex flex-col justify-center items-center gap-6 px-2 py-10"
    >
      <h1 className="font-semibold text-xl">Thank you for visiting</h1>
      <div className="flex flex-row justify-between w-full md:w-9/12">
        <a
          href="https://www.linkedin.com/in/durgesh-meshram"
          className="flex flex-row items-center gap-1 sm:gap-2 px-2 py-1 text-indigo-500 text-xs sm:text-sm md:text-base lg:text-lg underline text-nowrap"
        >
          <Image
            width={35}
            height={35}
            className="size-7 lg:size-10"
            alt="social"
            src={"/images/contacts/linkedin.png"}
          />
          <p>LinkedIn</p>
        </a>
        <a
          href="https://x.com/its_durgesh21"
          className="flex flex-row items-center gap-1 sm:gap-2 px-2 py-1 text-indigo-500 text-xs sm:text-sm md:text-base lg:text-lg underline text-nowrap"
        >
          <Image
            width={35}
            height={35}
            className="size-7 lg:size-10"
            alt="social"
            src={"/images/contacts/x.png"}
          />
          <p>X.com</p>
        </a>
        <a
          href="https://github.com/Develop-Durgesh"
          className="flex flex-row items-center gap-1 sm:gap-2 px-2 py-1 text-indigo-500 text-xs sm:text-sm md:text-base lg:text-lg underline text-nowrap"
        >
          <Image
            width={35}
            height={35}
            className="size-7 lg:size-10"
            alt="social"
            src={"/images/contacts/github.png"}
          />
          <p>Github</p>
        </a>
        <a
          href="mailto:durgeshtech23@gmail.com"
          className="flex flex-row items-center gap-1 sm:gap-2 px-2 py-1 text-indigo-500 text-xs sm:text-sm md:text-base lg:text-lg underline text-nowrap"
        >
          <Image
            width={35}
            height={35}
            className="size-7 lg:size-10"
            alt="social"
            src={"/images/contacts/gmail.png"}
          />
          <p>Email</p>
        </a>
      </div>
    </div>
  );
};

export default Footer;
