import React, { useContext } from 'react';
import { Clock } from 'lucide-react';
import { AuthContext } from '../../context/AuthProvider';

const AcceptTask = ({ data, empId, taskIndex }) => {
  const { completeTask, failTask } = useContext(AuthContext);
console.log('Rendering AcceptTask:', data);
  return (
    <div className="flex-shrink-0 w-[300px] h-full p-5 bg-white/10 backdrop-blur-md rounded-xl border border-cyan-400/20 shadow-md hover:shadow-cyan-500/30 transition-all duration-300 text-white">
      <div className="flex justify-between items-center">
        <span className="text-sm bg-yellow-500/20 px-3 py-1 rounded-full text-yellow-300">
          {data.category}
        </span>
        <span className="text-xs text-gray-400">{data.taskDate}</span>
      </div>

      <h2 className="mt-4 text-xl font-semibold line-clamp-1">{data.taskTitle}</h2>
      <p className="mt-2 text-sm text-cyan-100 line-clamp-3">{data.taskDescription}</p>

      <div className="flex justify-between items-center mt-6">
        <div className="flex items-center gap-1 text-yellow-300">
          <Clock size={16} />
          <span className="text-xs font-medium">Active</span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => completeTask(empId, taskIndex)}
            className="bg-green-600 hover:bg-green-500 px-2 py-1 text-xs rounded-full transition cursor-pointer"
          >
            Completed
          </button>
          <button
            onClick={() => failTask(empId, taskIndex)}
            className="bg-red-600 hover:bg-red-500 px-2 py-1 text-xs rounded-full transition cursor-pointer"
          >
            Failed
          </button>
        </div>
      </div>
    </div>
  );
  

};

export default AcceptTask;
