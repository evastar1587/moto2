import { useState } from 'react';
import { BookOpen, Filter } from 'lucide-react';
import { useGuides } from '../hooks/useGuides';
import GuideCard from '../components/guides/GuideCard';
import GuideModal from '../components/guides/GuideModal';

const GuidesPage = () => {
  const { guides, loading } = useGuides();
  const [selectedGuide, setSelectedGuide] = useState(null);
  const [filters, setFilters] = useState({
    category: 'ALL',
    difficulty: 'ALL',
  });

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const filteredGuides = guides.filter((guide) => {
    if (filters.category !== 'ALL' && guide.category !== filters.category) return false;
    if (filters.difficulty !== 'ALL' && guide.difficulty !== filters.difficulty) return false;
    return true;
  });

  if (loading) {
    return <div className="text-center py-10 text-zinc-500">Loading guides...</div>;
  }

  return (
    <section className="space-y-4">
      <div className="bg-moto-charcoal border-l-4 border-blue-500 rounded p-5 shadow-lg">
        <div className="flex items-start gap-4">
          <BookOpen className="w-8 h-8 mt-1 flex-shrink-0 text-blue-500" />
          <div>
            <h2 className="text-xl font-bold mb-2 text-blue-500 uppercase tracking-wider font-display">
              Repair Guides
            </h2>
            <p className="text-zinc-300 mb-2">
              Step-by-step guides for common repairs, maintenance, and modifications.
            </p>
            <p className="text-white font-bold">
              Learn. Fix. Share your knowledge.
            </p>
            <div className="mt-3 p-2 bg-zinc-800 border border-zinc-700">
              <p className="text-zinc-400 text-xs">
                <span className="text-moto-red font-bold">RIGHT TO REPAIR:</span> Free information for everyone.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-moto-charcoal border border-zinc-700 rounded p-4">
        <div className="flex items-center gap-2 mb-3">
          <Filter className="w-4 h-4 text-zinc-500" />
          <span className="text-sm font-bold text-zinc-400 uppercase">Filters</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <select
            value={filters.category}
            onChange={(e) => handleFilterChange('category', e.target.value)}
            className="bg-zinc-800 border border-zinc-700 text-white text-sm p-2 focus:border-blue-500 focus:outline-none rounded"
          >
            <option value="ALL">All Categories</option>
            <option value="Maintenance">Maintenance</option>
            <option value="Repair">Repair</option>
            <option value="Diagnosis">Diagnosis</option>
          </select>
          <select
            value={filters.difficulty}
            onChange={(e) => handleFilterChange('difficulty', e.target.value)}
            className="bg-zinc-800 border border-zinc-700 text-white text-sm p-2 focus:border-blue-500 focus:outline-none rounded"
          >
            <option value="ALL">All Levels</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredGuides.length === 0 ? (
          <div className="col-span-full text-center text-zinc-500 py-8">
            No guides found matching your filters.
          </div>
        ) : (
          filteredGuides.map((guide) => (
            <GuideCard key={guide.id} guide={guide} onSelect={setSelectedGuide} />
          ))
        )}
      </div>

      {selectedGuide && (
        <GuideModal guide={selectedGuide} onClose={() => setSelectedGuide(null)} />
      )}
    </section>
  );
};

export default GuidesPage;
