import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <header className="w-full flex justify-between items-center bg-white py-2 px-4 border-b border-b-[#e63bf4]">
        <Link href="/">Book Api</Link>
        <Link
          href="/register"
          className="font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
        >
          Register
        </Link>
      </header>
    </>
  );
};

export default Header;
