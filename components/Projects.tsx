'use client';
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";
import { ArrowLeft, ArrowRight, Github } from "lucide-react";
import { useState, useEffect } from "react";
import { Project, projects } from "@/list/ProjectsList";
import { ProjectDialog } from "./itens/ProjectDialog";

const TechTag = ({ tech }: { tech: string }) => (
  <span className="px-2 py-1 text-xs rounded-md bg-[#242424] text-white font-normal">
    {tech}
  </span>
);

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [projectsSelect, setProjectsSelect] = useState<Project>();
  const [dialog, setDialog] = useState(false);

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setCardsPerPage(1);
      } else if (window.innerWidth <= 768) {
        setCardsPerPage(1);
      } else if (window.innerWidth <= 1277) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const indexOfLastProject = currentPage * cardsPerPage;
  const indexOfFirstProject = indexOfLastProject - cardsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const totalPages = Math.ceil(projects.length / cardsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  function handleSelectProject(project: Project) {
    setProjectsSelect(project);
    setDialog(true);
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const touchDistance = touchStart - touchEnd;

    if (touchDistance > 50) {
      handleNext();
    } else if (touchDistance < -50) {
      handlePrevious();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section
      className="w-full h-screen bg-background py-12 px-4 md:px-6 flex mt-24 sm:items-center sm:mt-0 justify-center"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="max-w-7xl w-full">
        <div className="sm:mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#92E880] text-2xl sm:text-4xl md:text-5xl font-medium"
          >
            MEUS PROJETOS
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 font-light text-white text-sm sm:text-lg"
          >
            Confira alguns dos meus principais projetos e veja o que posso fazer.
          </motion.p>
        </div>

        <div className="md:hidden flex flex-row items-center mt-2 justify-between gap-2">
          <div className="text-white text-sm flex items-center gap-2">
            <ArrowRight className="w-4 h-4 animate-pulse" />
            <p className="animate-pulse">Slide para ver mais</p>
          </div>
          <div className="text-white text-xs font-light">
            <p>
              {Math.min(indexOfLastProject, projects.length)} de {projects.length}
            </p>
          </div>
        </div>

        <div className="grid mt-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg-2:grid-cols-3 gap-6">
          {currentProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleSelectProject(project)}
            >
              <Card className="group h-full bg-[#1A1A1A] hover:bg-[#242424] transition-colors border-none">
                <CardHeader>
                  <div className="overflow-hidden rounded-lg mb-4">
                    <img
                      src={project.image.src}
                      alt={project.title}
                      className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                  <CardTitle className="text-xl mb-2 text-white">{project.title}</CardTitle>
                  <CardDescription className="text-gray-300 line-clamp-3 sm:line-clamp-4">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <TechTag key={tech} tech={tech} />
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2 mt-4">
                  <Button
                    disabled={project.githubUrl == undefined}
                    variant="secondary"
                    size="sm"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      {project.githubUrl == undefined ? 'Repositorio Privado' : 'Code'}
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center mt-2 sm:mt-2 md:mt-8 lg:mt-8 gap-4">
          <div className="hidden md:flex gap-4">
            <Button
              variant="secondary"
              size="sm"
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className="sm:w-auto md:w-32 lg:w-40"
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="sm:w-auto md:w-32 lg:w-40"
            >
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>




        <ProjectDialog
          isOpen={dialog}
          onClose={() => setDialog(false)}
          project={projectsSelect}
        />
      </div>
    </section>
  );
}
