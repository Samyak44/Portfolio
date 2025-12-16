'use client'
import { SectionWrapper } from "@/hoc";
import { styles } from "@/styles";
import { slideIn } from "@/utils/motion";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { EarthCanvas } from "./canvas";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_ucjqr2e',
      'template_8dz0m5d',
      {
        from_name: form.name,
        to_name: 'Samyak',
        from_email: form.email,
        to_email: 'samyakcarter15@gmail.com',
        message: form.message
      },
      'sjwl6tCnUchlvqQuL'
    ).then(
      () => {
        setLoading(false);
        alert('Thank you, I will get back to you as soon as possible.');
        setForm({ name: '', email: '', message: '' });
      },
      (error) => {
        setLoading(false);
        console.log(error);
        alert('Something went wrong.');
      }
    );
  };

  return (
    <div className="mt-8 sm:mt-12 flex flex-col-reverse lg:flex-row gap-8 sm:gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-1 bg-black-100 p-6 sm:p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>
          Get In Touch
        </p>
        <h3 className={styles.sectionHeadText}>
          Contact.
        </h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 sm:mt-12 flex flex-col gap-6 sm:gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-3 sm:mb-4 text-sm sm:text-base">
              Your Name
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-3 px-4 sm:py-4 sm:px-6 placeholder:text-secondary
                text-white rounded-lg outline-none border-none font-medium text-sm sm:text-base"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-3 sm:mb-4 text-sm sm:text-base">
              Your email
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-3 px-4 sm:py-4 sm:px-6 placeholder:text-secondary
                text-white rounded-lg outline-none border-none font-medium text-sm sm:text-base"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-3 sm:mb-4 text-sm sm:text-base">
              Your message
            </span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-3 px-4 sm:py-4 sm:px-6 placeholder:text-secondary
                text-white rounded-lg outline-none border-none font-medium text-sm sm:text-base"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-2.5 px-6 sm:py-3 sm:px-8 outline-none w-full sm:w-fit
              text-white font-bold shadow-md shadow-primary rounded-xl text-sm sm:text-base
              hover:bg-tertiary/80 transition-colors"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="flex-1 h-[300px] xs:h-[350px] md:h-[450px] lg:h-auto min-h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");