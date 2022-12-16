import React from 'react';

function TaskDeleteButton({ id, setTodos }) {
  function deleteHandler(id) {
    setTodos((prevTodos) =>
      prevTodos.map((item) => {
        if (item.id === id) {
          return { ...item, isDeleted: true };
        }
        return item;
      })
    );
  }

  return (
    <span
      onClick={() => deleteHandler(id)}
      className={`ms-1 btn btn-sm btn-danger float-end`}
    >
      Delete
    </span>
  );
}

export default TaskDeleteButton;
