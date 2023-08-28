import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Register from './Component/Register';
import Login from './Component/Login';
import Home from './Component/Home';
import Singlepage from './Component/Singlepage';
import Multiplepage from './Component/Multiplepage';
import Cart from './Component/Cart';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />}/>
        <Route exact path="/home" element={<Home />}/>
        <Route exact path="/single" element={<Singlepage/>}/>
        <Route exact path="/multiplepage" element={<Multiplepage/>}/>
        <Route exact path="/cart" element={<Cart />}/>
        
      </Routes>
    
    </>
  );
}

export default App;
