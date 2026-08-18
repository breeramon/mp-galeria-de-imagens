import { motion } from 'framer-motion'
import { eras } from '../data/eras'
import EraSection from '../components/EraSection'
import { pageTransition } from '../motion/pageTransition'

export default function Fotos() {
  return (
    <motion.main {...pageTransition} className="timeline-page">
      <header className="timeline-page__intro">
        <h2>A nossa linha do tempo</h2>
        <p>Role para baixo e vá passando por cada época, na ordem em que elas aconteceram.</p>
      </header>

      {eras.map((era, index) => (
        <EraSection key={era.id} era={era} index={index} />
      ))}
    </motion.main>
  )
}
