import Head from 'next/head'
import Link from 'next/link'
import { getAllTaskIds, getTaskData } from '@/lib/tasks'
import useSWR from 'swr'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import axios from '@/lib/axios'

export default function Task({ id, task }) {
    const router = useRouter()

    const fetcher = url => {
        return axios(url).then(response => response.data)
    }
  const apiUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tasks/${id}`;

    const { data: swrTask, mutate } = useSWR(apiUrl, fetcher, {
        fallbackData: task,
    })

    useEffect(() => {
      mutate();
    }, [])

    if (router.isFallback || !swrTask) {
        return <div>Loading...</div>
    }

    return (
        <>
            <Head>
                <title>Blog Page</title>
            </Head>
            <div className="flex flex-col justify-center items-center">
                <div className="my-10 px-10 flex items-center justify-center">
                    <p>{swrTask.id}</p>
                    <span>　:　</span>
                    <p className="text-xl font-bold">{swrTask.title}</p>
                </div>
                <p className="px-10 mb-12">{swrTask.created_at}</p>
                <p className="px-10">{swrTask.content}</p>
                <Link href={'/task-page'}>
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
    const paths = await getAllTaskIds()
    return {
        paths,
        fallback: true,
    }
}

export async function getStaticProps({ params }) {
    const task = await getTaskData(params.id)
    return {
        props: {
            id: task.id,
            task,
        },
        revalidate: 3,
    }
}
