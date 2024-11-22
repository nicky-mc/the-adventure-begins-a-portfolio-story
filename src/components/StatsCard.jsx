// StatsCard.jsx
export default function StatsCard() {
    const stats = [
      { key: 'Strength', value: 10, icon: '💪' },
      { key: 'Dexterity', value: 20, icon: '🤸' },
      { key: 'Constitution', value: 10, icon: '🛡️' },
      { key: 'Intelligence', value: 20, icon: '🧠' },
      { key: 'Wisdom', value: 10, icon: '🦉' },
      { key: 'Charisma', value: 25, icon: '🎭' },
      { key: 'Initiative', value: 9, icon: '⚡' },
      { key: 'Caster Level', value: 20, icon: '🔮' },
      { key: 'Armor Class', value: 19, icon: '🛡️' },
    ];
  
    return (
      <div className="card bg-neutral shadow p-4">
        <h3 className="text-xl font-bold mb-4">Core Stats</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="card bg-gray-800 shadow-md p-4 text-white rounded-lg hover:scale-105 transform transition">
              <div className="flex items-center mb-2">
                <span className="text-3xl mr-2">{stat.icon}</span>
                <h4 className="text-green-400 text-base font-bold">{stat.key}</h4>
              </div>
              <h2 className="text-gray-300 text-xlg text-center">{stat.value}</h2>
            </div>
          ))}
        </div>
      </div>
    );
  }
  