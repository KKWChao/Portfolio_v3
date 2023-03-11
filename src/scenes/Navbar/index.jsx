import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = ({ page }) => {
  let Links = [
    { name: "HOME", link: "home" },
    { name: "ABOUT", link: "about" },
    { name: "PROJECTS", link: "projects" },
    { name: "CONTACT ME", link: "contact" },
  ];

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navStyledScrolled =
    "fixed left-0 top-0 z-10 flex h-[80px] w-full justify-center bg-mono-800 shadow-md";
  const navbarStyled =
    "fixed left-0 top-0 z-10 flex h-[80px] w-full justify-center bg-transparent ";
  return (
    <motion.nav
      id="navbar"
      className={scrolled ? navStyledScrolled : navbarStyled}
      // className=
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
      <img
        className="fixed left-0 h-[80px] w-[80px] bg-secondary-300"
        src=""
        alt=""
      />
      {/* RIGHT SIDE */}
      <ul className="flex items-center gap-10 px-10 text-mono-100">
        {Links.map((link) => (
          <li
            key={link.name}
            className="cursor-pointer rounded p-3 transition duration-300 ease-in-out hover:bg-tertiaryOrange-300 hover:text-mono-700 active:bg-tertiaryOrange-500"
          >
            <Link to={link.link} spy={true} smooth={true} duration={500}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      {/* MOBILE MENU */}
      {}
    </motion.nav>
  );
};

export default Navbar;
