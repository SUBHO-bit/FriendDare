import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Instagram, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-white font-bold font-heading">
                FD
              </div>
              <span className="font-heading font-bold text-xl text-white tracking-tight">
                FriendDare
              </span>
            </Link>
            <p className="text-sm text-slate-400 mb-6">
              The ultimate platform for friendship dares, fun quizzes, and social challenges.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </div>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <Instagram className="w-4 h-4" />
                </div>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <Twitter className="w-4 h-4" />
                </div>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-white mb-4">Discover</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/challenges" className="hover:text-white">Popular Quizzes</Link></li>
              <li><Link to="/challenges" className="hover:text-white">Newest Dares</Link></li>
              <li><Link to="/challenges" className="hover:text-white">Trending Now</Link></li>
              <li><Link to="/challenges" className="hover:text-white">Categories</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white">Terms of Service</Link></li>
              <li><Link to="/disclaimer" className="hover:text-white">Disclaimer</Link></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} FriendDare. All rights reserved.</p>
          <div className="flex items-center mt-4 md:mt-0">
            <span>Made with</span>
            <Heart className="w-3 h-3 mx-1 text-red-500 fill-current" />
            <span>for friends everywhere.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};