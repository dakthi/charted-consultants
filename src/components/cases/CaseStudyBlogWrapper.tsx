import { getAllPosts } from '@/lib/post';
import { CaseStudyBlogSection } from './CaseStudyBlogSection';

export async function CaseStudyBlogWrapper() {
  const posts = await getAllPosts();
  const caseStudyPosts = posts.filter(post => post.category === 'Case Study').slice(0, 6);

  return <CaseStudyBlogSection posts={caseStudyPosts} />;
}