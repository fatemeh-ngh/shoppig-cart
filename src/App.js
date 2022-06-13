import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom'

// Components
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';

// Context
import ProductsContextProvider from './context/productsContextProvider';

function App() {
  return (
    <ProductsContextProvider>
      <Routes>
        <Route path='/products/*' element={<Store/>}/>
        <Route path='/*' element={<Navigate to='/products'/>}/>
        <Route path='/products/:id' element={<ProductDetails/>}/>
      </Routes>
    </ProductsContextProvider>
  );
}

export default App;
