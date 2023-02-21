import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import LandingPage from './components/LandingPage/LandingPage';
import ProductPage from './components/ProductPage/ProductPage';
import AboutUs from './components/AboutUs/AboutUs';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/products' element={<ProductPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
