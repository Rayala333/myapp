import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './components/About';
import Section from './components/Section';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Section/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App