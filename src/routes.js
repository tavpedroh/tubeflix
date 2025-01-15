import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Inicio from './paginas/inicio';
import Criador from './paginas/Criador';

import Header from './componentes/Header';
import Footer from './componentes/Footer';

function AppRoutes() {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route index element={<Inicio/>} />
                <Route path='novovideo' element={<Criador/>}  />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default AppRoutes;