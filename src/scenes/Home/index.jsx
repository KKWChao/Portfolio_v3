import { motion } from "framer-motion";

import AnimatedText from "@/components/AnimatedText";

const Home = () => {
  const HeaderText = "Hi, I'm Kelvin Chao".split(" ");

  const SubText =
    "A Web Developer building websites and applications that lead to success".split(
      " "
    );

  return (
    <section id="home" className=" mx-auto bg-white">
      <div className="mt-[60px] flex h-screen items-center justify-center">
        <div className="justify-center text-black">
          <AnimatedText wordArray={HeaderText} />
          <AnimatedText wordArray={SubText} />
        </div>
      </div>
    </section>
  );
};

export default Home;
