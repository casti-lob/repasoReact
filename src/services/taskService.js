import axios from 'axios';

const baseURL = 'http://localhost:3000/tasks/';

const apiService = axios.create({baseURL,});

// obtiene todas las tareas
export const getTasks = () => apiService.get();

// obtiene una tarea (ID)
export const getTask = (postId) => apiService.get(`${postId}`);

// Añade una tarea (Tarea)
export const addTask = (newTask) => apiService.post('',newTask);

// Borrar una tarea (ID)
export const deleteTask = (postId) => apiService.delete(`${postId}`);