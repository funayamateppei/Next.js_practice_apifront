import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { getAllPostIds, getPostData } from '@/lib/posts'

import React from 'react'

export default function Post({ post }) {
    const router = useRouter()

    if (router.isFallback || !post) {
        return <div>Loading...</div>
    }

    return (
        <>
            <Head>
                <title>Blog Page</title>
            </Head>
            <div className="flex flex-col justify-center items-center">
                <div className="my-10 px-10 flex items-center justify-center">
                    <p>{post.id}</p>
                    <span>　:　</span>
                    <p className="text-xl font-bold">{post.title}</p>
                </div>
                <p className="px-10 mb-12">{post.created_at}</p>
                <p className="px-10">{post.content}</p>
                <Link href={'/blog-page'}>
                    <div className="flex cursor-pointer mt-12 mr-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
                            />
                        </svg>
                        <span>Back to Blog Page</span>
                    </div>
                </Link>
            </div>
        </>
    )
}

export async function getStaticPaths() {
    const paths = await getAllPostIds()
    return {
        paths: paths,
        fallback: true,
    }
}

export async function getStaticProps({ params }) {
    const post = await getPostData(params.id)
    return {
        props: {
            post,
        },
    }
}
