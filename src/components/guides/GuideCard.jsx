import { Clock, Star, Eye } from 'lucide-react';

const GuideCard = ({ guide, onSelect }) => {
  const difficultyColor = {
    Easy: 'bg-green-950 text-green-400 border-green-800',
    Medium: 'bg-yellow-950 text-yellow-400 border-yellow-800',
    Hard: 'bg-red-950 text-red-400 border-red-800',
  };

  return (
    <article 
      className="bg-moto-charcoal border border-zinc-700 rounded overflow-hidden hover:border-blue-500 transition-all cursor-pointer group"
      onClick={() => onSelect && onSelect(guide)}
    >
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-bold text-white text-lg leading-tight group-hover:text-blue-500 transition-colors">
            {guide.title}
          </h3>
          <div className="flex items-center gap-1 text-status-warning flex-shrink-0">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-bold">{guide.rating}</span>
          </div>
        </div>

        <p className="text-zinc-400 text-sm mb-3 line-clamp-2">
          {guide.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-3">
          <span className={`px-2 py-0.5 text-xs font-bold uppercase border ${difficultyColor[guide.difficulty]}`}>
            {guide.difficulty}
          </span>
          <span className="px-2 py-0.5 text-xs font-bold uppercase border bg-purple-950 text-purple-400 border-purple-800">
            {guide.category}
          </span>
        </div>

        <div className="flex items-center justify-between text-sm text-zinc-500">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{guide.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              <span>{guide.views}</span>
            </div>
          </div>
          <span className="text-xs">by {guide.author}</span>
        </div>
      </div>

      <div className="bg-zinc-800 px-4 py-2 border-t border-zinc-700 text-xs text-zinc-500">
        {guide.steps.length} steps • {guide.tools.length} tools needed
      </div>
    </article>
  );
};

export default GuideCard;
