import axios from 'axios';

const API_URL = 'http://localhost:8000/api/tasks';

export const fetchTasks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createTask = async (task: {
  title: string;
  description: string;
  done: boolean;
}) => {
  const response = await axios.post(API_URL, task);
  return response.data;
};

export const deleteTask = async (id: string) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
