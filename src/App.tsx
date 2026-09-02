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

const HomePage = lazy(() =>
  import('./Pages/HomePage').then((module) => ({ default: module.HomePage })),
)
const AcousticPage = lazy(() =>
  import('./Pages/AcousticPage').then((module) => ({
    default: module.AcousticPage,
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
const OzzbornPlaceholderPage = lazy(() =>
  import('./Pages/OzzbornPage/Pages/Placeholder/OzzbornPlaceholderPage').then((module) => ({
    default: module.OzzbornPlaceholderPage,
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
          <Route path={EXPERIENCE_ROUTES.acoustic} element={<AcousticPage />} />
          <Route
            path={OZZBORN_BASE_PATH}
            element={<Navigate to={ozzbornPath('resumo')} replace />}
          />
          <Route path={ozzbornPath('resumo')} element={<OzzbornSummaryPage />} />
          <Route path={ozzbornPath('integrantes')} element={<OzzbornMembersPage />} />
          <Route path={ozzbornPath('repertorio')} element={<OzzbornPlaceholderPage section="repertorio" />} />
          <Route path={ozzbornPath('galeria')} element={<OzzbornPlaceholderPage section="galeria" />} />
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
