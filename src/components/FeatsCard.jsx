// FeatsCard.jsx
export default function FeatsCard() {
    const feats = [
      { name: 'Responsive Design', description: 'Adjust dynamically to fit the target.', icon: '📐' },
      { name: 'Greater Spell Penetration', description: 'Bypass the toughest firewalls.', icon: '🛡️' },
      { name: 'Quicken Spell', description: 'Cast a spell as a swift action.', icon: '⚡' },
      { name: 'Debugging Mastery', description: 'Remove errors with a single action.', icon: '🔧' },
    ];
  
    return (
      <div className="card bg-neutral shadow p-4">
        <h3 className="text-xl font-bold mb-4">Feats</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {feats.map((feat, index) => (
            <div key={index} className="card bg-gray-800 shadow-md p-4 text-white rounded-lg hover:scale-105 transform transition">
              <div className="flex items-center mb-2">
                <span className="text-3xl mr-2">{feat.icon}</span>
                <h4 className="text-yellow-400 text-lg font-bold">{feat.name}</h4>
              </div>
              <p className="text-sm text-gray-300">{feat.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  