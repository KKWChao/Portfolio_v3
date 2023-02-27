import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const ContactMe = () => {
  const inputStyles = `mb-5 w-full rounded-lg px-5 py-3 placeholder-black bg-red-100`;

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
    <section id="contactus" className="mx-auto">
      <motion.div className="flex w-full flex-col items-center justify-center">
        <div className="p-4">
          <h1 className="text-3xl font-bold">Contact Me</h1>
        </div>
        {/* FORM */}

        <div className="md:w-1/3">
          <form
            target="_blank"
            onSubmit={onSubmit}
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
              <p className="mt-1 text-red-500">
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
              <p className="text-primary-500 mt-1">
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
              <p className="text-primary-500 mt-1">
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 char."}
              </p>
            )}
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactMe;
