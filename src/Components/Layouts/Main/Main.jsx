// import React from 'react'

// export const Main = () => {
//   return (
//    <>
//    <div className='flex flex-col items-center '>
//     <input className='' type="text" placeholder='Ingrese texto' />

//     <input className='' type="text" placeholder='Descripcion' />

//     <button>Crear Tarea</button>

//     <div className='flex flex-col'>
//         <button>Agregar</button>
//         <button>Completado</button>
//         <button>Eliminar</button>
//     </div>

//    </div>
//    </>
//   )
// }
import React from 'react';

export const Main = () => {
  const tareas = [
    { id: 1, titulo: 'Barrer', descripcion: 'Realizar aseo del lugar' },
    { id: 2, titulo: 'Estudiar para examen', descripcion: 'Preparación bimestral' }
  ]

  return (
    <div className='flex flex-col items-center justify-center min-h-screen p-6 '>
      <div className='bg-white shadow-2xl  rounded-2xl p-8 w-full max-w-xl transform transition duration-500 hover:scale-105'
        style={{ boxShadow: '-2px 5px 10px 1px #2AE08A ' }}>

        <h2 className='text-3xl font-bold text-[#34494b] mb-6 text-center '>📌 Lista de Tareas</h2>

        <input
          className='w-full p-4 mb-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00c6a9] text-lg'
          type='text'
          placeholder='Título de la Tarea...'
        />

        <input
          className='w-full p-4 mb-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-[#00c6a9] text-lg'
          type='text'
          placeholder='Descripción de la Tarea...'
        />

        <button className='w-full bg-[#00c6a9] text-white py-4 rounded-xl hover:bg-[#2a8476] transition font-medium text-lg shadow-lg'>
          Añadir Tarea
        </button>

        <div className='flex justify-between mt-6 gap-3'>
          <button className='flex-1 bg-[#00c6a9] text-white py-3 rounded-xl hover:bg-[#2a8476] transition font-medium text-lg shadow-md'>
            ✅ Agregar
          </button>
          <button className='flex-1 bg-[#37ac9a] text-white py-3 rounded-xl hover:bg-[#344b46] transition font-medium text-lg shadow-md'>
            ⏳ Completar
          </button>
          <button className='flex-1 bg-[#488d7e] text-white py-3 rounded-xl hover:bg-[#2a8476] transition font-medium text-lg shadow-md'>
            ❌ Borrar
          </button>
        </div>

        <div className='bg-white shadow-lg rounded-2xl p-6 w-full max-w-md'>
          {tareas.map(tarea => (
            <div key={tarea.id}
             className='border border-[#00c6a9] rounded-lg p-4 mb-4 shadow-md'>
              <input type='checkbox' 
               className='mr-2 ' />
              <span className='text-lg font-semibold'>{tarea.titulo}</span>
              <p className='text-gray-600'>{tarea.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </div>



  )
}