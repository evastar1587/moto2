import { MapPin, Star, Wrench } from 'lucide-react';

const ExpertCard = ({ expert, onSelect }) => {
  const isFree = expert.hourlyRate === 0;

  return (
    <article 
      className="bg-moto-charcoal border border-zinc-700 rounded p-4 hover:border-status-warning transition-all cursor-pointer"
      onClick={() => onSelect && onSelect(expert)}
    >
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center flex-shrink-0">
          <Wrench className="w-8 h-8 text-status-warning" />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="font-bold text-white text-lg">{expert.name}</h3>
            <div className="flex items-center gap-1 text-status-warning flex-shrink-0">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-bold">{expert.rating}</span>
              <span className="text-xs text-zinc-500">({expert.reviewCount})</span>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-2">
            <span className={`px-2 py-0.5 text-xs font-bold uppercase border ${
              expert.type === 'Mechanic' 
                ? 'bg-blue-950 text-blue-400 border-blue-800'
                : expert.type === 'Tool Owner'
                ? 'bg-green-950 text-green-400 border-green-800'
                : 'bg-purple-950 text-purple-400 border-purple-800'
            }`}>
              {expert.type}
            </span>
            <span className="text-sm text-zinc-400">{expert.specialty}</span>
          </div>

          <p className="text-zinc-400 text-sm mb-3 line-clamp-2">{expert.bio}</p>

          <div className="flex flex-wrap gap-1 mb-3">
            {expert.skills.slice(0, 3).map((skill, idx) => (
              <span key={idx} className="px-2 py-1 bg-zinc-800 text-zinc-400 text-xs rounded">
                {skill}
              </span>
            ))}
            {expert.skills.length > 3 && (
              <span className="px-2 py-1 text-zinc-500 text-xs">
                +{expert.skills.length - 3} more
              </span>
            )}
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-zinc-500">
              <MapPin className="w-4 h-4" />
              <span>{expert.location}</span>
              <span>•</span>
              <span>{expert.distance} mi</span>
            </div>
            
            <div className="text-right">
              {isFree ? (
                <span className="text-status-success font-bold">FREE</span>
              ) : (
                <span className="text-white font-bold">${expert.hourlyRate}/hr</span>
              )}
            </div>
          </div>

          <div className="mt-2 text-xs text-zinc-500">
            Available: {expert.availability}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ExpertCard;
