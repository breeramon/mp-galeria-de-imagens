import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { backgroundPhoto } from '../data/eras'
import { pageTransition } from '../motion/pageTransition'

export default function Home() {
  return (
    <motion.main
      {...pageTransition}
      className="hero-page"
      style={{ backgroundImage: `url(${backgroundPhoto})` }}
    >
      <div className="hero-page__overlay">
        <h2 className="hero-page__title">Boas vindas ao nosso museu de momentos</h2>
        <p className="hero-page__subtitle">
          Cada época, uma sala. Cada foto, um pedacinho da nossa história.
        </p>
        <Link to="/fotos" className="btn-more">
          CLIQUE AQUI PARA VER MAIS →
        </Link>
      </div>
    </motion.main>
  )
}
