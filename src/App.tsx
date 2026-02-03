import { HomePage } from './Pages/HomePage'
import { AcousticPage } from './Pages/AcousticPage'
import { OzzbornsPage } from './Pages/OzzbornsPage'
import { SideRockPage } from './Pages/SideRockPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <BrowserRouter basename="/Home/">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Acoustic" element={<AcousticPage />} />
        <Route path="/Ozzborns" element={<OzzbornsPage />} />
        <Route path="/SideRock" element={<SideRockPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
