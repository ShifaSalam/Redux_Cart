
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrap.min.css'

import { Routes,Route } from 'react-router-dom';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Cart from './Pages/Cart';
import Details from './Pages/Details';
import Home from './Pages/Home';
import Wishlist from './Pages/Wishlist'

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/detail/:id' element={<Details/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/wish' element={<Wishlist/>}/>
        <Route path='/*' element={<Home/>}/>
      </Routes>
      <Footer/>
    </>
  )
}
export default App
