import { PagesProps } from "@/interfaces/fixed";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

export default function FirstPage() {

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: 0.8,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 0.4,
          },
        },
      }}
      className="flex flex-col items-center justify-center h-screen px-4 text-center"
    >
      <h1 className="text-white text-4xl md:text-5xl font-light">
        Olá<span className="text-md text-['#92E880']">
          .
        </span>
      </h1>
      <p className="text-white text-lg md:text-xl mt-2 font-extralight">
        Bem-vindo ao meu portfólio!
      </p>
      <a className="border border-[#92E880] text-[#92E880] mt-4 hover:bg-[#92E880] hover:text-black p-2 px-4 rounded-xl" href="/GABRIEL PALMIERI CURRICULO.pdf" download>
        Download CV
      </a>

      <motion.div
        className="absolute bottom-10 flex justify-center items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut",
        }}
      >
        <FaArrowDown className="text-white text-3xl md:text-4xl" />
      </motion.div>
    </motion.section>
  );
}
