import React, { useState } from 'react';
import Modal from '../common/Modal';

const ToolRequestModal = ({ tool, onClose }) => {
  const [message, setMessage] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Tool request:', { tool: tool.id, message, startDate, endDate });
    onClose();
  };

  const isSpace = tool.type === 'SPACE';

  return (
    <Modal onClose={onClose} title={`Request: ${tool.name}`}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="bg-zinc-800 p-3 rounded text-sm">
          <p className="text-zinc-400 mb-2">{tool.description}</p>
          <div className="flex justify-between text-xs">
            <span className="text-zinc-500">Owner: {tool.ownerName}</span>
            <span className={tool.isFree ? 'text-status-success font-bold' : 'text-white font-bold'}>
              {tool.isFree ? 'FREE' : `$${tool.price}/${isSpace ? 'hour' : 'day'}`}
            </span>
          </div>
          {tool.deposit > 0 && (
            <p className="text-zinc-500 text-xs mt-1">Deposit required: ${tool.deposit}</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="block text-sm font-bold text-zinc-300 mb-2">Start Date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
              className="w-full border border-zinc-700 bg-zinc-800 text-white p-2 text-sm focus:border-status-success focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-zinc-300 mb-2">End Date</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
              className="w-full border border-zinc-700 bg-zinc-800 text-white p-2 text-sm focus:border-status-success focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-zinc-300 mb-2">Message to owner</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border border-zinc-700 bg-zinc-800 text-white p-3 text-sm focus:border-status-success focus:outline-none"
            rows="3"
            placeholder="What do you need it for? When can you pick it up?"
            required
          />
        </div>

        <div className="bg-amber-950/50 border border-amber-900 p-2 rounded">
          <p className="text-xs text-amber-400">
            ⚠ Return tools clean and on time. Respect people's stuff.
          </p>
        </div>

        <div className="flex gap-2">
          <button
            type="submit"
            className="flex-1 px-4 py-3 bg-status-success text-white hover:bg-green-600 transition-all font-bold text-sm uppercase"
          >
            Send Request
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-3 border border-zinc-700 text-zinc-400 hover:bg-zinc-800 transition-all text-sm uppercase"
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default ToolRequestModal;
