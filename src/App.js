
import './App.css';
import Banner from './componentes/Banner';
import Categoria from './componentes/Categoria';
import Footer from './componentes/Footer';
import Header from './componentes/Header';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Banner/>    
      <Categoria/>
      <Footer/>
    </div>
  );
}

export default App;
