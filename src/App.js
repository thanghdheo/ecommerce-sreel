import './App.css';
import Home from './pages/Home';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Register from './pages/Register';
import Login from './pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

function App() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategpries = async () => {
      await axios
        .get("https://fakestoreapi.com/products/categories")
        .then((res) => setCategories(res.data));
    };
    getCategpries();
  }, []);
  
  const user = useSelector(state =>  state.users)

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home categories={categories} />} />
        <Route path='/login' element={user.currentUser?<Home categories={categories} /> : <Login  categories={categories}/>} />
        <Route path='/register' element={user.currentUser?<Home categories={categories} /> : <Register  categories={categories}/>} />
        <Route path='/cart' element={<Cart  categories={categories}/>} />
        <Route path='/products/:category' element={<ProductList categories={categories} />} />
        <Route path='/product/:id'  element={<Product  categories={categories}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
