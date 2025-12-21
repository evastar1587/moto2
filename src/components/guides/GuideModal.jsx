import { useState } from 'react';
import Modal from '../common/Modal';
import { Clock, Star, Eye, Wrench, Package, Lightbulb } from 'lucide-react';

const GuideModal = ({ guide, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const difficultyColor = {
    Easy: 'bg-green-950 text-green-400 border-green-800',
    Medium: 'bg-yellow-950 text-yellow-400 border-yellow-800',
    Hard: 'bg-red-950 text-red-400 border-red-800',
  };

  return (
    <Modal onClose={onClose} title={guide.title}>
      <div className="space-y-4 max-h-[70vh] overflow-y-auto">
        <div className="bg-zinc-800 p-3 rounded text-sm">
          <div className="flex items-center justify-between mb-2">
            <div className="flex gap-2">
              <span className={`px-2 py-0.5 text-xs font-bold uppercase border ${difficultyColor[guide.difficulty]}`}>
                {guide.difficulty}
              </span>
              <span className="px-2 py-0.5 text-xs font-bold uppercase border bg-purple-950 text-purple-400 border-purple-800">
                {guide.category}
              </span>
            </div>
            <div className="flex items-center gap-1 text-status-warning">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-bold">{guide.rating}</span>
              <span className="text-xs text-zinc-500">({guide.reviewCount})</span>
            </div>
          </div>

          <p className="text-zinc-300 mb-3">{guide.description}</p>

          <div className="flex items-center gap-4 text-xs text-zinc-500">
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{guide.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye className="w-3 h-3" />
              <span>{guide.views} views</span>
            </div>
            <span>by {guide.author}</span>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <Wrench className="w-4 h-4 text-status-success" />
            <h3 className="font-bold text-white text-sm uppercase">Tools Needed</h3>
          </div>
          <div className="bg-zinc-800 p-3 rounded">
            <ul className="space-y-1">
              {guide.tools.map((tool, idx) => (
                <li key={idx} className="text-zinc-400 text-sm">• {tool}</li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <Package className="w-4 h-4 text-blue-400" />
            <h3 className="font-bold text-white text-sm uppercase">Parts Needed</h3>
          </div>
          <div className="bg-zinc-800 p-3 rounded">
            <ul className="space-y-1">
              {guide.parts.map((part, idx) => (
                <li key={idx} className="text-zinc-400 text-sm">• {part}</li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-white text-sm uppercase mb-2">
            Steps ({currentStep + 1}/{guide.steps.length})
          </h3>
          <div className="space-y-2">
            {guide.steps.map((step, idx) => (
              <div
                key={idx}
                className={`p-3 rounded border-l-4 ${
                  idx === currentStep
                    ? 'bg-moto-red/10 border-moto-red'
                    : idx < currentStep
                    ? 'bg-green-950/30 border-status-success'
                    : 'bg-zinc-800 border-zinc-700'
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    idx === currentStep
                      ? 'bg-moto-red text-white'
                      : idx < currentStep
                      ? 'bg-status-success text-white'
                      : 'bg-zinc-700 text-zinc-400'
                  }`}>
                    {idx + 1}
                  </span>
                  <p className={`text-sm ${
                    idx === currentStep ? 'text-white font-bold' : 'text-zinc-400'
                  }`}>
                    {step}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-2 mt-3">
            <button
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
              className="px-4 py-2 border border-zinc-700 text-zinc-400 hover:bg-zinc-800 transition-all text-sm uppercase disabled:opacity-50 disabled:cursor-not-allowed rounded"
            >
              Previous
            </button>
            <button
              onClick={() => setCurrentStep(Math.min(guide.steps.length - 1, currentStep + 1))}
              disabled={currentStep === guide.steps.length - 1}
              className="flex-1 px-4 py-2 bg-moto-red text-white hover:bg-moto-red-dark transition-all text-sm uppercase disabled:opacity-50 disabled:cursor-not-allowed rounded"
            >
              Next Step
            </button>
          </div>
        </div>

        {guide.tips && guide.tips.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb className="w-4 h-4 text-status-warning" />
              <h3 className="font-bold text-white text-sm uppercase">Pro Tips</h3>
            </div>
            <div className="bg-amber-950/30 border border-amber-900 p-3 rounded">
              <ul className="space-y-2">
                {guide.tips.map((tip, idx) => (
                  <li key={idx} className="text-amber-200 text-sm">💡 {tip}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <button
          onClick={onClose}
          className="w-full px-4 py-3 border border-zinc-700 text-zinc-400 hover:bg-zinc-800 transition-all text-sm uppercase rounded"
        >
          Close Guide
        </button>
      </div>
    </Modal>
  );
};

export default GuideModal;
