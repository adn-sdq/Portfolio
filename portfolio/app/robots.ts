import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://adn-memos.com'
  
  return {
    rules: [
      // Allow all crawlers (including AI) to access everything
      {
        userAgent: '*',
        allow: '/',
      },
      // Explicitly welcome major AI crawlers
      {
        userAgent: 'GPTBot', // OpenAI's web crawler
        allow: '/',
      },
      {
        userAgent: 'ChatGPT-User', // OpenAI's ChatGPT crawler
        allow: '/',
      },
      {
        userAgent: 'CCBot', // Common Crawl (used by many AI companies)
        allow: '/',
      },
      {
        userAgent: 'Claude-Web', // Anthropic's Claude crawler
        allow: '/',
      },
      {
        userAgent: 'Google-Extended', // Google's AI training crawler
        allow: '/',
      },
      {
        userAgent: 'Applebot-Extended', // Apple's AI crawler
        allow: '/',
      },
      {
        userAgent: 'FacebookBot', // Meta's crawler
        allow: '/',
      },
      {
        userAgent: 'Baiduspider', // Baidu's crawler (includes AI)
        allow: '/',
      },
      {
        userAgent: 'PerplexityBot', // Perplexity AI's crawler
        allow: '/',
      },
      {
        userAgent: 'YouBot', // You.com's AI search crawler
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
} 