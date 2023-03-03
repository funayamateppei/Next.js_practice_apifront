import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import { getAllTasksData } from '@/lib/tasks'
import Task from '@/components/Task'
import useSWR from 'swr'
import axios from '@/lib/axios'
import { useEffect } from 'react'

const TaskPage = ({ tasks }) => {

    const fetcher = url => {
        return axios(url).then(response => response.data)
    }
    const apiUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tasks`

    const { data: swrTasks, mutate } = useSWR(apiUrl, fetcher, {
        fallbackData: tasks,
    })

    // ページが表示されたときにCSRを実行してデータを最新のものにする
    useEffect(() => {
        mutate();
    }, [])

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Task Page
                </h2>
            }>
            <Head>
                <title>Task Page</title>
            </Head>
            <div className="flex justify-center">
                <ul>
                    {swrTasks &&
                        swrTasks.map(task => (
                            <Task key={task.id} task={task} />
                        ))}
                </ul>
            </div>
        </AppLayout>
    )
}

export default TaskPage

export async function getStaticProps() {
    const tasks = await getAllTasksData()
    return {
        props: {
            tasks,
        },
    }
}
