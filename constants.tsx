
import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'flashcard-gen',
    year: '2024',
    name: 'Flashcard Generator',
    type: 'React Web App',
    date: 'Jan 20, 2024',
    readTime: '4 minutes',
    sections: [
      {
        title: 'Learning with Purpose',
        text: 'Flashcard Generator is a comprehensive learning tool built to solve the fragmentation of online study aids. It allows users to create custom decks, manage their learning path, and quiz themselves on any topic.',
      },
      {
        text: 'Built using React, Redux Toolkit, and Formik, the app handles complex state management for multiple decks without the need for a persistent backend, utilizing browser local storage for persistence.',
      },
      {
        image: 'https://picsum.photos/seed/flashcard/1200/800',
        caption: 'Intuitive interface for creating and managing custom flashcard decks.',
      }
    ]
  },
  {
    id: 'shop-co',
    year: '2025',
    name: 'Shop.co E-commerce',
    type: 'Next.js Platform',
    date: 'Mar 15, 2025',
    readTime: '5 minutes',
    sections: [
      {
        text: 'A full-scale e-commerce platform built with Next.js and SCSS. This project focused on creating a high-performance shopping experience with server-side rendering and complex filtering systems.',
      },
      {
        terminal: {
          command: 'npm run build',
          output: [
            'Creating an optimized production build...',
            'Compiled successfully.',
            'File sizes after gzip:',
            '  47.23 kB  build/static/js/main.js',
            '  12.01 kB  build/static/css/main.css',
            'Route (app)                              Size     First Load JS',
            '┌ λ /                                    1.2 kB         85.2 kB',
            '├ λ /products/[id]                       5.4 kB         92.4 kB',
            '└ λ /cart                                3.1 kB         88.1 kB'
          ],
        }
      },
      {
        text: 'I implemented a dynamic product grid with advanced sorting functionality and a modular testimonial section to build user trust.',
      }
    ]
  },
  {
    id: 'trustco',
    year: '2025',
    name: 'Trustco Landing Page',
    type: 'Responsive Design',
    date: 'Mar 01, 2025',
    readTime: '2 minutes',
    sections: [
      {
        text: 'Designed and developed a fully responsive landing page for Trustco using pure HTML and CSS. The goal was to prove that a minimalist, high-quality interface could be achieved with foundational technologies.',
      },
      {
        image: 'https://picsum.photos/seed/trustco/1200/800',
        caption: 'Clean, professional design highlighting brand values and core offerings.',
      }
    ]
  },
];

export const FILMS = [
  { 
    title: 'Inception', 
    image: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg' 
  },
  { 
    title: 'The Dark Knight', 
    image: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg' 
  },
  { 
    title: 'Interstellar', 
    image: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg' 
  },
  { 
    title: 'Parasite', 
    image: 'https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg' 
  },
];

export interface Skill {
  name: string;
  description: string;
  icon?: string;
}

export const SKILLS: Skill[] = [
  { 
    name: "React.js", 
    description: "Modern UI development with functional components & hooks.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
  },
  { 
    name: "Next.js", 
    description: "SSR, SSG, and performance-first web architectures.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
  },
  { 
    name: "Tailwind CSS", 
    description: "Utility-first CSS for rapid, scalable UI styling.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
  },
  { 
    name: "GSAP", 
    description: "Advanced high-performance web animations.",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/greensock.svg"
  },
  { 
    name: "shadcn/ui", 
    description: "Accessible and customizable component primitives.",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/shadcnui.svg"
  },
  { 
    name: "Node.js", 
    description: "Server-side JavaScript for building RESTful APIs.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
  },
  { 
    name: "Git", 
    description: "Distributed version control and team collaboration.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
  },
  { 
    name: "MongoDB", 
    description: "NoSQL database for flexible data modeling.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
  },
  { 
    name: "JavaScript", 
    description: "Expertise in ES6+, asynchronous logic, and DOM.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
  },
  { 
    name: "HTML/CSS", 
    description: "Core web foundations with semantic structure & layouts.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
  },
  { 
    name: "SQL", 
    description: "Relational database management and complex queries.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
  }
];
