// SpellsCard.jsx
export default function SpellsCard() {
  const spells = [
    { level: 0, name: 'Detect Errors', description: 'Scan for errors in your target’s code.', icon: '🔍' },
    { level: 0, name: 'Light', description: 'Illuminate your workspace with inspiration.', icon: '💡' },
    { level: 1, name: 'Magic Commit', description: 'Save and push code changes instantly to the repository.', icon: '💾' },
    { level: 2, name: 'Mirror Debugger', description: 'Create a perfect copy of your target’s system for debugging.', icon: '🪞' },
    { level: 3, name: 'Firewall', description: 'Erect a digital barrier to protect your systems from intrusion.', icon: '🔥' },
    { level: 4, name: 'Web Shield', description: 'Create a shield that blocks harmful scripts and attacks.', icon: '🛡️' },
    { level: 5, name: 'Cascade Style Destruction', description: 'Deal cascading damage to all interconnected nodes.', icon: '🌊' },
    { level: 6, name: 'SEO Optimization', description: 'Boost the visibility of your online spells by 50%.', icon: '🔗' },
    { level: 7, name: 'Deployment Surge', description: 'Simultaneously deploy your code to all environments.', icon: '🚀' },
    { level: 8, name: 'Sunburst 2.0', description: 'Generate a blinding light that optimizes all systems and burns adversaries.', icon: '☀️' },
    { level: 9, name: 'Web of Doom', description: 'Trap your enemies in an endless recursive loop of broken links.', icon: '🕸️' },
  ];

  return (
    <div className="card bg-neutral shadow p-4">
      <h3 className="text-xl font-bold mb-4">Spells</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {spells.map((spell, index) => (
          <div key={index} className="card bg-gray-800 shadow-md p-4 text-white rounded-lg hover:scale-105 transform transition">
            <div className="flex items-center mb-2">
              <span className="text-3xl mr-2">{spell.icon}</span>
              <h4 className="text-purple-400 text-base font-bold">Level {spell.level}: {spell.name}</h4>
            </div>
            <p className="text-sm text-gray-300">{spell.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
