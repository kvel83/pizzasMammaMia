import React  from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import MyContext from './utils/MyContext';
import Home from './views/home';
import Cart from './views/cart';
import HeaderComp from './components/headerComp';
import FooterComp from './components/footerComp';
import NotFound from './views/notFound';
import {ProvideContext} from './utils/MyContext';

function App() {
  return (
    <div className="App">
      <ProvideContext>
        <BrowserRouter basename='/pizzasMammaMia'>
          <HeaderComp className="header"/>
            <Routes>
              <Route  path="/" element={<Home />} />
              <Route path='/Carrito' element={<Cart />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          <FooterComp />
        </BrowserRouter>
      </ProvideContext>
    </div>
  );
}

export default App;
