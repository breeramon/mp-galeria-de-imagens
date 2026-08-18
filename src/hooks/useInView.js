import { useEffect, useRef, useState } from 'react'

// Hook simples que diz quando um elemento entrou na tela.
// Usado para dar aquele efeito de "a época vai aparecendo" enquanto
// rola a página — sem precisar de nenhuma biblioteca de animação.
export function useInView({ threshold = 0.15, once = true } = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // Se o navegador não suporta IntersectionObserver (bem raro hoje em
    // dia), mostra o conteúdo direto em vez de escondê-lo para sempre.
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true)
            if (once) observer.unobserve(node)
          } else if (!once) {
            setInView(false)
          }
        })
      },
      { threshold },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, once])

  return { ref, inView }
}
