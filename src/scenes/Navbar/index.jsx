import React from "react";

const Navbar = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/#about" },
    { name: "PROJECTS", link: "/#projects" },
    { name: "CONTACT ME", link: "/#contactme" },
  ];

  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 z-10 flex w-full justify-between bg-black shadow-md"
    >
      {/* LEFT SIDE */}
      <img className="h-[60px] w-[60px] bg-red-200" src="" alt="" />
      {/* RIGHT SIDE */}
      <ul className="flex items-center gap-10 px-10 text-primaryBG-100">
        {Links.map((link) => (
          <li key={link.name} className="p-3 transition hover:text-gray-400 ">
            <a href={link.link}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
