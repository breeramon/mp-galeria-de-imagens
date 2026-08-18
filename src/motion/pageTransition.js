// Configuração compartilhada da transição de entrada/saída de cada página.
// Usada como {...pageTransition} em cada <motion.main> das páginas
// (Home, Fotos, Bio, Contato) para dar aquele fade + deslize suave na troca.
export const pageTransition = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 },
  transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
}
