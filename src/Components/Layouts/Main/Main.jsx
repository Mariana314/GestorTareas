import React from 'react'
import { FormTask } from '../../FormTask'
import { TasksProvider } from "../../../context/context"
import { Filter } from '../../Filter'
import { Task } from '../../Task'

export const Main = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100'>
      <div className='bg-white shadow-2xl rounded-2xl p-8 w-full max-w-xl transform transition duration-500 hover:scale-105' style={{ boxShadow: '-2px 5px 10px 1px #2AE08A' }}>
        <h2 className='text-3xl font-bold text-[#34494b] mb-6 text-center'>📌 Lista de Tareas</h2>
        <TasksProvider>
          <FormTask />
          <Filter />
          <Task />
        </TasksProvider>
      </div>
    </div>
  )
}
