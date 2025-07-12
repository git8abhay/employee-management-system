import React from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="mt-14 flex gap-6 overflow-x-auto scrollbar-hide px-2 py-1"
      style={{
        scrollSnapType: 'x mandatory',
        WebkitOverflowScrolling: 'touch',
      }}
    >
      {data.tasks.map((elem, idx) => {
        const Card = elem.active
          ? AcceptTask
          : elem.newTask
          ? NewTask
          : elem.completed
          ? CompleteTask
          : elem.failed
          ? FailedTask
          : null;

        return Card ? (
          <div
            key={idx}
            className="flex-shrink-0 scroll-snap-align-start"
            style={{ minWidth: '300px' }}
          >
            <Card data={elem} />
          </div>
        ) : null;
      })}
    </div>
  );
};

export default TaskList;
