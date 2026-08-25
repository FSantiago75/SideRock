import { HomePage } from './Pages/HomePage'
import { AcousticPage } from './Pages/AcousticPage'
import { OzzbornPage } from './Pages/OzzbornPage'
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
import {
  EXPERIENCE_ROUTES,
  LEGACY_EXPERIENCE_ROUTES,
} from './config/experiences'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={EXPERIENCE_ROUTES.catalog} element={<HomePage />} />
        <Route path={EXPERIENCE_ROUTES.acoustic} element={<AcousticPage />} />
        <Route path={EXPERIENCE_ROUTES.ozzborn} element={<OzzbornPage />} />
        <Route
          path={LEGACY_EXPERIENCE_ROUTES.ozzborn}
          element={<Navigate to={EXPERIENCE_ROUTES.ozzborn} replace />}
        />
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
