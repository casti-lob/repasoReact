import { Link } from "react-router-dom";

export const Navbar = () =>{
    return(
        <>
            <nav style={{ backgroundColor: 'yellow', padding: '10px' }}>
                <Link to='/' className="">Inicio</Link> <br />
                <Link to='/tasks'>Ver Tareas</Link> 
            </nav>
        </>
    );
}