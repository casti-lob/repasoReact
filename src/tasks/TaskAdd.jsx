import React, { useState } from "react";
import { addTask } from "../services/taskService";

export const TaskAdd = () => {
  const [formData, setFormData] = useState({
    title: '',
    completed: false
  });

  const [added, setAdded] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addTask(formData);
      setAdded(true);
    } catch (error) {
      console.error('Error al agregar la tarea', error);
    }
  };

  return (
    <>
      <h1>Añadir Tarea</h1>
      {added && <p>Tarea agregada con éxito.</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Tarea:
          <input type="text" name="title" value={formData.title} onChange={handleChange} />
        </label>
        <button type="submit" className="btn btn-success">Añadir Tarea</button>
      </form>
    </>
  );
}
