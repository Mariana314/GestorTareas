import React from 'react';
import { ButtonFilter } from './ButtonFilter';
import { useTaskContext } from '../context/context';

export const Filter = () => {
  const { filter, setFilter } = useTaskContext();

  return (
    // <div className="flex justify-between mt-6 gap-3">
    //   <ButtonFilter className="flex-1 bg-[#00c6a9] text-white py-3 rounded-xl hover:bg-[#2a8476] transition font-medium text-lg shadow-md" handleEvent={() => setFilter('all')} contentText="📝 Todas" active={filter === 'all'} />
    //   <ButtonFilter className="flex-1 bg-[#37ac9a] text-white py-3 rounded-xl hover:bg-[#344b46] transition font-medium text-lg shadow-md" handleEvent={() => setFilter('active')} contentText="⏳ Pendientes" active={filter === 'active'} />
    //   <ButtonFilter className='flex-1 bg-[#488d7e] text-white py-3 rounded-xl hover:bg-[#2a8476] transition font-medium text-lg shadow-md' handleEvent={() => setFilter('completed')} contentText="✅ Completadas" active={filter === 'completed'} />
    // </div>
    <div className="flex space-x-2 mt-4 w-full justify-center items-center">
      <ButtonFilter
        handleEvent={() => setFilter('all')}
        contentText="Todas"
        active={filter === 'all'}
      />
      <ButtonFilter
        handleEvent={() => setFilter('active')}
        contentText="Pendientes"
        active={filter === 'active'}
      />
      <ButtonFilter
        handleEvent={() => setFilter('completed')}
        contentText="Completadas"
        active={filter === 'completed'}
      />
    </div>
  );
};