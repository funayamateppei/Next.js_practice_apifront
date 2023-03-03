import { useContext } from 'react'
import { StateContext } from '@/context/StateContext'
import axios from '@/lib/axios'

export default function TaskForm({ taskCreated }) {
    const { selectedTask, setSelectedTask } = useContext(StateContext)

    const create = async e => {
        e.preventDefault()
        const params = {
            title: JSON.stringify(selectedTask.title),
        }
        await axios.post('/api/tasks', params).then(response => {
            setSelectedTask({ id: 0, title: '' })
            taskCreated()
        })
    }

    const update = async e => {
        e.preventDefault()
        const params = {
            title: JSON.stringify(selectedTask.title),
        }
        axios.put(`/api/tasks/${selectedTask.id}`, params).then(response => {
            setSelectedTask({ id: 0, title: '' })
            taskCreated()
        })
    }

    const cancel = (e) => {
        e.preventDefault()
        setSelectedTask({ id: 0, title: '' })
        taskCreated()
    }

    return (
        <div className="mt-10">
            <form onSubmit={selectedTask.id != 0 ? update : create}>
                <input
                    className="px-2 mb-8 py-1"
                    type="text"
                    value={selectedTask.title}
                    onChange={e => {
                        setSelectedTask({
                            ...selectedTask,
                            title: e.target.value,
                        })
                    }}
                />
                <button
                    type="submit"
                    className="bg-gray-500 ml-2 hover:bg-gray-600 px-2 py-2 text-sm rounded uppercase">
                    {selectedTask.id != 0 ? 'update' : 'create'}
                </button>
                <button
                    className={`bg-gray-500 ml-2 hover:bg-gray-600 px-2 py-2 text-sm rounded uppercase ${
                        selectedTask.id !== 0 ? '' : 'hidden'
                    }`}
                    onClick={cancel}>
                    cancel
                </button>
            </form>
        </div>
    )
}
