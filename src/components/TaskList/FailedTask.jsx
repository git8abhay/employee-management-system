import React from 'react';
import { XCircle } from 'lucide-react';

const FailedTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 w-[300px] h-full p-5 bg-white/10 backdrop-blur-md rounded-xl border border-cyan-400/20 shadow-md hover:shadow-cyan-500/30 transition-all duration-300 text-white">
      <div className="flex justify-between items-center">
        <span className="text-sm bg-red-500/20 px-3 py-1 rounded-full text-red-300">
          {data.category}
        </span>
        <span className="text-xs text-gray-400">{data.taskDate}</span>
      </div>

      <h2 className="mt-4 text-xl font-semibold line-clamp-1">{data.taskTitle}</h2>
      <p className="mt-2 text-sm text-cyan-100 line-clamp-3">{data.taskDescription}</p>

      <div className="flex items-center justify-between mt-6">
        <div className="flex items-center gap-1 text-red-400">
          <XCircle size={16} />
          <span className="text-xs font-medium">Failed</span>
        </div>
        <div className="text-red-300 text-xs font-medium">Failed</div>
      </div>
    </div>
  );
};

export default FailedTask;
