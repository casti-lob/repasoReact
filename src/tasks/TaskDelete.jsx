import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { deleteTask, getTask } from "../services/taskService";

export const TaskDelete = () => {
    const { id } = useParams();

    const [task, setTask] = useState(null);
    const [deleted, setDeleted] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getTaskToDelete() {
            try {
                const response = await getTask(id);
                setTask(response.data);
            } catch (error) {
                setError(error.message);
            }
        }
        getTaskToDelete();
    }, [id]);

    const handleDelete = async () => {
        try {
            await deleteTask(id);
            setDeleted(true);
        } catch (error) {
            setError(error.message);
        }
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (deleted) {
        return (
            <div className="container">
                <h1 className="heading">Tarea Borrada</h1>
                <Link to={"/tasks"} className="link">Volver a Tareas</Link>
            </div>
        );
    }

    return (
        <>
            <h1 className="heading">Borrar Tarea</h1>
            {task && (
                <div className="product-info">
                    <span className="property">Nombre:</span>
                    <span className="value">{task.title}</span>
                </div>
            )}
            <button onClick={handleDelete} className="btn btn-danger">Borrar</button>
            <br />
            <Link to={"/tasks"}>Volver</Link>
        </>
    );
};
