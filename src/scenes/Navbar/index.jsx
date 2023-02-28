import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = () => {
  let Links = [
    { name: "HOME", link: "home" },
    { name: "ABOUT", link: "about" },
    { name: "PROJECTS", link: "projects" },
    { name: "CONTACT ME", link: "contactme" },
  ];

  return (
    <motion.div
      id="navbar"
      className="fixed top-0 left-0 z-10 flex w-full justify-between bg-black shadow-md"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
    >
      {/* LEFT SIDE */}
      <img className="h-[60px] w-[60px] bg-gray-200" src="" alt="" />
      {/* RIGHT SIDE */}
      <ul className="flex items-center gap-10 px-10 text-primaryBG-100">
        {Links.map((link) => (
          <li
            key={link.name}
            className="rounded p-3 transition ease-in-out hover:bg-yellow-500 hover:text-gray-400 active:bg-red-500"
          >
            <Link to={link.link} spy={true} smooth={true} duration={300}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      {/* MOBILE MENU */}
      {}
    </motion.div>
  );
};

export default Navbar;
