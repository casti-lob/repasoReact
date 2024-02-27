import { Route, Routes } from "react-router-dom";
import {Home} from './home/Home';
import { Tasks } from "./tasks/tasks";
import { TaskAdd } from "./tasks/TaskAdd";
import { TaskDelete } from "./tasks/TaskDelete";
import { TaskShow } from "./tasks/TaskShow";

export const Layout = ()=>{
    return(
        <>
            <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/tasks" element={<Tasks />} />
             <Route path="/tasks/add" element={<TaskAdd/>}/>
             <Route path="/tasks/delete/:id" element={<TaskDelete/>}/>
             <Route path="/tasks/show/:id" element={<TaskShow/>}/>
            </Routes>
        </>
    );
}