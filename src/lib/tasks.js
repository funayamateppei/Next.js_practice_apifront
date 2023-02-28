import axios from './axios'

export async function getAllTasksData() {
    const response = await axios.get('/api/tasks')
    const tasks = await response.data
    return tasks
}

export async function getAllTaskIds() {
    const response = await axios.get('/api/tasks')
    const tasks = await response.data
    return await tasks.map(task => {
        return {
            params: {
                id: String(task.id),
            },
        }
    })
}

export async function getTaskData(id) {
    const response = await axios.get(`/api/tasks/${id}`)
    const task = await response.data
    return task
}
