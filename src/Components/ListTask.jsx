import React from 'react';
import { Task } from './Task';
import { useTaskContext } from '../context/context';

export const ListTasks = () => {
  const { getFilteredTasks } = useTaskContext();
  const filteredTasks = getFilteredTasks();

  return (
    <ul className="mt-6 flex flex-col gap-4">
      {filteredTasks.length > 0 ? (
        filteredTasks.map(task => (
          <Task key={task.id} task={task} />
        ))
      ) : (
        <li className="text-center text-gray-500 mt-4">No hay tareas disponibles</li>
      )}
    </ul>
  );
};