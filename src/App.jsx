import { Routes, Route, } from 'react-router-dom';
import Home from './Components/home/Home.jsx';
import './App.css';
import '../src/Components/gallery/Gallery.jsx'
import Gallery from '../src/Components/gallery/Gallery.jsx';

function App() {
  return (

    <Routes>
      <Route path='/' element={<Home />} />

      <Route path='/gallery' element={<Gallery />} />
    </Routes>


  );
}

export default App;
