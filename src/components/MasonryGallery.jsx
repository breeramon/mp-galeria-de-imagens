import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Masonry from 'react-masonry-css'

// Quantidade de colunas do masonry por largura de tela.
// Ajuste esses números se quiser fotos maiores/menores em cada breakpoint.
const breakpointColumns = {
  default: 3,
  1100: 3,
  700: 2,
  460: 1,
}

// Curva de easing usada em toda a animação de abrir/fechar/trocar de foto.
const zoomTransition = { duration: 0.45, ease: [0.22, 1, 0.36, 1] }

export default function MasonryGallery({ photos }) {
  const [selected, setSelected] = useState(null) // índice da foto aberta, ou null

  const close = () => setSelected(null)
  const showPrev = () => setSelected((i) => (i - 1 + photos.length) % photos.length)
  const showNext = () => setSelected((i) => (i + 1) % photos.length)

  // Esc fecha, setas navegam, e trava o scroll da página enquanto o
  // lightbox está aberto.
  useEffect(() => {
    if (selected === null) return undefined

    function handleKeyDown(event) {
      if (event.key === 'Escape') close()
      if (event.key === 'ArrowRight') showNext()
      if (event.key === 'ArrowLeft') showPrev()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected, photos.length])

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumns}
        className="masonry-grid"
        columnClassName="masonry-grid__column"
      >
        {photos.map((photo, index) => (
          <motion.button
            key={photo.src}
            type="button"
            className="masonry-item"
            onClick={() => setSelected(index)}
            aria-label={`Ampliar foto: ${photo.alt}`}
            // O layoutId é o que faz a mágica: como o mesmo id aparece aqui
            // (miniatura) e na foto ampliada abaixo, o Framer Motion anima
            // automaticamente uma "crescendo" pra virar a outra.
            layoutId={`photo-${photo.src}`}
            transition={zoomTransition}
          >
            <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" />
          </motion.button>
        ))}
      </Masonry>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              className="lightbox-close"
              onClick={close}
              aria-label="Fechar"
            >
              ×
            </button>

            {photos.length > 1 && (
              <button
                type="button"
                className="lightbox-nav lightbox-nav--prev"
                onClick={(event) => {
                  event.stopPropagation()
                  showPrev()
                }}
                aria-label="Foto anterior"
              >
                ‹
              </button>
            )}

            <motion.img
              key={photos[selected].src}
              layoutId={`photo-${photos[selected].src}`}
              src={photos[selected].src}
              alt={photos[selected].alt}
              className="lightbox-image"
              onClick={(event) => event.stopPropagation()}
              transition={zoomTransition}
            />

            {photos.length > 1 && (
              <button
                type="button"
                className="lightbox-nav lightbox-nav--next"
                onClick={(event) => {
                  event.stopPropagation()
                  showNext()
                }}
                aria-label="Próxima foto"
              >
                ›
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
