import React from "react";
import Image from "next/image";

const Loading = () => {
  return (
    <div>
      <div className="  h-40 flex flex-col items-center">
        <Image
          src={"/logo.png"}
          width={40}
          height={40}
          layout="intrinsic"
          alt="Logo image of Random things website"
        />
        <span className="text-indigo-600 italic">Getting for you..!</span>
      </div>
    </div>
  );
};

export default Loading;
