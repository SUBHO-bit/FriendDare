import React from 'react';
import { SEO } from '../components/SEO';

export const About: React.FC = () => (
  <>
    <SEO title="About Us - FriendDare" description="Learn more about FriendDare." />
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 bg-white p-8 md:p-12 rounded-3xl shadow-sm">
        <h1 className="text-3xl font-heading font-bold mb-6">About FriendDare</h1>
        <p className="text-slate-600 mb-4">
          FriendDare was founded with a simple mission: to bring friends closer together through fun, interactive digital experiences.
        </p>
        <p className="text-slate-600 mb-4">
          In a world of endless scrolling, we believe in active engagement. Our platform allows you to create personalized challenges that spark conversation, laughter, and maybe a little friendly rivalry.
        </p>
        <h2 className="text-xl font-bold mt-8 mb-4">Our Mission</h2>
        <p className="text-slate-600">To be the world's go-to destination for social quizzes and friendship games.</p>
      </div>
    </div>
  </>
);