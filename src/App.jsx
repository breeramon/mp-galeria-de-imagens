import { AnimatePresence } from 'framer-motion'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Fotos from './pages/Fotos'
import Bio from './pages/Bio'
import Contato from './pages/Contato'

export default function App() {
  const location = useLocation()

  return (
    <div className="app-shell">
      <Navbar />
      {/* mode="wait" espera a página atual sumir antes da próxima entrar,
          evitando que as duas fiquem sobrepostas durante a troca. */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/fotos" element={<Fotos />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}
