import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Categories from './pages/categories'
import About_contact from './pages/about_contact'
import Books from './pages/Books'
import Comets from './pages/Comets'
import Constellations from './pages/Constellations'
import Latest_Development from './pages/Latest_Development'
import Observatories from './pages/Observatories'
import Planets from './pages/Planets'
import Videos from './pages/Videos'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories/>}/>
        <Route path='/About_contact' element={<About_contact/>}/>
        <Route path='/Books' element={<Books/>}/>
        <Route path='/Comets' element={<Comets/>}/>
        <Route path='/Constellations' element={<Constellations/>}/>
        <Route path='/Latest_Development' element={<Latest_Development/>}/>
        <Route path='/Observatories' element={<Observatories/>}/>
        <Route path='/Planets' element={<Planets/>}/>
        <Route path='/Videos' element={<Videos/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App