import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from '../../Components/NavBar'
import Banda from '../Banda'
import Integrantes from '../Integrantes'
import Album from '../Album'
import Shows from '../Shows'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <NavBar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pt-20">
          <Routes>
            <Route path="/" element={<Banda />} />
            <Route path="/banda" element={<Banda />} />
            <Route path="/integrantes" element={<Integrantes />} />
            <Route path="/album" element={<Album />} />
            <Route path="/shows" element={<Shows />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
