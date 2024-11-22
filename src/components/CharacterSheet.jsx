// CharacterSheet.jsx
import StatsCard from './StatsCard';
import FeatsCard from './FeatsCard';
import SpellsCard from './SpellsCard';
import MagicItemsCard from './MagicItemsCard';
import SkillsCard from './SkillsCard';

export default function CharacterSheet() {
  return (
    <div className="card bg-base-100 shadow-xl mt-6 p-6">
      <h2 className="text-3xl font-bold mb-4 text-center">Character Sheet</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <StatsCard />
        <FeatsCard />
        <SpellsCard />
        <SkillsCard />
        <MagicItemsCard />
      </div>
    </div>
  );
}
