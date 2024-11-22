// MagicItemsCard.jsx
export default function MagicItemsCard() {
    const magicItems = [
      { name: "Wand of Web Development", description: "Grants +5 to coding speed.", icon: '🪄' },
      { name: "Ring of Reactivity", description: "Ensures dynamic UIs in a snap.", icon: '💍' },
      { name: "Amulet of TailwindCSS", description: "Harness the winds of design simplicity.", icon: '🧿' },
    ];
  
    return (
      <div className="card bg-neutral shadow p-4">
        <h3 className="text-xl font-bold mb-4">Magic Items</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {magicItems.map((item, index) => (
            <div key={index} className="card bg-gray-800 shadow-md p-4 text-white rounded-lg hover:scale-105 transform transition">
              <div className="flex items-center mb-2">
                <span className="text-3xl mr-2">{item.icon}</span>
                <h4 className="text-blue-400 text-lg font-bold">{item.name}</h4>
              </div>
              <p className="text-sm text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  