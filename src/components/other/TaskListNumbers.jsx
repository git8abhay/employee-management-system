import React from 'react';
import {
  ClipboardList,
  CheckCircle,
  Clock,
  XCircle,
} from 'lucide-react';

const TaskListNumbers = ({ data }) => {
  const { newTask, completed, active, failed } = data.taskCounts;

  const items = [
    {
      label: 'New',
      count: newTask,
      icon: ClipboardList,
      border: 'border-blue-400',
      glow: 'group-hover:shadow-blue-400/60',
      pulse: true,
    },
    {
      label: 'Completed',
      count: completed,
      icon: CheckCircle,
      border: 'border-green-400',
      glow: 'group-hover:shadow-green-400/60',
    },
    {
      label: 'Active',
      count: active,
      icon: Clock,
      border: 'border-yellow-400',
      glow: 'group-hover:shadow-yellow-400/60',
    },
    {
      label: 'Failed',
      count: failed,
      icon: XCircle,
      border: 'border-red-400',
      glow: 'group-hover:shadow-red-400/60',
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 mt-10">
      {items.map(({ label, count, icon: Icon, border, glow, pulse }, idx) => (
        <div key={idx} className="flex flex-col items-center group">
          <div
            className={`w-24 h-24 rounded-full flex flex-col items-center justify-center bg-white/5 backdrop-blur-md text-white border-2 ${border} ${glow} transition-all duration-300 ${
              pulse ? 'animate-pulse border-[3px]' : ''
            }`}
          >
            <Icon size={22} className="mb-1" />
            <span className="text-sm">{label}</span>
          </div>
          <span className="mt-2 text-lg font-bold text-cyan-100">{count}</span>
        </div>
      ))}
    </div>
  );
};

export default TaskListNumbers;
