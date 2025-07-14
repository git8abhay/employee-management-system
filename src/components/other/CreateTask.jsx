import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { CalendarDays, ClipboardEdit, User, Tags, FileText } from 'lucide-react';

const CreateTask = () => {
  const {userData, setUserData} = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [asignTo, setAsignTo] = useState('');
  const [category, setCategory] = useState('');

  const [newTask, setNewTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    const createdTask = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false
    };

    const updatedData = userData.map((elem) => {
      if (asignTo === elem.firstName) {
        elem.tasks.push(createdTask);
        elem.taskCounts.newTask += 1;
      }
      return elem;
    });

    setUserData(updatedData);

    // Reset form fields
    setTaskTitle('');
    setTaskDescription('');
    setTaskDate('');
    setAsignTo('');
    setCategory('');
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-6 text-center">Task Creation</h2>
    <div className="p-6 rounded-xl bg-white/10 border border-cyan-400/30 shadow-md mt-6 backdrop-blur-md">
      <form onSubmit={submitHandler} className="flex flex-wrap justify-between gap-6">
        {/* Left Column */}
        <div className="flex flex-col gap-4 w-full sm:w-1/2 text-white">
          <label className="text-sm flex items-center gap-2 !text-cyan-200">
            <ClipboardEdit size={18} /> Task Title
          </label>
          <input
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            type="text"
            placeholder="Make a UI design"
            className="bg-transparent border border-cyan-400 px-4 py-2 text-white rounded-md focus:ring-2 focus:ring-cyan-500 transition duration-300"
          />

          <label className="text-sm flex items-center gap-2 !text-cyan-200">
            <CalendarDays size={18} /> Date
          </label>
          <input
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
            type="date"
            className="bg-transparent border border-cyan-400 px-4 py-2 text-white rounded-md focus:ring-2 focus:ring-cyan-500 transition duration-300"
          />

            <label className="text-sm flex items-center gap-2 !text-cyan-200">
            <User size={18} /> Assign to
            </label>
            <select
            value={asignTo}
            onChange={(e) => setAsignTo(e.target.value)}
            className="bg-transparent border !border-cyan-400 px-4 py-2 text-white rounded-md focus:ring-2 focus:ring-cyan-500 transition duration-300"
            >
            <option value="" disabled>Select an employee</option>
            {userData.map((user, idx) => (
                <option key={idx} value={user.firstName} className="!text-black">
                {user.firstName}
                </option>
            ))}
            </select>

          <label className="text-sm flex items-center gap-2 !text-cyan-200">
            <Tags size={18} /> Category
          </label>
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            type="text"
            placeholder="design, dev, etc"
            className="bg-transparent border border-cyan-400 px-4 py-2 text-white rounded-md focus:ring-2 focus:ring-cyan-500 transition duration-300"
          />
        </div>

        {/* Right Column */}
        <div className="flex flex-col w-full sm:w-[45%] text-white">
          <label className="text-sm flex items-center gap-2 !text-cyan-200 mb-1">
            <FileText size={18} /> Description
          </label>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            rows={7}
            placeholder="Describe the task here..."
            className="bg-transparent border mt-2 border-cyan-400 px-4 py-2 text-white rounded-md focus:ring-2 focus:ring-cyan-500 transition duration-300 resize-none"
          />

          <button
            type="submit"
            className="mt-6 cursor-pointer bg-emerald-500 hover:bg-emerald-600 py-3 px-5 rounded-md transition hover:scale-105 shadow-md font-semibold"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default CreateTask;
