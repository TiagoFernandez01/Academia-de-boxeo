import { Routes, Route, } from 'react-router-dom';
import Home from './Components/home/Home.jsx';
import './App.css';
import '../src/Components/gallery/Gallery.jsx'
import Gallery from '../src/Components/gallery/Gallery.jsx';
import AboutUs from './Components/abaoutUs/AboutUs.jsx';
import Exhibitions from './Components/fights/Exhibitions.jsx';

function App() {
  return (

    <Routes>
      <Route path='/' element={<Home />} />

      <Route path='/gallery' element={<Gallery />} />
      <Route path='/nosotros' element={<AboutUs />} />
      <Route path='/exhibiciones' element={<Exhibitions />} />
    </Routes>


  );
}

export default App;
