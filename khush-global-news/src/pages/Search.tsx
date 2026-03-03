import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { posts } from '@/data/posts';
import ArticleCard from '@/components/ArticleCard';
import SectionHeader from '@/components/SectionHeader';

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  
  const searchResults = posts.filter(post => 
    post.title.toLowerCase().includes(query.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
    post.content.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>Search Results for "{query}" | KHUSH GLOBAL NEWS</title>
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <SectionHeader title={`Search Results for "${query}"`} />
        
        {searchResults.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {searchResults.map(post => (
              <ArticleCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-gray-500 text-lg">No results found for "{query}". Try a different keyword.</p>
          </div>
        )}
      </div>
    </>
  );
}
