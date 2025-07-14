import React from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const TaskList = ({ data }) => {
  const empId = data.id;

  return (
    <div
      id="tasklist"
      className="mt-14 flex gap-6 overflow-x-auto scrollbar-hide px-2 py-1"
      style={{
        scrollSnapType: 'x mandatory',
        WebkitOverflowScrolling: 'touch',
      }}
    >
      {data.tasks?.map((elem, idx) => {
        
        let Card = null;

        if (elem.newTask === true && elem.active === false) {
          Card = NewTask;
        } else if (elem.active === true && elem.completed === false && elem.failed === false) {
          Card = AcceptTask;
        } else if (elem.completed === true) {
          Card = CompleteTask;
        } else if (elem.failed === true) {
          Card = FailedTask;
        }

        return Card ? (
          <div
            key={idx}
            className="flex-shrink-0 scroll-snap-align-start"
            style={{ minWidth: '300px' }}
          >
            <Card data={elem} empId={empId} taskIndex={idx} />
          </div>
        ) : null;
      })}
    </div>
  );
};

export default TaskList;
