import { useTaskContext } from '../context/context';


export const FormTask = () => {
    const { title, setTitle, description, setDescription, addTask } = useTaskContext();

  return (
    <form onSubmit={addTask} className='flex flex-col space-y-5 w-full max-w-md p-6 bg-white rounded-lg shadow-lg'>
      <input 
        className='w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00c6a9] text-lg'
        type='text'
        placeholder='Nombre tarea'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea 
        className='w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-[#00c6a9] text-lg'
        placeholder='Descripción'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button 
        className='w-full bg-[#00c6a9] text-white py-4 rounded-xl hover:bg-[#2a8476] transition font-medium text-lg shadow-lg'
        type="submit"
      >
        Agregar Tarea
      </button>
    </form>
  )
}
