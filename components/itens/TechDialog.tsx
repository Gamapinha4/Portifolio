import React from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { SkillCategory } from '@/list/TechList';

interface techDialogProps {
  isOpen: boolean;
  onClose: () => void;
  tech?: SkillCategory;
}

export function TechDialog({ isOpen, onClose, tech }: techDialogProps) {
  if (!isOpen || !tech) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative">
          <motion.button
            onClick={onClose}
            className="absolute top-2 right-2 bg-white hover:bg-gray-100 transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <X className="w-5 h-5" />
          </motion.button>
        </div>

        <div className="p-6">
          <div className='flex flex-row items-center gap-2 mb-8'>
            <div className="p-2 rounded-lg bg-[#92E880]/90 text-[black]">{<tech.icon/>}</div>
            <motion.h2
              className="text-2xl font-medium"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              {tech.name}
            </motion.h2>
          </div>

          <div className="mb-6">
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              {tech.skills.map((skill) => (
                <motion.div
                  key={skill}
                  className="flex items-center gap-2 text-sm"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                >
                  <CheckCircle2 className="w-4 h-4 text-[#92E880] flex-shrink-0" />
                  <span className="text-black">{skill}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
