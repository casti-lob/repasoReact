import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTask } from "../services/taskService";

export const TaskShow = () =>{
    const { id } = useParams();

    const [task, setTask] = useState(null);
    const [error, setError] = useState(null);


    useEffect(() => {
        async function getTaskToShow() {
            try {
                const response = await getTask(id);
                setTask(response.data);
            } catch (error) {
                setError(error.message);
            }
        }
        getTaskToShow();
    }, [id]);
    
    if (error) {
        return <div>Error: {error}</div>;
    }

    // Agregar una verificación para task null
    if (!task) {
        return <div>Cargando...</div>;
    }

    return(
        <>
            <h1>Detalles de la tarea</h1>
            <h3>Detalles: </h3>
            <div className="product-info">
                <span className="property">Nombre:</span>
                <span className="value">{task.title}</span>
            </div>
        </>
    );
}
