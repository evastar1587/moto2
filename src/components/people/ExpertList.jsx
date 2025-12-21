import ExpertCard from './ExpertCard';
import { useExperts } from '../../hooks/useExperts';

const ExpertList = ({ searchQuery, onSelect }) => {
  const { experts, loading } = useExperts();

  const filtered = experts.filter(expert => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      expert.name.toLowerCase().includes(q) ||
      expert.specialty.toLowerCase().includes(q) ||
      expert.type.toLowerCase().includes(q) ||
      expert.skills.some(s => s.toLowerCase().includes(q))
    );
  });

  if (loading) {
    return <div className="text-center py-8 text-zinc-500">Loading experts...</div>;
  }

  if (filtered.length === 0) {
    return (
      <div className="text-center py-12 text-zinc-500">
        <p className="text-lg mb-2">No experts found</p>
        <p className="text-sm">Try adjusting your search</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <p className="text-sm text-zinc-500 font-bold uppercase">
        {filtered.length} {filtered.length === 1 ? 'Expert' : 'Experts'} Found
      </p>
      {filtered.map(expert => (
        <ExpertCard key={expert.id} expert={expert} onSelect={onSelect} />
      ))}
    </div>
  );
};

export default ExpertList;
