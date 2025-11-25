import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { BlogPost } from '../types';

const POSTS: BlogPost[] = [
  { id: '50-dare-questions', title: '50 Fun Friendship Dare Questions', excerpt: 'Struggling to think of questions? Here are the best ideas for your quiz.', date: 'Oct 12, 2023', author: 'Team BQ', imageUrl: 'https://picsum.photos/seed/blog1/600/400' },
  { id: 'viral-whatsapp-quiz', title: 'How to Make a Viral WhatsApp Quiz', excerpt: 'Tips and tricks to get everyone in your group chat playing.', date: 'Sep 28, 2023', author: 'Sarah J.', imageUrl: 'https://picsum.photos/seed/blog2/600/400' },
  { id: 'crush-quiz-ideas', title: 'Best Questions to Ask Your Crush', excerpt: 'Subtle ways to find out if they like you back using a quiz.', date: 'Nov 05, 2023', author: 'Mike T.', imageUrl: 'https://picsum.photos/seed/blog3/600/400' },
];

export const BlogList: React.FC = () => {
  return (
    <>
      <SEO title="Blog - Tips & Quiz Ideas" description="Read our latest articles on friendship, relationships, and fun quiz ideas." />
      <div className="bg-white min-h-screen pt-24 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-heading font-bold text-slate-900 mb-12 text-center">Latest from the Blog</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {POSTS.map(post => (
              <Link key={post.id} to={`/blog/${post.id}`} className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100">
                  <div className="h-48 overflow-hidden">
                    <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <p className="text-xs text-slate-400 mb-2">{post.date} • {post.author}</p>
                    <h2 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-brand-purple transition-colors">{post.title}</h2>
                    <p className="text-slate-500 text-sm line-clamp-3">{post.excerpt}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};