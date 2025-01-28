"use client"

import { motion } from "framer-motion"

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-8 text-center text-sky-400"
        >
          Sobre Mim
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-lg mb-6">
            Sou <strong>Desenvolvedor FullStack</strong> apaixonado por criar soluções que realmente fazem a diferença. Adoro enfrentar novos desafios, aprender algo novo a cada dia e transformar ideias em realidade.
          </p>
          <p className="text-lg">
             Aqui, você vai encontrar um pouco sobre minha trajetória, meus projetos e minhas principais habilidades. Ficarei muito feliz em conversar com você, então sinta-se à vontade para entrar em contato!
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About

