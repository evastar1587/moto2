import { useState } from 'react';
import { Users } from 'lucide-react';
import SearchBar from '../components/people/SearchBar';
import ExpertList from '../components/people/ExpertList';
import ConnectionModal from '../components/people/ConnectionModal';

const PeoplePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedExpert, setSelectedExpert] = useState(null);

  return (
    <section className="space-y-4">
      <div className="bg-moto-charcoal border-l-4 border-status-warning rounded p-5 shadow-lg">
        <div className="flex items-start gap-4">
          <Users className="w-8 h-8 mt-1 flex-shrink-0 text-status-warning" />
          <div>
            <h2 className="text-xl font-bold mb-2 text-status-warning uppercase tracking-wider font-display">
              Portland Riders
            </h2>
            <p className="text-zinc-300 mb-2">
              Connect with riders, mechanics, and enthusiasts in your area.
            </p>
            <p className="text-white font-bold">
              Find help. Share knowledge. Build your crew.
            </p>
            <div className="mt-3 p-2 bg-zinc-800 border border-zinc-700">
              <p className="text-zinc-400 text-xs">
                <span className="text-moto-red font-bold">RIGHT TO REPAIR:</span> Build your local network.
              </p>
            </div>
          </div>
        </div>
      </div>

      <SearchBar 
        value={searchQuery}
        onChange={setSearchQuery}
        placeholder="Search by name, specialty, or skill..."
      />

      <ExpertList 
        searchQuery={searchQuery}
        onSelect={setSelectedExpert}
      />

      {selectedExpert && (
        <ConnectionModal 
          expert={selectedExpert}
          onClose={() => setSelectedExpert(null)}
        />
      )}
    </section>
  );
};

export default PeoplePage;
