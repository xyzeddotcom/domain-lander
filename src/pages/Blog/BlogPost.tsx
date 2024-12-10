import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, User } from 'lucide-react';
import { newsPosts } from '../../data/blog-posts';
import { MetaTags } from '../../components/SEO/MetaTags';
import { Section } from '../../components/Layout/Section';

export function NewsPost() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = newsPosts.find(post => post.id === id);

  if (!post) {
    return (
      <Section className="bg-gray-50 dark:bg-gray-900">
        <MetaTags
          title="Post Not Found | Domain Investment News"
          description="The news post you're looking for could not be found."
          type="article"
        />
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Post Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            The news post you're looking for doesn't exist.
          </p>
          <Link
            to="/news"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to News
          </Link>
        </div>
      </Section>
    );
  }

  return (
    <Section className="bg-gray-50 dark:bg-gray-900">
      <MetaTags
        title={`${post.title} | Domain Investment News`}
        description={post.description}
        type="article"
        canonical={`/news/${post.id}`}
      />
      <article className="max-w-3xl mx-auto">
        <button
          onClick={() => navigate('/news')}
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to News
        </button>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {post.title}
        </h1>

        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-8">
          <div className="flex items-center mr-4">
            <User className="w-4 h-4 mr-1" />
            {post.author}
          </div>
          <div className="flex items-center mr-4">
            <Clock className="w-4 h-4 mr-1" />
            {post.readTime}
          </div>
          <time>{post.date}</time>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          {post.content.split('\n').map((paragraph, index) => {
            if (paragraph.startsWith('##')) {
              return (
                <h2 key={index} className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                  {paragraph.replace('##', '').trim()}
                </h2>
              );
            }
            if (paragraph.trim().startsWith('-')) {
              return (
                <ul key={index} className="list-disc list-inside mb-4">
                  <li className="text-gray-600 dark:text-gray-400">
                    {paragraph.replace('-', '').trim()}
                  </li>
                </ul>
              );
            }
            return paragraph.trim() && (
              <p key={index} className="text-gray-600 dark:text-gray-400 mb-4">
                {paragraph}
              </p>
            );
          })}
        </div>
      </article>
    </Section>
  );
}