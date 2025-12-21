import React, { useState } from 'react';
import { Package, Filter } from 'lucide-react';
import { useTools } from '../hooks/useTools';
import ToolCard from '../components/inventory/ToolCard';
import ToolRequestModal from '../components/inventory/ToolRequestModal';

const InventoryPage = () => {
  const { tools, loading } = useTools();
  const [selectedTool, setSelectedTool] = useState(null);
  const [filters, setFilters] = useState({
    type: 'ALL',
    maxDistance: 25,
    isFree: false,
  });

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const filteredTools = tools.filter((tool) => {
    if (filters.type !== 'ALL' && tool.type !== filters.type) return false;
    if (tool.distance > filters.maxDistance) return false;
    if (filters.isFree && !tool.isFree) return false;
    return true;
  });

  if (loading) {
    return <div className="text-center py-10 text-zinc-500">Loading community inventory...</div>;
  }

  return (
    <section className="space-y-4">
      <div className="bg-moto-charcoal border-l-4 border-status-success rounded p-5 shadow-lg">
        <div className="flex items-start gap-4">
          <Package className="w-8 h-8 mt-1 flex-shrink-0 text-status-success" />
          <div>
            <h2 className="text-xl font-bold mb-2 text-status-success uppercase tracking-wider font-display">
              Tool & Space Pool
            </h2>
            <p className="text-zinc-300 mb-2">
              Specialty tools shouldn't collect dust. Garages shouldn't sit empty.
            </p>
            <p className="text-white font-bold">
              Borrow what you need. Share what you have.
            </p>
            <div className="mt-3 p-2 bg-zinc-800 border border-zinc-700">
              <p className="text-zinc-400 text-xs">
                <span className="text-status-success font-bold">RIGHT TO REPAIR:</span> Access to tools is access to independence.
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <select
            value={filters.type}
            onChange={(e) => handleFilterChange('type', e.target.value)}
            className="bg-zinc-800 border border-zinc-700 text-white text-sm p-2 focus:border-moto-red focus:outline-none"
          >
            <option value="ALL">All Types</option>
            <option value="TOOL">Tools Only</option>
            <option value="SPACE">Spaces Only</option>
          </select>
          <select
            value={filters.maxDistance}
            onChange={(e) => handleFilterChange('maxDistance', Number(e.target.value))}
            className="bg-zinc-800 border border-zinc-700 text-white text-sm p-2 focus:border-moto-red focus:outline-none"
          >
            <option value={5}>Within 5 miles</option>
            <option value={10}>Within 10 miles</option>
            <option value={25}>Within 25 miles</option>
            <option value={100}>Any distance</option>
          </select>
          <label className="flex items-center gap-2 text-sm text-zinc-400">
            <input
              type="checkbox"
              checked={filters.isFree}
              onChange={(e) => handleFilterChange('isFree', e.target.checked)}
              className="accent-moto-red"
            />
            Free only
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTools.length === 0 ? (
          <div className="col-span-full text-center text-zinc-500 py-8">
            No tools found matching your filters.
          </div>
        ) : (
          filteredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} onRequest={setSelectedTool} />
          ))
        )}
      </div>

      {selectedTool && (
        <ToolRequestModal tool={selectedTool} onClose={() => setSelectedTool(null)} />
      )}
    </section>
  );
};

export default InventoryPage;
