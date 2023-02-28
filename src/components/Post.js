import Link from 'next/link'

function Post({ post }) {
    return (
        <div>
            <span>{post.id} : </span>
            <Link href={`/posts/${post.id}`}>
                <span className="cursor-pointer border-b border-gray-400 hover:bg-gray-600">
                    {post.title}
                </span>
            </Link>
        </div>
    )
}

export default Post
