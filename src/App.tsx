import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Login from './(components)/auth/Login/Login';
import Register from './(components)/auth/Register/Register';
import ProductsPage from './pages/Products/ProductPage';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/products/:category' element={<ProductsPage />} />
      </Routes>
    </>
  );
}

export default App;
