import { useEffect, useState } from "react";
import { getTasks } from "../services/taskService";
import { Link } from "react-router-dom";

export const Tasks = () =>{

    const [tasks, setTasks] = useState([]);

    useEffect(
        ()=>{
            async function getTasksComp(){
                const res = await getTasks();
                setTasks(res.data);
            }
            getTasksComp();
        },[]
    );

    return(
        <>
            <h1>Lista de tareas</h1>

            <Link to="/tasks/add" className="add-link">
                <span>Añadir Tarea</span>
            </Link>


            <div>
                {
                    tasks.map((task)=>(
                        <div key={task.id} className="card">
                            <div className="card-body">
                                <h5 className="card-title">Tarea: {task.id}</h5>
                                <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                                    {task.title}
                                </span>
                                <Link to={`/tasks/delete/${task.id}`} className="btn btn-danger">Borrar</Link>
                                <Link to={`/tasks/show/${task.id}`} className="btn btn-info">Ver detalles</Link>
                                
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
}