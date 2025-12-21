
import { Radio } from 'lucide-react';

const FeedPage = () => {
  return (
    <section className="space-y-4">
      <div className="bg-moto-charcoal border-l-4 border-moto-red rounded p-5 shadow-lg">
        <div className="flex items-start gap-4">
          <Radio className="w-8 h-8 mt-1 flex-shrink-0 text-moto-red" />
          <div>
            <h2 className="text-xl font-bold mb-2 text-moto-red uppercase tracking-wider font-display">
              Community Feed
            </h2>
            <p className="text-zinc-300 mb-2">
              Share your projects, ask questions, and help others in the Portland moped and motorcycle community.
            </p>
            <div className="mt-3 p-2 bg-zinc-800 border border-zinc-700">
              <p className="text-zinc-400 text-xs">
                <span className="text-moto-red font-bold">RIGHT TO REPAIR:</span> Knowledge sharing is power.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center py-12 text-zinc-500">
        <p className="text-lg mb-2">Feed coming soon...</p>
        <p className="text-sm">Check back later for community updates and discussions.</p>
      </div>
    </section>
  );
};

export default FeedPage;
