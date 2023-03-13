import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const ContactMe = () => {
  const inputStyles = `mb-5 w-full rounded-lg px-5 py-3 placeholder-mono-400 bg-LighterBg border drop-shadow-md text-mono-700`;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact" className="mx-auto h-5/6 w-full bg-mono-700 ">
      <motion.div
        className="mb-10 flex h-full w-full flex-col items-center justify-center md:mb-[20vh]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="m-4 p-4">
          <h1 className="text-5xl font-bold text-mono-200">Contact Me</h1>
        </div>
        {/* FORM */}

        <div className="md:w-1/3">
          <form
            className="flex flex-col items-center gap-4"
            target="_blank"
            onSubmit={onSubmit}
            // add my link from from submit
            action="https://formsubmit.co/"
            method="POST"
          >
            {/* NAME INPUT */}
            <input
              type="text"
              className={inputStyles}
              placeholder="NAME"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="mt-1 text-tertiaryOrange-300">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}
            {/* EMAIL INPUT */}
            <input
              className={inputStyles}
              type="text"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="mt-1 text-tertiaryOrange-300">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}

            {/* MESSAGE INPUT */}
            <textarea
              className={inputStyles}
              placeholder="MESSAGE"
              rows={4}
              cols={50}
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="mt-1 text-tertiaryOrange-300">
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 char."}
              </p>
            )}
            <button
              type="submit"
              className="button w-1/3 rounded-lg border-4 border-primary-200 border-opacity-20 bg-primary-100 
              py-3 text-xl font-bold text-mono-800  shadow-lg transition duration-200 ease-in-out hover:bg-primary-300 hover:shadow-2xl active:bg-secondary-300"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactMe;
