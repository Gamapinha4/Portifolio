'use client'

import { useState } from "react"
import { Code2, Database, Wrench, Palette, CheckCircle2 } from "lucide-react"
import { PagesProps } from "@/interfaces/fixed"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from "./ui/button"
import { TechDialog } from "./itens/TechDialog"
import { skillCategories, SkillCategory } from "@/list/TechList"
  

export default function TechList() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>()

  const openDialog = (category: SkillCategory) => {
    setSelectedCategory(category)
    setIsOpen(true)
  }

  const closeDialog = () => setIsOpen(false)

  return (
    <section className="w-full min-h-screen mt-16 bg-[#1C1C1C] py-12 px-4 md:px-6 flex justify-center items-center">
      <div className="max-w-6xl w-full">
        <h2 className="text-[#92E880] text-4xl md:text-6xl text-center mb-2 font-normal">HABILIDADES</h2>
        <p className="text-white text-center text-sm font-light mb-16">Conheça as principais tecnologias e ferramentas que domino.</p>

        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className="bg-[#2A2A2A] rounded-lg p-6 hover:bg-[#333333] transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-[#92E880]/10 text-[#92E880]">{<category.icon/>}</div>
                <h3 className="text-xl font-semibold text-white">{category.name}</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#92E880] flex-shrink-0" />
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:hidden gap-8 justify-center">
          {skillCategories.map((category) => (
            <div onClick={() => openDialog(category)} className="flex flex-row items-center bg-[#2A2A2A] h-24 rounded-lg p-6 hover:bg-[#333333] transition-colors gap-2">
                <div className="p-2 rounded-lg bg-[#92E880]/10 text-[#92E880]">{<category.icon/>}</div>
                <h3 className="text-lg text-white font-light">{category.name}</h3>
            </div>
          ))}
        </div>
        <TechDialog
            isOpen={isOpen}
            onClose={closeDialog}
            tech={selectedCategory}
        />
      </div>
    </section>
  )
}
