import React, { useContext } from 'react';
import { ClipboardList } from 'lucide-react';
import { AuthContext } from '../../context/AuthProvider';

const NewTask = ({ data, empId, taskIndex }) => {
  const { acceptTask } = useContext(AuthContext);
  return (  
    <div className="flex-shrink-0 w-[350px] h-[250px] p-5 bg-white/20 backdrop-blur-md rounded-xl border border-cyan-400/80 shadow-md hover:shadow-cyan-500/30 transition-all duration-300 text-white">
      <div className="flex justify-between items-center">
        <span className="text-m bg-cyan-500/30 px-3 py-1 rounded-full text-cyan-300">
          {data.category}
        </span>
        <span className="text-s text-gray-400">{data.taskDate}</span>
      </div>

      <h2 className="mt-4 text-2xl font-semibold line-clamp-1">{data.taskTitle}</h2>
      <p className="mt-2 text-m text-cyan-200 line-clamp-3">{data.taskDescription}</p>

      <div className="flex justify-between items-center mt-6">
        <div className="flex items-center gap-1 text-cyan-300 animate-pulse">
          <ClipboardList size={24} />
          <span className="text-s font-medium">New</span>
        </div>
        <button
          onClick={() => acceptTask(empId, taskIndex)}
          className="bg-cyan-600 hover:bg-cyan-500 px-3 py-1 text-s cursor-pointer rounded-full transition-all duration-300"
        >
          Accept Task
        </button>
      </div>
    </div>
    
  );
  
};


export default NewTask;
