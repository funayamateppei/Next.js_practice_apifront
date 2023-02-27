import axios from '@/lib/axios'

export default async function getAllPostsData() {
  const response = await axios('/api/posts')
  const posts = await response.data;
  return posts;
}
