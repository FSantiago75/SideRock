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
import {
  OZZBORN_BASE_PATH,
  ozzbornPath,
} from './Pages/OzzbornPage/sectionConstants'
import {
  ACOUSTIC_BASE_PATH,
  acousticPath,
} from './Pages/AcousticPage/sectionConstants'

const HomePage = lazy(() =>
  import('./Pages/HomePage').then((module) => ({ default: module.HomePage })),
)
const AcousticShellPage = lazy(() =>
  import('./Pages/AcousticPage/AcousticShellPage').then((module) => ({
    default: module.AcousticShellPage,
  })),
)
const AcousticSummaryPage = lazy(() =>
  import('./Pages/AcousticPage/Pages/Summary/AcousticSummaryPage').then((module) => ({
    default: module.AcousticSummaryPage,
  })),
)
const OzzbornSummaryPage = lazy(() =>
  import('./Pages/OzzbornPage/Pages/Summary/OzzbornSummaryPage').then((module) => ({
    default: module.OzzbornSummaryPage,
  })),
)
const OzzbornMembersPage = lazy(() =>
  import('./Pages/OzzbornPage/Pages/Members/OzzbornMembersPage').then((module) => ({
    default: module.OzzbornMembersPage,
  })),
)
const OzzbornRepertoirePage = lazy(() =>
  import('./Pages/OzzbornPage/Pages/Repertoire/OzzbornRepertoirePage').then((module) => ({
    default: module.OzzbornRepertoirePage,
  })),
)
const OzzbornGalleryPage = lazy(() =>
  import('./Pages/OzzbornPage/Pages/Gallery/OzzbornGalleryPage').then((module) => ({
    default: module.OzzbornGalleryPage,
  })),
)
const SummaryPage = lazy(() =>
  import('./Pages/SideRockPage/Pages/Summary/SummaryPage').then((module) => ({
    default: module.SummaryPage,
  })),
)
const MembersPage = lazy(() =>
  import('./Pages/SideRockPage/Pages/Members/MembersPage').then(
    (module) => ({ default: module.MembersPage }),
  ),
)
const RepertoirePage = lazy(() =>
  import('./Pages/SideRockPage/Pages/Repertoire/RepertoirePage').then((module) => ({
    default: module.RepertoirePage,
  })),
)
const GalleryPage = lazy(() =>
  import('./Pages/SideRockPage/Pages/Gallery/GalleryPage').then((module) => ({
    default: module.GalleryPage,
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
          <Route
            path={ACOUSTIC_BASE_PATH}
            element={<Navigate to={acousticPath('resumo')} replace />}
          />
          <Route path={acousticPath('resumo')} element={<AcousticSummaryPage />} />
          <Route path={acousticPath('integrantes')} element={<AcousticShellPage />} />
          <Route path={acousticPath('repertorio')} element={<AcousticShellPage />} />
          <Route path={acousticPath('galeria')} element={<AcousticShellPage />} />
          <Route
            path={OZZBORN_BASE_PATH}
            element={<Navigate to={ozzbornPath('resumo')} replace />}
          />
          <Route path={ozzbornPath('resumo')} element={<OzzbornSummaryPage />} />
          <Route path={ozzbornPath('integrantes')} element={<OzzbornMembersPage />} />
          <Route path={ozzbornPath('repertorio')} element={<OzzbornRepertoirePage />} />
          <Route path={ozzbornPath('galeria')} element={<OzzbornGalleryPage />} />
          <Route
            path={LEGACY_EXPERIENCE_ROUTES.ozzborn}
            element={<Navigate to={EXPERIENCE_ROUTES.ozzborn} replace />}
          />
          <Route
            path={SIDE_ROCK_BASE_PATH}
            element={<Navigate to={sideRockPath('resumo')} replace />}
          />
          <Route path={sideRockPath('resumo')} element={<SummaryPage />} />
          <Route
            path={sideRockPath('integrantes')}
            element={<MembersPage />}
          />
          <Route
            path={`${SIDE_ROCK_BASE_PATH}/musica`}
            element={<Navigate to={sideRockPath('repertorio')} replace />}
          />
          <Route
            path={sideRockPath('repertorio')}
            element={<RepertoirePage />}
          />
          <Route path={sideRockPath('galeria')} element={<GalleryPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
