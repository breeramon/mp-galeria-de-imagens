import { motion } from 'framer-motion'
import MasonryGallery from './MasonryGallery'

export default function EraSection({ era, index }) {
  return (
    <motion.section
      id={era.id}
      className="era-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <header className="era-section__header">
        <span className="era-section__number">{String(index + 1).padStart(2, '0')}</span>
        <div>
          <h2 className="era-section__title">{era.title}</h2>
          <p className="era-section__period">{era.period}</p>
        </div>
      </header>

      {era.description && <p className="era-section__description">{era.description}</p>}

      <MasonryGallery photos={era.photos} />
    </motion.section>
  )
}
