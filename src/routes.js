import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Inicio from './paginas/inicio';
import Criador from './paginas/Criador';

import Header from './componentes/Header';
import Footer from './componentes/Footer';

function AppRoutes() {

    const categorias = [
        {
            nome: "Comedia"
        },
        {
            nome: "Ficção"
        },
        {
            nome: "Infantil"
        }
    ]


    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route index element={<Inicio categorias={categorias}/>} />
                <Route path='novovideo' element={<Criador categorias={categorias} />}  />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default AppRoutes;