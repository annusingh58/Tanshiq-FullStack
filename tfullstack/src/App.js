import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Register from './Component/Register';
import Login from './Component/Login';
import Home from './Component/Home';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />}/>
        <Route exact path="/home" element={<Home />}/>
      </Routes>
    
    </>
  );
}

export default App;
