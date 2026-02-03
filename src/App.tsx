import { HomePage } from './Pages/HomePage'
import { AcousticPage } from './Pages/AcousticPage'
import { OzzbornsPage } from './Pages/OzzbornsPage'
import { SideRockPage } from './Pages/SideRockPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <BrowserRouter basename="/SideRock">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/acoustic" element={<AcousticPage />} />
        <Route path="/ozzborns" element={<OzzbornsPage />} />
        <Route path="/siderock" element={<SideRockPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
