import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '@/data/posts';
import ArticleCard from './ArticleCard';
import SectionHeader from './SectionHeader';
import Newsletter from './Newsletter';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export default function Sidebar({ trendingPosts }: { trendingPosts: Post[] }) {
  return (
    <aside className="space-y-8">
      {/* Social Follow */}
      <div className="bg-white p-6 rounded-lg border border-border shadow-sm">
        <SectionHeader title="Follow Us" className="mb-4" />
        <div className="grid grid-cols-3 gap-2">
          <a href="#" className="flex flex-col items-center justify-center p-3 bg-blue-50 hover:bg-blue-100 rounded-md transition-colors text-blue-600">
            <Facebook className="h-5 w-5 mb-1" />
            <span className="text-xs font-bold">25k</span>
          </a>
          <a href="#" className="flex flex-col items-center justify-center p-3 bg-sky-50 hover:bg-sky-100 rounded-md transition-colors text-sky-500">
            <Twitter className="h-5 w-5 mb-1" />
            <span className="text-xs font-bold">18k</span>
          </a>
          <a href="#" className="flex flex-col items-center justify-center p-3 bg-pink-50 hover:bg-pink-100 rounded-md transition-colors text-pink-600">
            <Instagram className="h-5 w-5 mb-1" />
            <span className="text-xs font-bold">12k</span>
          </a>
        </div>
      </div>

      {/* Trending */}
      <div className="bg-white p-6 rounded-lg border border-border shadow-sm">
        <SectionHeader title="Trending Now" className="mb-4" />
        <div className="space-y-4">
          {trendingPosts.map((post, index) => (
            <div key={post.id} className="flex items-start space-x-3 group">
              <span className="text-2xl font-bold text-gray-200 group-hover:text-accent transition-colors">
                {index + 1}
              </span>
              <Link to={`/article/${post.slug}`} className="flex-1">
                <h4 className="font-bold text-sm leading-snug group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <span className="text-xs text-gray-500 mt-1 block">
                  {post.category}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-primary text-white p-6 rounded-lg shadow-md">
        <h3 className="font-display font-bold text-xl mb-2">Daily Briefing</h3>
        <p className="text-sm text-gray-300 mb-4">
          Get the most important news from Kenya delivered to your inbox every morning.
        </p>
        <Newsletter variant="sidebar" />
      </div>
    </aside>
  );
}
