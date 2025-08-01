import { getAllPosts } from '@/lib/post';
import { CasesNewsLayout } from '@/components/cases/CasesNewsLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies & Success Stories | Digital Transformation Examples | Charted Consultants',
  description: 'Explore real case studies and success stories of legacy businesses transforming through digital innovation. See how we help traditional companies modernize while preserving their core values.',
  keywords: 'case studies, digital transformation, business modernization, legacy business transformation, success stories, digital innovation examples, business consulting case studies',
  openGraph: {
    title: 'Case Studies & Success Stories | Charted Consultants',
    description: 'Real businesses, real transformation. Explore detailed case studies of how we help legacy businesses navigate digital change while preserving what makes them unique.',
    type: 'website',
    images: [
      {
        url: '/img/lone-sailboat-2.png',
        width: 1200,
        height: 630,
        alt: 'Digital Transformation Case Studies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies & Success Stories | Charted Consultants',
    description: 'Real businesses, real transformation. Explore detailed case studies of digital transformation success stories.',
    images: ['/img/lone-sailboat-2.png'],
  },
  alternates: {
    canonical: '/cases',
  },
};

export default async function CasesPage() {
  const posts = await getAllPosts();

  return <CasesNewsLayout posts={posts} />;
}