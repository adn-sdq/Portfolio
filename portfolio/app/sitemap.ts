import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://adn-memos.com'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          en: baseUrl,
        },
      },
    },
    {
      url: `${baseUrl}/Resume-Adnan(15.01.25).pdf`,
      lastModified: new Date('2025-01-15'),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ai-crawlers.txt`,
      lastModified: new Date(),
      changeFrequency: 'monthly', 
      priority: 0.5,
    },
  ]
} 