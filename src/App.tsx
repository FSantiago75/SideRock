import { HomePage } from './Pages/HomePage'
import { AcousticPage } from './Pages/AcousticPage'
import { OzzbornsPage } from './Pages/OzzbornsPage'
import { ResumoPage } from './Pages/SideRockPage/Pages/Sumarry/ResumoPage'
import { IntegrantesPage } from './Pages/SideRockPage/Pages/Members/IntegrantesPage'
import { MusicaPage } from './Pages/SideRockPage/Pages/Music/MusicaPage'
import { GaleriaPage } from './Pages/SideRockPage/Pages/Galery/GaleriaPage'
import { NotFound } from './Pages/NotFound'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import {
  SIDE_ROCK_BASE_PATH,
  sideRockPath,
} from './Pages/SideRockPage/sectionConstants'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/acoustic" element={<AcousticPage />} />
        <Route path="/ozzborns" element={<OzzbornsPage />} />
        <Route
          path={SIDE_ROCK_BASE_PATH}
          element={<Navigate to={sideRockPath('resumo')} replace />}
        />
        <Route path={sideRockPath('resumo')} element={<ResumoPage />} />
        <Route path={sideRockPath('integrantes')} element={<IntegrantesPage />} />
        <Route path={sideRockPath('musica')} element={<MusicaPage />} />
        <Route path={sideRockPath('galeria')} element={<GaleriaPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
