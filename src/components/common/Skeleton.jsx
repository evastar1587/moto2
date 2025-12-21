import React from 'react';

export const SkeletonText = ({ lines = 3 }) => (
  <div className="space-y-2 animate-pulse">
    {[...Array(lines)].map((_, i) => (
      <div key={i} className="h-3 bg-zinc-800 rounded" style={{ width: `${100 - i * 10}%` }} />
    ))}
  </div>
);

export const SkeletonCard = () => (
  <div className="bg-moto-charcoal border border-zinc-700 rounded p-4 animate-pulse">
    <div className="flex items-start gap-3">
      <div className="w-12 h-12 bg-zinc-800 rounded-full" />
      <div className="flex-1 space-y-3">
        <div className="h-4 bg-zinc-800 rounded w-1/4" />
        <div className="h-3 bg-zinc-800 rounded w-3/4" />
        <div className="h-3 bg-zinc-800 rounded w-1/2" />
      </div>
    </div>
  </div>
);

export const SkeletonList = ({ count = 3 }) => (
  <div className="space-y-4">
    {[...Array(count)].map((_, i) => (
      <SkeletonCard key={i} />
    ))}
  </div>
);
