import { Users } from 'lucide-react';

const PeoplePage = () => {
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
            <div className="mt-3 p-2 bg-zinc-800 border border-zinc-700">
              <p className="text-zinc-400 text-xs">
                <span className="text-moto-red font-bold">RIGHT TO REPAIR:</span> Build your local network.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center py-12 text-zinc-500">
        <p className="text-lg mb-2">People directory coming soon...</p>
        <p className="text-sm">Find mechanics, tool owners, and fellow riders in Portland.</p>
      </div>
    </section>
  );
};

export default PeoplePage;
