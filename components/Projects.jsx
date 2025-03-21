import Link from 'next/link';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Freedom Finances",
      description: "An open-source contribution to the Fork-Commit-Merge project. Implemented a floating button that appears when users scroll down and takes them back to the top of the page.",
      image: "/project1-placeholder.jpg",
      tags: ["React", "JavaScript", "Tailwind CSS", "Open Source"],
      github: "https://github.com/pkj-web/fork-commit-merge-web",
      demo: "https://fork-commit-merge.com"
    },
    {
      id: 2,
      title: "Vision",
      description: "A responsive personal portfolio website built with Next.js and Tailwind CSS to showcase my projects and skills.",
      image: "/project2-placeholder.jpg",
      tags: ["Next.js", "JavaScript", "Tailwind CSS"],
      github: "https://github.com/pkj-web/portfolio",
      demo: "#"
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48 w-full bg-gray-200">
                {/* Image placeholder */}
                <div className="flex items-center justify-center h-full text-gray-500">
                  Project Image
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.github} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    GitHub
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;