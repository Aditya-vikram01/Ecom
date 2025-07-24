import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Login from './(components)/auth/Login/Login';

function App() {
 
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signin" element={<Login/>} />
      </Routes>
    </>
  );
}

export default App;
