import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom'

// Components
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/shared/Navbar';
import ShopCart from './components/ShopCart';

// Context
import ProductsContextProvider from './context/productsContextProvider';
import CartContextProvider from './context/CartContextProvider';

function App() {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <Navbar/>
        <Routes>
          <Route path='/products/*' element={<Store/>}/>
          <Route path='/*' element={<Navigate to='/products'/>}/>
          <Route path='/products/:id' element={<ProductDetails/>}/>
          <Route path='/cart' element={<ShopCart/>}/>
        </Routes>
      </CartContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
