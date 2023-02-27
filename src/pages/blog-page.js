import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import getAllPostsData from '@/lib/posts'
import Post from '@/components/Post'

const BlogPage = ({ posts }) => {
    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Blog Page
                </h2>
            }>
            <Head>
                <title>Blog Page</title>
        </Head>
        <div className="flex justify-center">
          <ul>
            {posts && posts.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </ul>
        </div>
        </AppLayout>
    )
}

export default BlogPage

export async function getStaticProps() {
    const posts = await getAllPostsData()
    return {
        props: {
            posts,
        },
    }
}
