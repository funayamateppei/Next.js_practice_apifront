import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import { getAllTasksData } from '@/lib/tasks'
import Task from '@/components/Task'

const TaskPage = ({ tasks }) => {
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
                    {tasks &&
                        tasks.map(task => <Task key={task.id} task={task} />)}
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
