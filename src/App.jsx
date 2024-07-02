import { useState } from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Checkout from './pages/Checkout'

function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home />}/>
  <Route path='/products' element={<Products />}/>
  <Route path='/checkout' element={<Checkout />}/>
</Routes>
</BrowserRouter>
)
}

export default App
