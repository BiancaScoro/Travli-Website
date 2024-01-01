import './App.css';
import Home from './pages/Home/Home'
import Packages from './pages/Packages/Packages'
import About from './pages/About/About'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
