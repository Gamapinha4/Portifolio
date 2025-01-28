"use client"

import { motion } from "framer-motion"
import { Contact, DownloadCloud } from "lucide-react"

const Hero = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden">
      <div className="text-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-6xl font-bold mb-4 text-white"
        >
          Olá, eu sou <span className="text-sky-600">Gabriel Palmieri</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-xl sm:text-3xl text-gray-300 mb-8"
        >
          Desenvolvedor Full Stack
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          className="flex flex-col md:flex-row gap-2 align-center justify-center"
        >
          <a
              href="/GABRIEL PALMIERI CURRICULO.pdf"
              className="bg-sky-600 mr-8 ml-8 sm:mr-0 sm:ml-0 text-white px-8 py-3 rounded-full font-semibold hover:bg-sky-500 transition-colors duration-300 flex items-center justify-center md:px-6 sm:px-4"
              download
            >
              <DownloadCloud className="h-5 w-5 mr-2" />
              Download CV
            </a>
            <a
              href="#contact"
              className="bg-sky-600 mr-8 ml-8 sm:mr-0 sm:ml-0 text-white px-8 py-3 rounded-full font-semibold hover:bg-sky-500 transition-colors duration-300 flex items-center justify-center md:px-6 sm:px-4"
            >
              <Contact className="h-5 w-5 mr-2" />
              Entre em contato
            </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

