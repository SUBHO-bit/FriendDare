import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Heart, Zap, Smile, Check, ChevronRight } from 'lucide-react';
import { Button } from '../components/Button';
import { ChallengeCard } from '../components/ChallengeCard';
import { AdUnit } from '../components/AdUnit';
import { SEO } from '../components/SEO';
import { Challenge } from '../types';

// Mock Data
const FEATURED_CHALLENGES: Challenge[] = [
  { id: 'friendship-dare', title: 'Ultimate Friendship Dare', description: 'Who knows you best? Create a quiz and challenge your besties.', category: 'Friendship', icon: '👯‍♀️', plays: 125000 },
  { id: 'love-calculator', title: 'Love Calculator Test', description: 'Are you two meant to be? Test your compatibility now.', category: 'Love', icon: '💘', plays: 98000 },
  { id: 'personality-quiz', title: 'True Personality Test', description: 'Discover your hidden traits with this psychology based quiz.', category: 'Personality', icon: '🧠', plays: 45000 },
  { id: 'food-mate', title: 'The Foodie Mate Quiz', description: 'Do you share the same taste in food? Find your pizza partner.', category: 'Fun', icon: '🍕', plays: 32000 },
];

export const Home: React.FC = () => {
  return (
    <>
      <SEO 
        title="FriendDare - Fun Friendship Quizzes & Dares" 
        description="Create and share fun friendship challenges, love calculators, and personality quizzes. Test your friends and see who knows you best!"
        schema={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "FriendDare",
          "url": "https://frienddare.com",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://frienddare.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 z-0"></div>
        {/* Decorative Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
            <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
            <div className="absolute top-1/2 right-0 w-64 h-64 rounded-full bg-pink-400 blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-bold tracking-wide uppercase mb-6">
              🔥 The #1 Viral Quiz Platform
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white leading-tight mb-6 drop-shadow-sm">
              Fun Challenges <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-orange-300">With Your Friends</span>
            </h1>
            <p className="text-lg md:text-xl text-indigo-100 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Create friendship dares, personality tests, and fun quizzes. Share with friends on WhatsApp and see who knows you best.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/challenges">
                <Button size="lg" className="w-full sm:w-auto shadow-indigo-900/20">Start a Challenge</Button>
              </Link>
              <Link to="/create-quiz">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">Create Your Own</Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative">
             <div className="relative mx-auto w-64 h-[500px] bg-slate-900 rounded-[3rem] border-8 border-slate-900 shadow-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="absolute top-0 left-0 w-full h-full bg-slate-800 flex flex-col">
                  {/* Mock Screen Content */}
                  <div className="bg-slate-800 p-4 pt-10 flex items-center justify-between text-white">
                     <div className="w-6 h-6 bg-white/20 rounded-full"></div>
                     <div className="h-2 w-20 bg-white/20 rounded-full"></div>
                  </div>
                  <div className="flex-1 bg-slate-50 p-4 flex flex-col items-center justify-center space-y-4">
                     <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-3xl">🤔</div>
                     <div className="text-center">
                        <h3 className="font-bold text-slate-800">Friendship Dare</h3>
                        <p className="text-xs text-slate-500 mt-1">10 Questions</p>
                     </div>
                     <div className="w-full space-y-2">
                        <div className="h-10 bg-white border border-slate-200 rounded-lg w-full"></div>
                        <div className="h-10 bg-brand-purple text-white rounded-lg w-full flex items-center justify-center text-xs font-bold shadow-lg">Start Now</div>
                     </div>
                  </div>
                </div>
             </div>
             {/* Floating Elements */}
             <div className="absolute top-1/4 -left-4 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center text-2xl animate-bounce delay-100">😂</div>
             <div className="absolute bottom-1/4 -right-4 w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center text-4xl animate-bounce delay-300">😍</div>
          </div>
        </div>
      </section>

      {/* Categories Strip */}
      <section className="bg-white py-10 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto scrollbar-hide">
          <div className="flex space-x-4 md:justify-center min-w-max">
            {['All', 'Friendship', 'Love', 'Personality', 'Food', 'School', 'Funny'].map((cat, i) => (
              <button key={cat} className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${i === 0 ? 'bg-brand-purple text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Choose Your Challenge</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Pick a game below to get started. All quizzes are free and instant to play.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_CHALLENGES.map(challenge => (
              <ChallengeCard key={challenge.id} challenge={challenge} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/challenges">
              <Button variant="outline" className="border-slate-300 text-slate-600 hover:bg-slate-100 hover:text-brand-purple hover:border-brand-purple">
                View All Challenges <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <AdUnit slot="homepage-middle" format="horizontal" />

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">How It Works</h2>
            <p className="text-slate-600">Get started in just 3 simple steps.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { title: '1. Create Quiz', text: 'Answer questions about yourself to generate your unique quiz.', icon: <Star className="w-8 h-8 text-white" />, color: 'bg-brand-purple' },
              { title: '2. Share Link', text: 'Send your quiz link to friends on WhatsApp, Instagram, or Snapchat.', icon: <ArrowRight className="w-8 h-8 text-white" />, color: 'bg-brand-pink' },
              { title: '3. See Results', text: 'Check the scoreboard to see who really knows you best!', icon: <Smile className="w-8 h-8 text-white" />, color: 'bg-brand-orange' },
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className={`w-20 h-20 rounded-3xl ${step.color} shadow-lg shadow-indigo-100 flex items-center justify-center mb-6 transform hover:rotate-6 transition-transform`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-500 max-w-xs mx-auto">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-heading font-bold mb-4">Get New Challenges in Your Inbox</h2>
          <p className="text-slate-400 mb-8">Join 50,000+ others. We send the funniest dares and trending quizzes weekly.</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-pink"
            />
            <Button variant="primary">Subscribe</Button>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-slate-900">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: 'Is FriendDare free?', a: 'Yes! All our quizzes and dares are 100% free to create and play.' },
              { q: 'Do I need to register?', a: 'No, you can create and play quizzes instantly without creating an account.' },
              { q: 'How do I share my quiz?', a: 'After creating a quiz, we give you a unique link. Just copy and paste it into WhatsApp or your Instagram bio.' },
              { q: 'Is my data safe?', a: 'We value your privacy. We do not store personal messages or sensitive data. Quizzes are for entertainment purposes only.' }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                <h3 className="font-bold text-slate-800 mb-2 flex items-center">
                  <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs mr-3">?</span>
                  {item.q}
                </h3>
                <p className="text-slate-500 text-sm ml-9">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};