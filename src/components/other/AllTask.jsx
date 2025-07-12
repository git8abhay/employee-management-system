import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import {
  ClipboardList,
  Clock,
  CheckCircle,
  XCircle,
  User
} from 'lucide-react';

const AllTask = () => {
  const [userData] = useContext(AuthContext);

  return (
    <div className="mt-6">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">Team Task Overview</h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {userData.map((emp, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center gap-4 bg-white/10 backdrop-blur-md border border-cyan-400/30 rounded-2xl shadow-lg p-6 text-white hover:shadow-cyan-500/40 transition-all duration-500"
          >
            {/* Avatar */}
            <div className="bg-cyan-500/20 p-4 rounded-full">
              <User size={36} />
            </div>

            {/* Name */}
            <h3 className="text-xl font-semibold">{emp.firstName}</h3>

            {/* Task stats */}
            <div className="flex flex-col gap-2 w-full mt-2 text-sm">
              <div className="flex justify-between items-center bg-white/5 px-3 py-2 rounded-md">
                <span className="flex items-center gap-2 !text-blue-300">
                  <ClipboardList size={18} /> New Tasks
                </span>
                <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full animate-pulse ">
                  {emp.taskCounts.newTask}
                </span>
              </div>

              <div className="flex justify-between items-center bg-white/5 px-3 py-2 rounded-md">
                <span className="flex items-center gap-2 !text-yellow-300">
                  <Clock size={18} /> Active Tasks
                </span>
                <span className="bg-yellow-400 text-white text-xs px-2 py-1 rounded-full">
                  {emp.taskCounts.active}
                </span>
              </div>

              <div className="flex justify-between items-center bg-white/5 px-3 py-2 rounded-md">
                <span className="flex items-center gap-2 !text-green-300">
                  <CheckCircle size={18} /> Completed
                </span>
                <span className="bg-green-400 text-white text-xs px-2 py-1 rounded-full">
                  {emp.taskCounts.completed}
                </span>
              </div>

              <div className="flex justify-between items-center bg-white/5 px-3 py-2 rounded-md">
                <span className="flex items-center gap-2 !text-red-400">
                  <XCircle size={18} /> Failed
                </span>
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  {emp.taskCounts.failed}
                </span>
              </div>
            </div>

            {/* Optional CTA */}
            <button className="mt-4 text-sm !text-cyan-300 hover:underline hover:text-cyan-100 transition cursor-pointer">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
