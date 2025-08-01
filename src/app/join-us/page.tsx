import { Metadata } from 'next';
import { JoinUsLayout } from '@/components/join-us/JoinUsLayout';

export const metadata: Metadata = {
  title: 'Become a Charted Consultant | Join Our Expert Network | Charted Consultants',
  description: 'Join our network of experienced consultants helping legacy businesses navigate digital transformation. Work on meaningful projects while maintaining flexibility and independence.',
  keywords: 'become consultant, join consultant network, freelance consulting, digital transformation consultant, business consulting opportunities',
  openGraph: {
    title: 'Become a Charted Consultant | Join Our Expert Network',
    description: 'Join our network of experienced consultants helping legacy businesses navigate digital transformation. Work on meaningful projects while maintaining flexibility.',
    type: 'website',
  },
  alternates: {
    canonical: '/join-us',
  },
};

export default function JoinUsPage() {
  return <JoinUsLayout />;
}