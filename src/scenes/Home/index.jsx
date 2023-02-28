import { motion } from "framer-motion";

import AnimatedText from "@/components/AnimatedText";

const Home = () => {
  const HeaderText = "Hi, I'm Kelvin Chao".split(" ");

  const SubText =
    "A Web Developer building websites and applications that lead to success".split(
      " "
    );

  return (
    <section id="home" className="bg-LighterBg mx-auto mt-[60px] h-screen">
      <div className="flex h-full items-center justify-center">
        <div className="text-black">
          <h1 className="text-4xl font-bold">Hi, I'm Kelvin Chao</h1>
          <p className="text-xl font-semibold">
            A Web Developer building websites and applications that lead to
            success
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
