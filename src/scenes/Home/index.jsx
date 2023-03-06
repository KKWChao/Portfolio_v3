import { motion } from "framer-motion";

import SphereComponent from "../../components/SphereComponent";

const Home = () => {
  const HeaderText = "Hi, I'm Kelvin Chao".split(" ");

  const SubText =
    "A Web Developer building websites and applications that lead to success".split(
      " "
    );

  const initial = { opacity: 0, y: -100 };
  const visible = { opacity: 1, y: 0 };
  return (
    <section id="home" className="relative mx-auto mt-[60px] h-screen">
      <motion.div
        className="flex h-full flex-col items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: {},
          visible: {},
        }}
      >
        <div className="flex text-white">
          {HeaderText.map((words, i) => {
            return (
              <motion.p
                className="mx-1 text-4xl font-bold"
                transition={{ type: "inertial", bounce: 0.75, delay: 0.1 * i }}
                initial={initial}
                whileInView={visible}
                key={`${words}_${i}`}
              >
                {words === "Kelvin" || words === "Chao" ? (
                  <span
                    className="rounded bg-LightBg px-0.5 text-black duration-500 ease-in-out hover:bg-transparent hover:text-white"
                    on
                  >
                    {words}
                  </span>
                ) : (
                  words
                )}
              </motion.p>
            );
          })}
        </div>
        <div className="flex text-white">
          {SubText.map((words, i) => {
            return (
              <motion.p
                className="mx-1 text-xl"
                transition={{
                  type: "inertial",
                  bounce: 0.75,
                  delay: 0.1 * (2 + i),
                }}
                initial={initial}
                whileInView={visible}
                key={`${words}_${i}`}
              >
                {words}
              </motion.p>
            );
          })}
        </div>
      </motion.div>
      <div className="absolute top-0 z-[-10] h-full w-full bg-black">
        <SphereComponent />
      </div>
    </section>
  );
};

export default Home;
