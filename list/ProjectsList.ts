import { StaticImageData } from "next/image";
import Go from '../image/GO.png';
import Evo from '../image/EVO.png';
import Birthdays from '../image/BIRTHDAYS.png';
import BrainBurn from '../image/BRAINBURN.png';

export interface Project {
    title: string;
    description: string;
    image: StaticImageData;
    tech: string[];
    githubUrl?: string;
    liveUrl?: string;
    startDate: string;
    team: string[];
}
  
  export const projects: Project[] = [
    {
      title: "EVO",
      description: "EVO é um aplicativo intuitivo e fácil de usar, projetado para ajudar a organizar e marcar salas de reuniões de maneira eficiente. Com uma interface minimalista e futurista, EVO facilita a gestão das reservas de salas, garantindo que suas reuniões sejam agendadas sem complicações.",
      tech: ["Next.js", "TailwindCSS"],
      image: Evo,
      githubUrl: "https://github.com/Gamapinha4/Evo",
      startDate: "2024",
      team: ['Gabriel Palmieri']
    },
    {
      title: "GOPASS",
      description: "Este projeto é um aplicativo de gestão de passageiros voltado para empresas de pequeno porte. Com ele, é possível controlar as rotas dos passageiros e manter um gerenciamento eficiente sobre eles.",
      tech: ["Expo", "React Native", "Supabase"],
      image: Go,
      startDate: "2022",
      team: ['Gabriel Palmieri']
    },
    {
      title: "BIRTHDAYS",
      description: "A ideia desse projeto foi justamente para quem esquece o aniversário, como eu. Desenvolvi um aplicativo onde é possível marcar o aniversário em um calendário. No dia, o aplicativo envia uma notificação para lembrar quem está fazendo aniversário.",
      tech: ["Expo", "React Native", "Local Storage"],
      image: Birthdays,
      githubUrl: "https://github.com/Gamapinha4/Birthdays",
      startDate: "2022",
      team: ['Gabriel Palmieri']
    },
    {
      title: "BRAINBURN",
      description: "BrainBurn é um aplicativo educacional que oferece quizzes personalizados para otimizar o aprendizado. Com modos variados e diferentes níveis de dificuldade, adapta-se às necessidades individuais dos usuários, proporcionando uma experiência dinâmica e eficaz.",
      tech: ["Expo", "React Native", "Supabase"],
      image: BrainBurn,
      startDate: "2022",
      team: ['Gabriel Palmieri']
    },
  ];