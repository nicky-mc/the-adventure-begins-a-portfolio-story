// SpellBox.jsx
"use client";
// SpellBox.jsx
import { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';

export default function SpellBox() {
  const [showSpell, setShowSpell] = useState(false);

  const spellContent = `
  /*
  ** Magic Profile Spell
  */

  const sorcererProfile = {
    name: "Dominique Mortoza-Cowles",
    title: "Level 20 Sorcerer (Phoenix Bloodline)",
    location: "Fakenham, UK",
    email: "d.mortozacowles@gmail.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "TailwindCSS",
      "SQL",
      "GitHub"
    ],
    strengths: [
      "Team Collaboration",
      "Technical Support",
      "Troubleshooting",
      "User Training",
      "Presentation Skills"
    ],
    background: "Transitioning to software development with hands-on bootcamp experience."
  };

  const spellCasting = () => {
    console.log("Unleashing web development magic...");
  };

  spellCasting();
  `;

  return (
    <div className="p-6 rounded-lg shadow-lg bg-gray-900 text-green-400 mt-8 font-mono">
      <h3 className="text-2xl text-center text-yellow-400 mb-4">Spell Scroll</h3>
      <div
        style={{
          border: '2px solid #FFD700',
          backgroundImage: 'url("/images/fantasy-scroll.jpg")',
          backgroundSize: 'cover',
        }}
        className="p-4 mb-4 rounded"
      >
        {showSpell ? (
          <pre>
            <Typewriter
              words={[spellContent]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={30}
              deleteSpeed={20}
            />
          </pre>
        ) : (
          <p className="text-center text-gray-400">The scroll remains sealed...</p>
        )}
      </div>
      <div className="text-center">
        <button
          className={`btn ${
            showSpell
              ? 'btn-error bg-gradient-to-r from-red-600 to-orange-400 hover:from-red-700 hover:to-orange-500'
              : 'btn-primary bg-gradient-to-r from-purple-600 to-blue-400 hover:from-purple-700 hover:to-blue-500'
          } text-white shadow-md`}
          onClick={() => setShowSpell((prev) => !prev)}
        >
          {showSpell ? "Seal the Scroll" : "Cast 'Unleash Web Dev Magic'"}
        </button>
      </div>
    </div>
  );
}
