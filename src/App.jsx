import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Auth from './pages/Auth'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'; // MDB styles
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import ProductDetails from './pages/ProductDetails'
import EventDetaisl from './pages/EventDetaisl'
function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<Home />} />
        </Route>
        <Route path='/events' element={<EventDetaisl />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<ProductDetails />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth register={'register'} />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
