import React from 'react';
import { ChallengeCard } from '../components/ChallengeCard';
import { SEO } from '../components/SEO';
import { Challenge } from '../types';

const CHALLENGES: Challenge[] = [
  { id: 'friendship-dare', title: 'Ultimate Friendship Dare', description: 'Who knows you best? Create a quiz and challenge your besties.', category: 'Friendship', icon: '👯‍♀️', plays: 125000 },
  { id: 'love-calculator', title: 'Love Calculator Test', description: 'Are you two meant to be? Test your compatibility now.', category: 'Love', icon: '💘', plays: 98000 },
  { id: 'personality-quiz', title: 'True Personality Test', description: 'Discover your hidden traits with this psychology based quiz.', category: 'Personality', icon: '🧠', plays: 45000 },
  { id: 'food-mate', title: 'The Foodie Mate Quiz', description: 'Do you share the same taste in food? Find your pizza partner.', category: 'Fun', icon: '🍕', plays: 32000 },
  { id: 'school-secrets', title: 'School Secrets Dare', description: 'Answer honestly about your school crush and friends.', category: 'School', icon: '🎒', plays: 21000 },
  { id: 'this-or-that', title: 'This or That Challenge', description: 'Quick fire choices. Summer or Winter? TikTok or Insta?', category: 'Fun', icon: '⚡', plays: 67000 },
  { id: 'movie-buff', title: 'Movie Buff Trivia', description: 'Challenge your friends on movie knowledge.', category: 'Trivia', icon: '🎬', plays: 15000 },
  { id: 'zodiac-match', title: 'Zodiac Compatibility', description: 'Check if your signs align in the stars.', category: 'Love', icon: '🔮', plays: 42000 },
];

export const ChallengeList: React.FC = () => {
  return (
    <>
      <SEO title="All Quizzes & Challenges" description="Browse our collection of friendship dares, love tests, and personality quizzes." />
      <div className="bg-slate-50 min-h-screen pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-heading font-bold text-slate-900 mb-4">All Challenges</h1>
            <p className="text-slate-600">Browse the most popular quizzes below.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CHALLENGES.map(c => (
              <ChallengeCard key={c.id} challenge={c} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};