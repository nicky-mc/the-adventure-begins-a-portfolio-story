// SkillsCard.jsx
export default function SkillsCard() {
    const skills = [
      { 
        name: "HTML", 
        description: "Master of structure and layout spells.", 
        proficiency: "Expert", 
        skillRank: "+5", 
        icon: "🌐" 
      },
      { 
        name: "CSS", 
        description: "Weaves intricate styles to enchant UIs.", 
        proficiency: "Expert", 
        skillRank: "+5", 
        icon: "🎨" 
      },
      { 
        name: "JavaScript", 
        description: "Wielder of dynamic and interactive magics.", 
        proficiency: "Master", 
        skillRank: "+7", 
        icon: "⚡" 
      },
      { 
        name: "TypeScript", 
        description: "Harnesses strongly-typed constructs for precision.", 
        proficiency: "Master", 
        skillRank: "+7", 
        icon: "🛡️" 
      },
      { 
        name: "React", 
        description: "Architect of reactive user interface realms.", 
        proficiency: "Grandmaster", 
        skillRank: "+8", 
        icon: "⚛️" 
      },
      { 
        name: "TailwindCSS", 
        description: "Speeds design with utility-based incantations.", 
        proficiency: "Expert", 
        skillRank: "+5", 
        icon: "🌬️" 
      },
      { 
        name: "SQL", 
        description: "Binder of structured data tables.", 
        proficiency: "Journeyman", 
        skillRank: "+3", 
        icon: "🗃️" 
      },
      { 
        name: "GitHub", 
        description: "Guardian of repositories and collaborator of teams.", 
        proficiency: "Expert", 
        skillRank: "+5", 
        icon: "🐙" 
      },
    ];
  
    return (
      <div className="card bg-neutral shadow p-4">
        <h3 className="text-xl font-bold mb-4">Skills</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="card bg-gray-800 shadow-md p-4 text-white rounded-lg transform transition-transform hover:scale-105 hover:shadow-lg"
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-2">{skill.icon}</span>
                <strong className="text-yellow-400 text-base">{skill.name}</strong>
              </div>
              <p className="text-sm italic text-gray-300 mb-2">
                {skill.description}
              </p>
              <p className="text-sm">
                <span className="text-green-400">Proficiency:</span> {skill.proficiency}
              </p>
              <p className="text-sm">
                <span className="text-blue-400">Skill Rank:</span> {skill.skillRank}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  