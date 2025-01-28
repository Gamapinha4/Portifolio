"use client"

import { motion } from "framer-motion"
import { Palette, Database, Code, Wrench } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    icon: Palette,
    skills: ["React", "TypeScript", "JavaScript", "Next.js", "TailwindCSS"],
  },
  {
    title: "Backend",
    icon: Database,
    skills: ["Node.js", "MongoDB", "Express", "Java", "PostgreSQL", "RESTful APIs", "TypeScript", "Prisma"],
  },
  {
    title: "Desenvolvimento",
    icon: Code,
    skills: ["Git", "Testing", "Metodologias Ágeis", "Clean Code", "CI/CD"],
  },
  {
    title: "Ferramentas",
    icon: Wrench,
    skills: ["VS Code", "GitHub", "Insomnia", "Figma", "Terminal", "Postman"],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center text-sky-400"
        >
          Minhas Habilidades
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/30 rounded-[10px] p-6 backdrop-blur-sm border border-sky-500/20 hover:border-sky-500/50 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <category.icon className="w-6 h-6 text-sky-400" />
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
                    <span className="text-gray-300">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

