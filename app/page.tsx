'use client';
import { motion } from 'framer-motion';
import FirstPage from '@/components/FirstPage';
import Aboutme from '@/components/AboutMe';
import Projects from '@/components/Projects';
import TechList from '@/components/TechList';
import ContactMe from '@/components/ContactMe';

const listSections = [
  {
    name: 'section 1',
    component: <FirstPage/>,
  },
  {
    name: 'section 2',
    component: <Aboutme/>,
  },
  {
    name: 'section 3',
    component: <Projects />,
  },
  {
    name: 'section 4',
    component: <TechList />,
  },
  {
    name: 'section 5',
    component: <ContactMe />,
  },
];

export default function Home() {

  return (
    <div className="relative h-screen bg-[#1C1C1C] overflow-y-scroll snap-y snap-mandatory scrollbar-hide">
      {listSections.map((item) => (
        <motion.section
          key={item.name}
          id={item.name}
          className="h-screen flex items-center justify-center snap-center px-4 md:px-6 lg:px-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {item.component}
        </motion.section>
      ))}
    </div>
  );
}
