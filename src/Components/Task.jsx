import { useContext } from 'react'
import { TaskContext } from '../context/context'

export const Task = () => {
    const { tasks, setTasks } = useContext(TaskContext)

    const deleteTask = (id) => {
        setTasks(tasks.filter(t => t.id !== id))
    }

    return (
        <>
            {tasks.length > 0 ? (
                tasks.map((t) => (
                    <div key={t.id} className='border border-[#00c6a9] rounded-lg p-4 mb-4 shadow-md flex items-start space-x-3'>
                        <input 
                            type='checkbox' 
                            className='mt-1' 
                        />
                        <div>
                            <h2 className='text-lg font-semibold'>{t.title}</h2>
                            <p className='text-gray-600'>{t.description}</p>
                        </div>
                        <button 
                            className='bg-red-400 text-white py-1 px-3 rounded'
                            onClick={() => deleteTask(t.id)}
                        > ❌ Borrar</button>
                    </div>
                ))
            ) : (
                <p className="text-center text-gray-500 mt-4">No hay tareas disponibles</p>
            )}
        </>
    )
}
