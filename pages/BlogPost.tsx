import React from 'react';
import { useParams } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { AdUnit } from '../components/AdUnit';

export const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <>
      <SEO title="50 Fun Friendship Dare Questions" description="Read this article." type="article" />
      <div className="bg-white min-h-screen pt-24 pb-20">
        <article className="max-w-3xl mx-auto px-4 sm:px-6">
          <header className="mb-10 text-center">
             <span className="text-brand-purple font-bold text-sm uppercase tracking-wide">Quiz Tips</span>
             <h1 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mt-4 mb-6 leading-tight">
               50 Fun Friendship Dare Questions for Your Besties
             </h1>
             <div className="flex items-center justify-center space-x-4 text-slate-500 text-sm">
                <img src="https://picsum.photos/id/64/50/50" alt="Author" className="w-10 h-10 rounded-full" />
                <div className="text-left">
                  <p className="font-bold text-slate-900">Team BQ</p>
                  <p>Published on Oct 12, 2023</p>
                </div>
             </div>
          </header>

          <img src="https://picsum.photos/seed/blog1/1200/600" alt="Cover" className="w-full rounded-2xl shadow-lg mb-10" />

          <div className="prose prose-lg prose-slate mx-auto">
            <p className="lead">Creating a quiz is easy, but thinking of funny questions can be hard. Here is the ultimate list to help you out.</p>
            
            <AdUnit slot="in-article-top" />

            <h2>The Classics</h2>
            <p>Start with some easy ones to warm up:</p>
            <ul>
              <li>What is my middle name?</li>
              <li>When is my birthday?</li>
              <li>What is my favorite color?</li>
            </ul>

            <h2>Deep Secrets</h2>
            <p>Test if they really know you:</p>
            <ul>
              <li>Who was my first crush?</li>
              <li>What is my biggest fear?</li>
            </ul>

            <AdUnit slot="in-article-mid" />

            <h2>Funny Scenarios</h2>
            <p>Make them laugh with these:</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          </div>
        </article>
      </div>
    </>
  );
};