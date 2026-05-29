import { BrowserRouter, Routes, Route, } from 'react-router-dom'

import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import PromoBanner from './components/PromoBanner'
import NewArrivals from './components/NewArrivals'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import About from './pages/About'
import ProductDetails from './pages/ProductDetails'
import Shop from './pages/Shop'


function Home() {
  return (
    <>
      <Hero />
      <Products />
      <PromoBanner />
      <NewArrivals />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

