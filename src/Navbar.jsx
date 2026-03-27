import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Formulario de usuarios</Link>
                </li>
                <li>
                    <Link to="/usuarios">Tabla de usuarios</Link>
                </li>
            </ul>
        </nav>
    );
}
