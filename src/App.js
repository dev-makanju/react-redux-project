import React from 'react';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header';
import ProductListing from './components/ProductListing';
import ProductDetail from './components/ProductDetail';

const App = () => {
  return (
    <Provider store={store}>
      <div className='App'>
        <Router>
          <Header/>
          <Routes>
            <Route path="/product/:productId" element={<ProductDetail/>}/>
            <Route path="/" element={<ProductListing/>}/>
            <Route>404 Not Found!!!</Route>
          </Routes>
        </Router>
      </div>
    </Provider>
  );
};

export default App;
