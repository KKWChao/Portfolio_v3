import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";

import SphereComponent from "../../components/SphereComponent";

const Home = () => {
  const HeaderText = "Hi, I'm Kelvin Chao".split(" ");

  const SubText = "Web Developer".split(" ");

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
                  <span className="rounded bg-LightBg px-0.5 text-black duration-500 ease-in-out hover:bg-transparent hover:text-white">
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
        <Canvas>
          <ambientLight />
          <Stars
            saturation={1}
            radius={500}
            depth={50}
            count={1000}
            factor={20}
          />

          <SphereComponent />
          <OrbitControls
            autoRotate
            enablePan={false}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </div>
    </section>
  );
};

export default Home;
