import React, { useContext } from 'react';
import { ClipboardList } from 'lucide-react';
import { AuthContext } from '../../context/AuthProvider';

const NewTask = ({ data, empId, taskIndex }) => {
  const { acceptTask } = useContext(AuthContext);
console.log('Rendering NewTask:', data);
  return (
    
    <div className="flex-shrink-0 w-[300px] h-full p-5 bg-white/10 backdrop-blur-md rounded-xl border border-cyan-400/20 shadow-md hover:shadow-cyan-500/30 transition-all duration-300 text-white">
      <div className="flex justify-between items-center">
        <span className="text-sm bg-cyan-500/20 px-3 py-1 rounded-full text-cyan-300">
          {data.category}
        </span>
        <span className="text-xs text-gray-400">{data.taskDate}</span>
      </div>

      <h2 className="mt-4 text-xl font-semibold line-clamp-1">{data.taskTitle}</h2>
      <p className="mt-2 text-sm text-cyan-100 line-clamp-3">{data.taskDescription}</p>

      <div className="flex justify-between items-center mt-6">
        <div className="flex items-center gap-1 text-cyan-300 animate-pulse">
          <ClipboardList size={16} />
          <span className="text-xs font-medium">New</span>
        </div>
        <button
          onClick={() => acceptTask(empId, taskIndex)}
          className="bg-cyan-600 hover:bg-cyan-500 px-3 py-1 text-xs cursor-pointer rounded-full transition-all duration-300"
        >
          Accept Task
        </button>
      </div>
    </div>
    
  );
  
};


export default NewTask;
