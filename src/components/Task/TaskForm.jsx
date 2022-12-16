import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function TaskForm({ setTodos }) {
  const [taskValue, setTaskValue] = useState('');

  function formSubmitHandler(event) {
    event.preventDefault();
    const title = event.target.task.value;
    if (title) {
      setTaskValue('');
      setTodos((prevTasks) => [
        { id: uuidv4(), title, isDone: false },
        ...prevTasks,
      ]);
    }
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div class="mb-3">
        <input
          type="text"
          value={taskValue}
          name="task"
          class="form-control"
          onChange={(event) => setTaskValue(event.target.value)}
        />
      </div>

      <div class="mb-3">
        <button type="submit" class="btn btn-primary" disabled={!taskValue}>
          Kaydet
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
