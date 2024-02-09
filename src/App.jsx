import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import Login from './components/Login'
import SellersList from './components/SellersList'
import BuyersList from './components/BuyersList'
import PropertyList from './components/PropertyList'
import PropertyDetails from './components/PropertyDetails'
import Footer from './components/Footer'


function App() {

  return (
    <div>
        <BrowserRouter>
        <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />     {/* To be determined - may have seperate Login Page named differently? Login section in Nav bar? */}
            <Route path='/sellers' element={<SellersList />} />   {/* Route to the seller page */}
            <Route path='/buyers' element={<BuyersList />} />
            <Route path='/properties' element={<PropertyList />} />
            <Route path='/properties/:property_id' element={<PropertyDetails />} />
          </Routes>
        </BrowserRouter>
        <Footer />
    </div>

  )
}

export default App
