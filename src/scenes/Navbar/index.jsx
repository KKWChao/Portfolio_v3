import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = () => {
  let Links = [
    { name: "HOME", link: "home" },
    { name: "ABOUT", link: "about" },
    { name: "PROJECTS", link: "projects" },
    { name: "CONTACT ME", link: "contact" },
  ];

  return (
    <motion.div
      id="navbar"
      className="fixed top-0 left-0 z-10 flex w-full justify-between bg-DarkBg shadow-md"
      // initial="hidden"
      // whileInView="visible"
      // viewport={{ once: true, amount: 0.5 }}
      // transition={{ duration: 0.2 }}
      // variants={{
      //   hidden: { opacity: 0.5 },
      //   visible: { opacity: 1 },
      // }}
    >
      {/* LEFT SIDE */}
      <img className="h-[60px] w-[60px] bg-MediumBg" src="" alt="" />
      {/* RIGHT SIDE */}
      <ul className="flex items-center gap-10 px-10 text-LighterBg">
        {Links.map((link) => (
          <li
            key={link.name}
            className="hover:bg-BrightBlue cursor-pointer rounded p-3 transition ease-in-out hover:text-LightBg active:bg-Highlight"
          >
            <Link to={link.link} spy={true} smooth={true} duration={500}>
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
