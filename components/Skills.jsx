const Skills = () => {
  const skillCategories = [
    {
      name: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"]
    },
    {
      name: "Backend",
      skills: ["Node.js", "Express", "MongoDB", "SQL", "API Development"]
    },
    {
      name: "Tools & Others",
      skills: ["Git", "GitHub", "VS Code", "Responsive Design", "Problem Solving"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          My Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.name} className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.name}</h3>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill} className="flex items-center">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-blue-600 h-2.5 rounded-full" 
                        style={{ width: `${Math.floor(Math.random() * 31) + 70}%` }}
                      ></div>
                    </div>
                    <span className="min-w-[80px] ml-4 text-sm text-gray-600">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;