export interface NewsPost {
  id: string;
  title: string;
  description: string;
  content: string;
  date: string;
  author: string;
  readTime: string;
}

export const newsPosts: NewsPost[] = [
  {
    id: 'getting-started-with-domains',
    title: 'Getting Started with Domain Investment',
    description: 'Learn the fundamentals of domain name investment and how to build a profitable portfolio.',
    content: `
      Domain name investment has become increasingly popular as businesses continue to expand their online presence. This comprehensive guide will walk you through the essential steps to begin your journey in domain investing.

      ## Understanding Domain Value

      Several factors contribute to a domain's value:
      - Length and memorability
      - Keyword relevance
      - Extension type
      - Commercial potential

      ## Market Research

      Before making your first investment, it's crucial to understand the market dynamics. Study recent sales, track industry trends, and identify emerging opportunities.

      ## Investment Strategies

      1. Buy and hold
      2. Quick flips
      3. Development and monetization
      4. Portfolio diversification

      Remember to always conduct thorough due diligence before making any investment decisions.
    `,
    date: '2024-03-15',
    author: 'John Smith',
    readTime: '5 min read'
  },
  {
    id: 'premium-domains-explained',
    title: 'Premium Domains: What Makes Them Valuable',
    description: 'Discover why some domain names command premium prices and how to evaluate their worth.',
    content: `
      Premium domain names are the prime real estate of the internet. Understanding what makes them valuable can help you make informed decisions in the domain market.

      ## Characteristics of Premium Domains

      Premium domains typically share these characteristics:
      - Short and memorable
      - Generic terms
      - Brandable potential
      - Clean history

      ## Valuation Metrics

      How to assess a premium domain's worth:
      - Historical sales data
      - Traffic analysis
      - Brand potential
      - Market demand

      ## Investment Considerations

      Before investing in premium domains, consider:
      - Market trends
      - Industry growth
      - Development potential
      - Exit strategies
    `,
    date: '2024-03-10',
    author: 'Sarah Johnson',
    readTime: '4 min read'
  }
];