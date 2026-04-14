import { HomePage } from './Pages/HomePage'
import { AcousticPage } from './Pages/AcousticPage'
import { OzzbornsPage } from './Pages/OzzbornsPage'
import { SideRockPage } from './Pages/SideRockPage'
import { NotFound } from './Pages/NotFound'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/acoustic" element={<AcousticPage />} />
        <Route path="/ozzborns" element={<OzzbornsPage />} />
        <Route path="/side-rock" element={<SideRockPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
