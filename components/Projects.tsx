// import Image from 'next/image';

// interface Project {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   tags: string[];
//   github: string;
//   demo: string;
// }

// const Projects: React.FC = () => {
//   const projects: Project[] = [
//     {
//       id: 1,
//       title: "Back to Top Button",
//       description: "An open-source contribution to the Fork-Commit-Merge project. Implemented a floating button that appears when users scroll down and takes them back to the top of the page.",
//       image: "/project1-placeholder.jpg",
//       tags: ["React", "TypeScript", "Tailwind CSS", "Open Source"],
//       github: "https://github.com/your-username/fork-commit-merge-web",
//       demo: "https://fork-commit-merge.com"
//     },
//     {
//       id: 2,
//       title: "Project Two",
//       description: "Short description of your second project goes here. Talk about the problem it solves and the technologies you used.",
//       image: "/project2-placeholder.jpg",
//       tags: ["Next.js", "MongoDB", "Tailwind CSS"],
//       github: "https://github.com/your-username/project-two",
//       demo: "https://project-two.vercel.app"
//     },
//     // Add more projects as needed
//   ];

//   return (
//     <section id="projects" className="py-20 bg-gray-50">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
//           My Projects
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
//           {projects.map((project) => (
//             <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
//               <div className="relative h-48 w-full">
//                 <Image
//                   src={project.image}
//                   alt={project.title}
//                   layout="fill"
//                   objectFit="cover"
//                 />
//               </div>
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
//                 <p className="text-gray-600 mb-4">{project.description}</p>
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.tags.map((tag) => (
//                     <span key={tag} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//                 <div className="flex space-x-4">
//                   <a 
//                     href={project.github} 
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-600 hover:underline"
//                   >
//                     GitHub
//                   </a>
//                   <a 
//                     href={project.demo} 
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-600 hover:underline"
//                   >
//                     Live Demo
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;