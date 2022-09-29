import logo from './logo.svg';
import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Homepage from './pages/home/Homepage';
import Profilemain from './pages/profilemain/Profilemain';




function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path = "/about" element = {<Profilemain />} />
      <Route path = "/portfolio" element = {<Homepage />} />
    </Route>
    </Routes>
  </>
  );
}

export default App;
