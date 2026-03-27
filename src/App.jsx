import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import Usuario from "./Usuario";
import UsuarioTable from "./UsuarioTable";

export default function App() {
    return(
        <Router>
          
            <Navbar />
            <Routes>
                <Route path="/" element={<Usuario />} />
                <Route path="/usuarios" element={<UsuarioTable />} />
            </Routes>
        </Router>
    )
}
