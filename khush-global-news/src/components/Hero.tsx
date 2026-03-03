import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import { Post } from '@/data/posts';
import { formatDistanceToNow } from 'date-fns';

export default function Hero({ post }: { post: Post }) {
  return (
    <section className="relative w-full bg-gray-900 text-white overflow-hidden rounded-xl my-6">
      <div className="absolute inset-0">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      </div>
      
      <div className="relative container mx-auto px-6 py-16 md:py-24 flex flex-col justify-end h-[500px]">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center space-x-3">
            <span className="bg-accent text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-sm">
              {post.category}
            </span>
            <div className="flex items-center text-sm text-gray-300">
              <Clock className="h-4 w-4 mr-1" />
              {post.readTime}
            </div>
          </div>
          
          <Link to={`/article/${post.slug}`} className="block group">
            <h1 className="font-display font-bold text-3xl md:text-5xl leading-tight group-hover:text-gray-200 transition-colors">
              {post.title}
            </h1>
          </Link>
          
          <p className="text-lg text-gray-300 line-clamp-2 md:line-clamp-3 max-w-2xl">
            {post.excerpt}
          </p>
          
          <div className="flex items-center pt-4">
            <div className="flex flex-col">
              <span className="font-semibold text-white">{post.author}</span>
              <span className="text-xs text-gray-400">
                {formatDistanceToNow(new Date(post.publishDate), { addSuffix: true })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
