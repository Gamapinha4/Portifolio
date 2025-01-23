import { Code2, Database, Wrench, Palette, CheckCircle2, LucideProps } from "lucide-react"
import { ForwardRefExoticComponent } from "react"

export interface SkillCategory {
    name: string
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref">>
    skills: string[]
  }
  
 export const skillCategories: SkillCategory[] = [
    {
      name: "Frontend",
      icon: Palette,
      skills: ["React", "Next.js", "TypeScript", "TailwindCSS", "JavaScript"],
    },
    {
      name: "Backend",
      icon: Database,
      skills: ["Node.js", "PostgreSQL", "MongoDB", "RESTful APIs", "Express", "TypeScript", "Java", "Prisma"],
    },
    {
      name: "Desenvolvimento",
      icon: Code2,
      skills: ["Git", "Clean Code", "Testing", "CI/CD", "Metodologias Ágeis"],
    },
    {
      name: "Ferramentas",
      icon: Wrench,
      skills: ["VS Code", "Figma", "GitHub", "Terminal", "Insominia", "Postman"],
    },
  ]