import { Link, useLocation } from "react-router-dom";
// useLocation es un hook que nos permite obtener la ruta actual para poder marcar el link activo en el navbar
import { Navbar as BSNavbar, Container, Nav } from "react-bootstrap";

export default function Navbar() {
    const { pathname } = useLocation();

    return (
        <BSNavbar bg="dark" variant="dark" expand="md" className="mb-4 shadow-sm app-navbar" sticky="top">
            <Container>
                <BSNavbar.Brand as={Link} to="/" className="fw-bold">CRUD React</BSNavbar.Brand>
                <BSNavbar.Toggle aria-controls="navbar-nav" />
                <BSNavbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto gap-2 text-uppercase">
                        <Nav.Link
                            as={Link}
                            to="/"
                            className="app-nav-link"
                            active={pathname === "/"}
                        >
                            Formulario
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/usuarios"
                            className="app-nav-link"
                            active={pathname === "/usuarios"}
                        >
                            Tabla
                        </Nav.Link>
                    </Nav>
                </BSNavbar.Collapse>
            </Container>
        </BSNavbar>
    );
}
