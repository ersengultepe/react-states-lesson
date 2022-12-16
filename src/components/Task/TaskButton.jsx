import React from 'react';

function TaskButton({ id, isDone, todoHandler }) {
  return (
    <span
      onClick={() => todoHandler(id)}
      className={`btn btn-sm btn-${isDone ? 'success' : 'warning'} float-end`}
    >
      {isDone ? 'Checked' : 'Check'}
    </span>
  );
}

export default TaskButton;
