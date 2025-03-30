import Image from "next/image";
import React from "react";
import DeveloperAnimation from "./DeveloperAnimation";

const Home = () => {
  return (
    <div
      id="home"
      className="flex flex-col justify-center items-center mt-16 py-3 w-full min-h-[75vh] sm:min-h-[90vh]"
    >
      {/* Hi Text */}
      <h1 className="shadow-lg mt-4 sm:mt-4 px-2 py-1 rounded-md">
        Hi I&apos;m Durgesh 🙋‍♂️
      </h1>
      {/* Image Div */}
      {/* <div className="relative -top-14 sm:-top-20 flex w-full overflow-hidden">
        <Image
          src={"/images/personal/software-developer.jpg"}
          alt="My photo"
          width={2370}
          height={1000}
          className="w-full h-auto object-contain"
          id="home-image"
        />
      </div> */}
      <DeveloperAnimation/>
      {/* Icons */}
    </div>
  );
};

export default Home;
