import { PagesProps } from "@/interfaces/fixed";
import Destacar from "./itens/Destacar";

export default function Aboutme() {
  return (
    <section className="px-4 md:px-12 lg:px-32 font-extralight space-y-6">
      <h1
        className="font-normal text-2xl md:text-3xl lg:text-4xl text-[#92E880]"
      >
        SOBRE MIM
      </h1>
      <p className="text-white text-sm md:text-base lg:text-lg leading-relaxed">
        Olá! Sou <Destacar>Gabriel Palmieri</Destacar>, um desenvolvedor{" "}
        <Destacar>FullStack</Destacar> apaixonado por criar soluções que
        realmente fazem a diferença. Trabalho com tecnologias como{" "}
        <Destacar>React</Destacar>, <Destacar>Node.js</Destacar> e bancos de
        dados como <Destacar>Supabase</Destacar> e{" "}
        <Destacar>Firebase</Destacar>, sempre focado em construir projetos
        inovadores e escaláveis.
      </p>
      <p className="text-white text-sm md:text-base lg:text-lg leading-relaxed">
        Adoro enfrentar novos desafios, aprender algo novo a cada dia e
        transformar ideias em realidade. Aqui, você vai encontrar um pouco sobre
        minha trajetória, meus projetos e minhas principais habilidades.
        Ficarei muito feliz em conversar com você, então sinta-se à vontade
        para entrar em contato!
      </p>
    </section>
  );
}
