import { motion } from 'framer-motion'
import { pageTransition } from '../motion/pageTransition'

// Preencha aqui seu e-mail e telefone de contato reais.
const email = 'seuemail@exemplo.com'
const telefone = '+55 (00) 00000-0000'

export default function Contato() {
  return (
    <motion.main {...pageTransition} className="contato-page">
      <div className="contato-page__content">
        <h2>Fale comigo</h2>
        <p>Quer trocar uma ideia ou só mandar um oi? Escolha o canal que preferir.</p>

        <ul className="contato-page__list">
          <li>
            <span>E-mail</span>
            <a href={`mailto:${email}`}>{email}</a>
          </li>
          <li>
            <span>Telefone</span>
            <a href={`tel:${telefone.replace(/\D/g, '')}`}>{telefone}</a>
          </li>
        </ul>

        <ul className="contato-page__socials">
          <li>
            <a href="https://www.instagram.com/breenoramon_/" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://x.com/breenoramon" target="_blank" rel="noreferrer">
              X (Twitter)
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@breeramon_" target="_blank" rel="noreferrer">
              TikTok
            </a>
          </li>
        </ul>
      </div>
    </motion.main>
  )
}
