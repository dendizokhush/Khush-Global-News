import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { format } from 'date-fns';
import { Facebook, Twitter, Linkedin, Link as LinkIcon, Clock, Calendar } from 'lucide-react';
import { posts } from '@/data/posts';
import Sidebar from '@/components/Sidebar';
import Newsletter from '@/components/Newsletter';
import SectionHeader from '@/components/SectionHeader';
import ArticleCard from '@/components/ArticleCard';

export default function Article() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find(p => p.slug === slug);
  const trendingPosts = posts.slice(0, 5);
  const relatedPosts = posts
    .filter(p => p.category === post?.category && p.id !== post?.id)
    .slice(0, 3);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Article not found</h1>
        <Link to="/" className="text-accent hover:underline">Return Home</Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | KHUSH GLOBAL NEWS</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Article Content */}
          <article className="lg:col-span-8 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Header */}
            <header className="p-6 md:p-10 pb-0">
              <div className="flex items-center space-x-2 mb-4">
                <Link 
                  to={`/category/${post.category.toLowerCase()}`}
                  className="bg-accent/10 text-accent px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full hover:bg-accent/20 transition-colors"
                >
                  {post.category}
                </Link>
                <span className="text-gray-400 text-xs">•</span>
                <span className="text-gray-500 text-xs flex items-center">
                  <Clock className="h-3 w-3 mr-1" /> {post.readTime}
                </span>
              </div>
              
              <h1 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-tight text-gray-900 mb-6">
                {post.title}
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8 border-l-4 border-accent pl-4">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between border-y border-gray-100 py-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{post.author}</p>
                    <p className="text-xs text-gray-500 flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {format(new Date(post.publishDate), 'MMMM d, yyyy')}
                    </p>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <button className="p-2 text-gray-400 hover:text-[#1877F2] transition-colors"><Facebook className="h-5 w-5" /></button>
                  <button className="p-2 text-gray-400 hover:text-[#1DA1F2] transition-colors"><Twitter className="h-5 w-5" /></button>
                  <button className="p-2 text-gray-400 hover:text-[#0A66C2] transition-colors"><Linkedin className="h-5 w-5" /></button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors"><LinkIcon className="h-5 w-5" /></button>
                </div>
              </div>
            </header>

            {/* Featured Image */}
            <div className="w-full aspect-video bg-gray-100 relative">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Body */}
            <div className="p-6 md:p-10 prose prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-accent prose-img:rounded-lg">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            {/* Tags */}
            <div className="px-6 md:px-10 pb-10">
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map(tag => (
                  <span key={tag} className="bg-gray-100 text-gray-600 px-3 py-1 text-sm rounded-full hover:bg-gray-200 cursor-pointer transition-colors">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Newsletter Inline */}
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 text-center">
                <h3 className="font-bold text-xl mb-2">Enjoyed this article?</h3>
                <p className="text-gray-600 mb-4">Subscribe to get more stories like this in your inbox.</p>
                <Newsletter />
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            <Sidebar trendingPosts={trendingPosts} />
            
            {/* Related Stories */}
            {relatedPosts.length > 0 && (
              <div className="bg-white p-6 rounded-lg border border-border shadow-sm">
                <SectionHeader title="Related Stories" className="mb-4" />
                <div className="space-y-6">
                  {relatedPosts.map(post => (
                    <ArticleCard key={post.id} post={post} variant="compact" />
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </>
  );
}
