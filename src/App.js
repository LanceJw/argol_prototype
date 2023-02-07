import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import LandingPage from './components/LandingPage/LandingPage';
import ProductPage from './components/ProductPage/ProductPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/products' element={<ProductPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
