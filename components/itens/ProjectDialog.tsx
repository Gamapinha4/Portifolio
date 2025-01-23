import React from 'react';
import { X, Github, Globe, Calendar, Users, Tag } from 'lucide-react';
import { Project } from '@/list/ProjectsList';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProjectDialogProps {
  isOpen: boolean;
  onClose: () => void;
  project?: Project;
}

export function ProjectDialog({ isOpen, onClose, project }: ProjectDialogProps) {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <motion.div
        className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-t-lg"
            />
          </motion.div>

          <motion.button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <X className="w-5 h-5" />
          </motion.button>
        </div>

        <div className="p-6">
          <motion.h2
            className="text-2xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {project.title}
          </motion.h2>

          <div className="flex items-center gap-4 mb-6">
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Calendar className="w-4 h-4 text-gray-600" />
              <span className="text-sm text-gray-600">{project.startDate}</span>
            </motion.div>
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Github className="w-4 h-4" />
                <span className="text-sm">GitHub</span>
              </motion.a>
            )}
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm">Demo</span>
              </motion.a>
            )}
          </div>

          <motion.p
            className="text-gray-700 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {project.description}
          </motion.p>

          <motion.div
            className="mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-lg font-semibold mb-2">Tecnologias</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1 bg-gray-100 rounded-full text-sm flex items-center gap-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Tag className="w-3 h-3" />
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <h3 className="text-lg font-semibold mb-2">Equipe</h3>
            <div className="flex flex-wrap gap-2">
              {project.team.map((member) => (
                <motion.div
                  key={member}
                  className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Users className="w-3 h-3" />
                  <span className="text-sm">{member}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
