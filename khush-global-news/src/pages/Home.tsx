import React from 'react';
import { Helmet } from 'react-helmet-async';
import { posts } from '@/data/posts';
import Hero from '@/components/Hero';
import BreakingNews from '@/components/BreakingNews';
import ArticleCard from '@/components/ArticleCard';
import SectionHeader from '@/components/SectionHeader';
import Sidebar from '@/components/Sidebar';
import Newsletter from '@/components/Newsletter';

export default function Home() {
  const featuredPost = posts.find(p => p.isFeatured) || posts[0];
  const breakingPosts = posts.filter(p => p.isBreaking);
  const latestPosts = posts.filter(p => p.id !== featuredPost.id).slice(0, 6);
  const politicsPosts = posts.filter(p => p.category === 'Politics').slice(0, 4);
  const businessPosts = posts.filter(p => p.category === 'Business').slice(0, 3);
  const countyPosts = posts.filter(p => p.category === 'Counties').slice(0, 3);
  const opinionPosts = posts.filter(p => p.category === 'Opinion').slice(0, 3);
  const trendingPosts = posts.slice(0, 5); // Mock trending

  return (
    <>
      <Helmet>
        <title>Home | KHUSH GLOBAL NEWS</title>
        <meta name="description" content="Kenya’s Trending Politics, Public Policy & National Conversations — Explained Clearly." />
      </Helmet>

      <BreakingNews posts={breakingPosts} />

      <div className="container mx-auto px-4 py-6">
        <Hero post={featuredPost} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Latest News Section */}
            <section>
              <SectionHeader title="Latest News" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {latestPosts.map(post => (
                  <ArticleCard key={post.id} post={post} />
                ))}
              </div>
            </section>

            {/* Politics Section */}
            <section>
              <SectionHeader title="Politics" link="/category/politics" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {politicsPosts.map(post => (
                  <ArticleCard key={post.id} post={post} variant="horizontal" className="md:col-span-2" />
                ))}
              </div>
            </section>

            {/* Business & Counties Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <section>
                <SectionHeader title="Business" link="/category/business" />
                <div className="space-y-6">
                  {businessPosts.map(post => (
                    <ArticleCard key={post.id} post={post} variant="compact" />
                  ))}
                </div>
              </section>
              <section>
                <SectionHeader title="Counties" link="/category/counties" />
                <div className="space-y-6">
                  {countyPosts.map(post => (
                    <ArticleCard key={post.id} post={post} variant="compact" />
                  ))}
                </div>
              </section>
            </div>

            {/* Opinion Section */}
            <section className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <SectionHeader title="Opinion & Analysis" link="/category/opinion" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {opinionPosts.map(post => (
                  <ArticleCard key={post.id} post={post} variant="default" className="bg-white p-4 rounded-md shadow-sm" />
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <Sidebar trendingPosts={trendingPosts} />
              
              {/* Ad Placeholder */}
              <div className="mt-8 bg-gray-100 h-64 flex items-center justify-center rounded-lg border border-gray-200">
                <span className="text-gray-400 font-bold uppercase tracking-widest">Advertisement</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Newsletter Section Full Width */}
      <section className="bg-primary text-white py-16 mt-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl mb-4">Stay Informed</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join 50,000+ subscribers and get our daily curated newsletter with the most important stories from Kenya and beyond.
          </p>
          <div className="max-w-md mx-auto">
            <Newsletter />
          </div>
        </div>
      </section>
    </>
  );
}
