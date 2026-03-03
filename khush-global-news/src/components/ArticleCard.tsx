import React from 'react';
import { Link } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import { Clock } from 'lucide-react';
import { Post } from '@/data/posts';
import { cn } from '@/lib/utils';

interface ArticleCardProps {
  post: Post;
  className?: string;
  variant?: 'default' | 'compact' | 'horizontal';
}

export default function ArticleCard({ post, className, variant = 'default' }: ArticleCardProps) {
  if (variant === 'compact') {
    return (
      <Link to={`/article/${post.slug}`} className={cn("group block", className)}>
        <div className="space-y-2">
          <div className="aspect-video overflow-hidden rounded-md bg-gray-100">
            <img
              src={post.image}
              alt={post.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="space-y-1">
            <span className="text-xs font-bold text-accent uppercase tracking-wider">
              {post.category}
            </span>
            <h3 className="font-display font-bold text-base leading-tight group-hover:text-primary transition-colors line-clamp-2">
              {post.title}
            </h3>
            <div className="flex items-center text-xs text-gray-500 space-x-2">
              <span>{formatDistanceToNow(new Date(post.publishDate), { addSuffix: true })}</span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === 'horizontal') {
    return (
      <Link to={`/article/${post.slug}`} className={cn("group flex gap-4 items-start", className)}>
        <div className="w-1/3 aspect-video overflow-hidden rounded-md bg-gray-100 flex-shrink-0">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="flex-1 space-y-1">
          <span className="text-xs font-bold text-accent uppercase tracking-wider">
            {post.category}
          </span>
          <h3 className="font-display font-bold text-lg leading-tight group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-2 hidden sm:block">
            {post.excerpt}
          </p>
          <div className="flex items-center text-xs text-gray-500 space-x-2 mt-2">
            <span>{post.author}</span>
            <span>•</span>
            <span>{formatDistanceToNow(new Date(post.publishDate), { addSuffix: true })}</span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/article/${post.slug}`} className={cn("group block h-full flex flex-col", className)}>
      <div className="aspect-video overflow-hidden rounded-md bg-gray-100 mb-3">
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col flex-grow space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-accent uppercase tracking-wider">
            {post.category}
          </span>
          <div className="flex items-center text-xs text-gray-400">
            <Clock className="h-3 w-3 mr-1" />
            {post.readTime}
          </div>
        </div>
        <h3 className="font-display font-bold text-xl leading-tight group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-3 flex-grow">
          {post.excerpt}
        </p>
        <div className="pt-2 flex items-center text-xs text-gray-500 border-t border-gray-100 mt-auto">
          <span className="font-medium text-gray-900">{post.author}</span>
          <span className="mx-2">•</span>
          <span>{formatDistanceToNow(new Date(post.publishDate), { addSuffix: true })}</span>
        </div>
      </div>
    </Link>
  );
}
