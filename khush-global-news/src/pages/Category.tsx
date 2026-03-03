import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { posts } from '@/data/posts';
import ArticleCard from '@/components/ArticleCard';
import SectionHeader from '@/components/SectionHeader';
import Sidebar from '@/components/Sidebar';

export default function Category() {
  const { category } = useParams<{ category: string }>();
  
  // Normalize category for comparison (e.g., "politics" -> "Politics")
  const categoryName = category ? category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ') : '';
  
  const categoryPosts = posts.filter(
    p => p.category.toLowerCase() === category?.replace('-', ' ').toLowerCase()
  );
  
  const trendingPosts = posts.slice(0, 5);

  return (
    <>
      <Helmet>
        <title>{categoryName} | KHUSH GLOBAL NEWS</title>
        <meta name="description" content={`Latest news and updates in ${categoryName}`} />
      </Helmet>

      <div className="bg-gray-50 py-12 border-b border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <span className="text-accent font-bold uppercase tracking-widest text-sm mb-2 block">Category</span>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-primary">{categoryName}</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8">
            {categoryPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {categoryPosts.map(post => (
                  <ArticleCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-lg border border-dashed border-gray-300">
                <p className="text-gray-500 text-lg">No articles found in this category yet.</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <Sidebar trendingPosts={trendingPosts} />
          </div>
        </div>
      </div>
    </>
  );
}
