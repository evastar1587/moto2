import React from 'react';
import { BookOpen } from 'lucide-react';

const GuidesPage = () => {
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
            <div className="mt-3 p-2 bg-zinc-800 border border-zinc-700">
              <p className="text-zinc-400 text-xs">
                <span className="text-moto-red font-bold">RIGHT TO REPAIR:</span> Free information for everyone.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center py-12 text-zinc-500">
        <p className="text-lg mb-2">Repair guides coming soon...</p>
        <p className="text-sm">Learn how to maintain and repair your bike with community guides.</p>
      </div>
    </section>
  );
};

export default GuidesPage;
