import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '@/data/posts';

export default function BreakingNews({ posts }: { posts: Post[] }) {
  const breakingPosts = posts.filter(p => p.isBreaking).slice(0, 5);

  if (breakingPosts.length === 0) return null;

  return (
    <div className="bg-primary text-white text-sm py-2 overflow-hidden relative">
      <div className="container mx-auto px-4 flex items-center">
        <span className="bg-accent text-white px-2 py-0.5 text-xs font-bold uppercase tracking-wider mr-4 animate-pulse shrink-0">
          Breaking
        </span>
        <div className="overflow-hidden relative flex-1">
          <div className="whitespace-nowrap animate-marquee inline-block">
            {breakingPosts.map((post, index) => (
              <span key={post.id} className="mr-8">
                <Link to={`/article/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
                {index < breakingPosts.length - 1 && <span className="mx-4 text-white/50">•</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
