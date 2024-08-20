import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/home/Home.jsx';
import './App.css';

function App() {
  return (
    
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    
  );
}

export default App;
