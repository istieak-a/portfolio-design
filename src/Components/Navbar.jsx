import React from "react";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [navToggle, setNavToggle] = React.useState(false);
  return (
    <div className="bg-[#4831d4] h-[90px] w-full flex items-center justify-between px-10">
      <h1 className="text-[#ccf381] font-scripto text-4xl">Istieak.</h1>
      {navToggle ? (
        <IoCloseSharp
          className="text-4xl cursor-pointer"
          onClick={() => setNavToggle(!navToggle)}
        />
      ) : (
        <IoMenu
          className="text-4xl cursor-pointer text-[#ccf381]"
          onClick={() => setNavToggle(!navToggle)}
        />
      )}
    </div>
  );
};

export default Navbar;
