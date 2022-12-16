import React, { useState } from 'react';
import { todoData } from '../../data/todoData';
import TaskButton from '../Task/TaskButton';
import TaskDeleteButton from '../Task/TaskDeleteButton';
import TaskForm from '../Task/TaskForm';

function Task() {
  const [todos, setTodos] = useState(todoData);

  function todoHandler(id) {
    setTodos((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, isDone: !item.isDone };
        }
        // return item.id === id ? { ...item, isDone: !item.isDone } : item;
        return item;
      })
    );
  }

  return (
    <>
      <ul className="list-group">
        {todos
          .filter((item) => !item.isDeleted)
          .map((item) => (
            <li
              key={item.id}
              className={`list-group-item ${item.isDone && 'bg-info'}`}
            >
              <small className="me-1">{item.id}</small>
              {item.title}
              <TaskDeleteButton id={item.id} setTodos={setTodos} />
              <TaskButton
                id={item.id}
                isDone={item.isDone}
                todoHandler={todoHandler}
              />
            </li>
          ))}
      </ul>
      <hr />
      <TaskForm setTodos={setTodos} />
    </>
  );
}

export default Task;
