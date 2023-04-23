
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import Menupage from './Pages/MenuPage/Menupage';
import Cartpage from './Pages/Cartpage/Cartpage';
import Header from './Components/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/menu' element={<Menupage />} />
        <Route path='/cart' element={<Cartpage />} />
      </Routes>
    </div>
  );
}

export default App;
