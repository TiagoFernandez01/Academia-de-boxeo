import { Routes, Route, } from 'react-router-dom';
import Home from './Components/home/Home.jsx';
import './App.css';
import '../src/Components/gallery/Gallery.jsx'
import Gallery from '../src/Components/gallery/Gallery.jsx';
import AboutUs from './Components/abaoutUs/AboutUs.jsx';

function App() {
  return (

    <Routes>
      <Route path='/' element={<Home />} />

      <Route path='/gallery' element={<Gallery />} />
      <Route path='/nosotros' element={<AboutUs />} />
    </Routes>


  );
}

export default App;
