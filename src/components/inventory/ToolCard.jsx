import { MapPin, Wrench, Home } from 'lucide-react';

const ToolCard = ({ tool, onRequest }) => {
  const isFree = tool.price === 0;
  const isSpace = tool.type === 'SPACE';

  return (
    <article className="bg-moto-charcoal border border-zinc-700 rounded overflow-hidden hover:border-status-success transition-all group">
      <div className="relative h-32 bg-zinc-800 flex items-center justify-center">
        {isSpace ? (
          <Home className="w-12 h-12 text-purple-500" />
        ) : (
          <Wrench className="w-12 h-12 text-status-success" />
        )}
        
        <div className="absolute top-2 right-2">
          <span className={`px-2 py-0.5 text-xs font-bold uppercase border ${
            tool.isAvailable
              ? 'bg-green-950 text-green-400 border-green-800'
              : 'bg-red-950 text-red-400 border-red-800'
          }`}>
            {tool.isAvailable ? 'Available' : 'In Use'}
          </span>
        </div>

        <div className="absolute top-2 left-2">
          <span className={`px-2 py-0.5 text-xs font-bold uppercase border ${
            isSpace
              ? 'bg-purple-950 text-purple-400 border-purple-800'
              : 'bg-blue-950 text-blue-400 border-blue-800'
          }`}>
            {isSpace ? 'Space' : 'Tool'}
          </span>
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-white text-sm leading-tight group-hover:text-status-success transition-colors">
            {tool.name}
          </h3>
        </div>
        
        <p className="text-zinc-500 text-xs mb-3">
          {tool.category} • {tool.condition}
        </p>

        <div className="flex items-center gap-2 text-xs text-zinc-400 mb-3">
          <MapPin className="w-3 h-3" />
          <span>{tool.location}</span>
          <span>•</span>
          <span>{tool.distance} mi</span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            {isFree ? (
              <span className="text-status-success font-bold text-sm">FREE</span>
            ) : (
              <span className="text-white font-bold text-sm">${tool.price}/day</span>
            )}
            {tool.deposit > 0 && (
              <span className="text-zinc-500 text-xs ml-2">(${tool.deposit} deposit)</span>
            )}
          </div>
          <button
            onClick={() => onRequest && onRequest(tool)}
            disabled={!tool.isAvailable}
            className={`px-3 py-1 text-xs font-bold uppercase transition-all ${
              tool.isAvailable
                ? 'bg-status-success text-white hover:bg-green-600'
                : 'bg-zinc-700 text-zinc-500 cursor-not-allowed'
            }`}
          >
            {tool.isAvailable ? 'Request' : 'Unavailable'}
          </button>
        </div>

        <div className="mt-3 pt-3 border-t border-zinc-800 text-xs text-zinc-500">
          Owner: {tool.ownerName}
        </div>
      </div>
    </article>
  );
};

export default ToolCard;
