import React from "react";
import { ownavatar } from "../assets";

const Avatar = () => {
  return (
    <>
      <div className="hidden md:flex lg:max-w-none ml-48 rounded-full overflow-hidden bg-[#2e2257]">
        <img
          src={ownavatar}
          width={737}
          height={878}
          alt=""
          className="translate-z-0 w-full 2xl:h-1/2 object-cover"
        />
      </div>
    </>
  );
};

export default Avatar;
