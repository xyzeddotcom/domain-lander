import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User } from 'lucide-react';
import { newsPosts } from '../../data/blog-posts';
import { MetaTags } from '../../components/SEO/MetaTags';
import { Section } from '../../components/Layout/Section';

export function NewsList() {
  return (
    <>
      <MetaTags
        title="Domain Investment News | Latest Updates & Insights"
        description="Stay informed with the latest news about domain investment, digital branding, and premium domain strategies."
        keywords="domain investment news, domain updates, digital branding news, premium domains"
        type="website"
        canonical="/news"
      />
      <Section className="bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Latest News
          </h1>
          <div className="space-y-8">
            {newsPosts.map((post) => (
              <article 
                key={post.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Link to={`/news/${post.id}`} className="block p-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {post.description}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center mr-4">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}