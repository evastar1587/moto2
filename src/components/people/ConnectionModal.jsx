import { useState } from 'react';
import Modal from '../common/Modal';
import { MapPin, Star } from 'lucide-react';

const ConnectionModal = ({ expert, onClose }) => {
  const [message, setMessage] = useState('');
  const [requestType, setRequestType] = useState('help');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Connection request:', { expert: expert.id, message, requestType });
    onClose();
  };

  const isFree = expert.hourlyRate === 0;

  return (
    <Modal onClose={onClose} title={`Connect with ${expert.name}`}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="bg-zinc-800 p-3 rounded text-sm">
          <div className="flex items-center justify-between mb-2">
            <span className={`px-2 py-0.5 text-xs font-bold uppercase border ${
              expert.type === 'Mechanic' 
                ? 'bg-blue-950 text-blue-400 border-blue-800'
                : expert.type === 'Tool Owner'
                ? 'bg-green-950 text-green-400 border-green-800'
                : 'bg-purple-950 text-purple-400 border-purple-800'
            }`}>
              {expert.type}
            </span>
            <div className="flex items-center gap-1 text-status-warning">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-bold">{expert.rating}</span>
            </div>
          </div>
          
          <p className="text-zinc-400 mb-2">{expert.bio}</p>
          
          <div className="flex items-center gap-2 text-xs text-zinc-500 mb-2">
            <MapPin className="w-3 h-3" />
            <span>{expert.location} • {expert.distance} mi away</span>
          </div>

          <div className="flex flex-wrap gap-1 mb-2">
            {expert.skills.map((skill, idx) => (
              <span key={idx} className="px-2 py-1 bg-zinc-900 text-zinc-400 text-xs rounded">
                {skill}
              </span>
            ))}
          </div>

          <div className="flex justify-between text-xs mt-3 pt-2 border-t border-zinc-700">
            <span className="text-zinc-500">Available: {expert.availability}</span>
            <span className={isFree ? 'text-status-success font-bold' : 'text-white font-bold'}>
              {isFree ? 'FREE' : `$${expert.hourlyRate}/hour`}
            </span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-zinc-300 mb-2">What do you need?</label>
          <select
            value={requestType}
            onChange={(e) => setRequestType(e.target.value)}
            className="w-full border border-zinc-700 bg-zinc-800 text-white p-2 text-sm focus:border-status-warning focus:outline-none rounded"
          >
            <option value="help">Help with a repair</option>
            <option value="advice">Technical advice</option>
            <option value="tools">Borrow tools</option>
            <option value="learning">Want to learn</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-bold text-zinc-300 mb-2">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border border-zinc-700 bg-zinc-800 text-white p-3 text-sm focus:border-status-warning focus:outline-none rounded"
            rows="4"
            placeholder="Describe what you need help with..."
            required
          />
        </div>

        <div className="bg-amber-950/50 border border-amber-900 p-2 rounded">
          <p className="text-xs text-amber-400">
            ⚠ Be respectful of people&apos;s time. Offer fair payment for professional help.
          </p>
        </div>

        <div className="flex gap-2">
          <button
            type="submit"
            className="flex-1 px-4 py-3 bg-status-warning text-white hover:bg-yellow-600 transition-all font-bold text-sm uppercase rounded"
          >
            Send Request
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-3 border border-zinc-700 text-zinc-400 hover:bg-zinc-800 transition-all text-sm uppercase rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default ConnectionModal;
