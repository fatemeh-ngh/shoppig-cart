import './App.css';

// Components
import Store from './components/Store';

// Context
import ProductsContextProvider from './context/productsContextProvider';

function App() {
  return (
    <ProductsContextProvider>
      <Store/>
    </ProductsContextProvider>
  );
}

export default App;
