import React from 'react';
import { ClipboardList } from 'lucide-react';

const NewTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 w-[300px] h-full p-5 bg-white/10 backdrop-blur-md rounded-xl border border-cyan-400/20 shadow-md hover:shadow-cyan-500/30 transition-all duration-300 text-white">
      {/* Header */}
      <div className="flex justify-between items-center">
        <span className="text-sm bg-cyan-500/20 px-3 py-1 rounded-full text-cyan-300">
          {data.category}
        </span>
        <span className="text-xs text-gray-400">{data.taskDate}</span>
      </div>

      {/* Title */}
      <h2 className="mt-4 text-xl font-semibold line-clamp-1">{data.taskTitle}</h2>

      {/* Description */}
      <p className="mt-2 text-sm text-cyan-100 line-clamp-3">{data.taskDescription}</p>

      {/* Status + Action */}
      <div className="flex justify-between items-center mt-6">
        <div className="flex items-center gap-1 text-cyan-300 animate-pulse">
          <ClipboardList size={16} />
          <span className="text-xs font-medium">New</span>
        </div>
        <button className="bg-cyan-600 hover:bg-cyan-500 px-3 py-1 text-xs rounded-full transition-all duration-300">
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
