import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { RouteFallback } from './Components/RouteFallback/RouteFallback'
import {
  SIDE_ROCK_BASE_PATH,
  sideRockPath,
} from './Pages/SideRockPage/sectionConstants'
import {
  EXPERIENCE_ROUTES,
  LEGACY_EXPERIENCE_ROUTES,
} from './config/experiences'

const HomePage = lazy(() =>
  import('./Pages/HomePage').then((module) => ({ default: module.HomePage })),
)
const AcousticPage = lazy(() =>
  import('./Pages/AcousticPage').then((module) => ({
    default: module.AcousticPage,
  })),
)
const OzzbornPage = lazy(() =>
  import('./Pages/OzzbornPage').then((module) => ({
    default: module.OzzbornPage,
  })),
)
const ResumoPage = lazy(() =>
  import('./Pages/SideRockPage/Pages/Sumarry/ResumoPage').then((module) => ({
    default: module.ResumoPage,
  })),
)
const IntegrantesPage = lazy(() =>
  import('./Pages/SideRockPage/Pages/Members/IntegrantesPage').then(
    (module) => ({ default: module.IntegrantesPage }),
  ),
)
const MusicaPage = lazy(() =>
  import('./Pages/SideRockPage/Pages/Music/MusicaPage').then((module) => ({
    default: module.MusicaPage,
  })),
)
const GaleriaPage = lazy(() =>
  import('./Pages/SideRockPage/Pages/Galery/GaleriaPage').then((module) => ({
    default: module.GaleriaPage,
  })),
)
const NotFound = lazy(() =>
  import('./Pages/NotFound').then((module) => ({ default: module.NotFound })),
)

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<RouteFallback />}>
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
          <Route
            path={sideRockPath('integrantes')}
            element={<IntegrantesPage />}
          />
          <Route path={sideRockPath('musica')} element={<MusicaPage />} />
          <Route path={sideRockPath('galeria')} element={<GaleriaPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
