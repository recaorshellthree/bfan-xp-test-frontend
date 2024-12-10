import React, { useEffect, useState } from 'react';
import { fetchTasks, createTask, deleteTask } from './api/tasks';

interface Task {
  id: string;
  title: string;
  description: string;
  done: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    done: false,
  });

  const loadTasks = async () => {
    const data = await fetchTasks();
    setTasks(data);
  };

  const handleCreateTask = async () => {
    await createTask(newTask);
    setNewTask({ title: '', description: '', done: false });
    loadTasks();
  };

  const handleDeleteTask = async (id: string) => {
    await deleteTask(id);
    loadTasks();
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Description"
          value={newTask.description}
          onChange={(e) =>
            setNewTask({ ...newTask, description: e.target.value })
          }
          className="border p-2 mr-2"
        />
        <label className="mx-4">
          <input
            type="checkbox"
            checked={newTask.done}
            onChange={(e) => setNewTask({ ...newTask, done: e.target.checked })}
          />
          <span className="ml-2">Done</span>
        </label>
        <button
          onClick={handleCreateTask}
          className="bg-blue-500 text-white p-2"
        >
          Add Task
        </button>
      </div>

      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center border-b py-2"
          >
            <div>
              <h3 className="font-bold">{task.title}</h3>
              <p>{task.description}</p>
              <p>{task.done ? 'Completed' : 'Not Completed'}</p>
            </div>
            <button
              onClick={() => handleDeleteTask(task.id)}
              className="bg-red-500 text-white p-2"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
