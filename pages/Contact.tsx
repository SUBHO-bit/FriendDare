import React from 'react';
import { SEO } from '../components/SEO';
import { Button } from '../components/Button';

export const Contact: React.FC = () => (
  <>
    <SEO title="Contact Us - FriendDare" description="Get in touch with the team." />
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="max-w-xl mx-auto px-4">
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
          <h1 className="text-3xl font-heading font-bold mb-2 text-center">Contact Us</h1>
          <p className="text-slate-500 text-center mb-8">Have a suggestion or need help? Send us a message.</p>
          
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-purple outline-none" />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Email</label>
              <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-purple outline-none" />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Message</label>
              <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-purple outline-none"></textarea>
            </div>
            <Button fullWidth>Send Message</Button>
          </form>
        </div>
      </div>
    </div>
  </>
);