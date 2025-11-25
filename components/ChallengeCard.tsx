import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Star, Zap } from 'lucide-react';
import { Challenge } from '../types';
import { Button } from './Button';

interface ChallengeCardProps {
  challenge: Challenge;
}

export const ChallengeCard: React.FC<ChallengeCardProps> = ({ challenge }) => {
  return (
    <div className={`group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 flex flex-col h-full ${challenge.isSponsored ? 'ring-2 ring-brand-orange/20' : ''}`}>
      {challenge.isSponsored && (
        <div className="absolute top-2 right-2 bg-slate-100 text-slate-500 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wide z-10">
          Sponsored
        </div>
      )}
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
            {challenge.icon}
          </div>
          <div className="flex items-center text-xs font-semibold text-slate-400 bg-slate-50 px-2 py-1 rounded-full">
            <Zap className="w-3 h-3 mr-1 text-yellow-500" />
            {challenge.plays.toLocaleString()} plays
          </div>
        </div>

        <h3 className="text-xl font-heading font-bold text-slate-800 mb-2 group-hover:text-brand-purple transition-colors">
          {challenge.title}
        </h3>
        <p className="text-slate-500 text-sm mb-6 flex-1">
          {challenge.description}
        </p>

        <Link to={`/challenge/${challenge.id}`} className="block">
          <Button variant="secondary" fullWidth size="sm" className="group-hover:bg-brand-purple group-hover:text-white group-hover:border-transparent">
            <Play className="w-4 h-4 mr-2 fill-current" />
            Play Now
          </Button>
        </Link>
      </div>
    </div>
  );
};