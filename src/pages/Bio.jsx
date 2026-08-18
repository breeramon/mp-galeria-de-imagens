import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { backgroundPhoto } from '../data/eras'
import { pageTransition } from '../motion/pageTransition'

export default function Bio() {
  return (
    <motion.main
      {...pageTransition}
      className="hero-page hero-page--bio"
      style={{ backgroundImage: `url(${backgroundPhoto})` }}
    >
      <div className="hero-page__overlay">
        <p className="hero-page__text">
          não sou muito bom com palavras e nem em expressar os meus sentimentos, mas vamo lá
          kkkkkkk, desde a primeira vez que a gente se viu eu ja tinha decidido oque eu queria
          com você, fiz de tudo para que eu não fizesse nada de errado e já estava ansioso para
          a chegada desse dia. A forma como eu me interessei por você foi além do que eu
          imaginava, eu me apaixonei pela pessoa que você é, pelo seu humor, por suas
          brincadeiras, pelo seu sorriso, por quando vc rir vc apertar o olho, pelo seu cheiro,
          por sua beleza, por tudo que você é e continuarei apaixonado por tudo que você será.
          <br />
          <br />
          Como todo ser humano, eu não sou perfeito, por isso de antemão já peço desculpas por
          eu ter feito algo que te incomodou, mas por você eu me esforçarei o máximo para ser o
          melhor possível, por VOCÊ eu aprendo a me comunicar melhor, pq eu quero que seja VOCÊ,
          eu aprendo a ser paciente pq eu quero que seja VOCÊ, me esforço para mudar e aprender
          coisas por VOCÊ, pq eu quero que seja VOCÊ, só VOCÊ. Assim como eu sei que você também
          têm sido paciente comigo por tudo aquilo que já conversamos. Então venho através dessa
          nota, pq eu acredito que eu gaguejaria muito se eu fosse falar tudo q está aqui, para
          te mostrar o quanto vc é luz, o quanto eu gosto MUITO de você dizer EU TE AMO.
        </p>
        <Link to="/fotos" className="btn-more">
          --&gt; CLIQUE AQUI PARA VER AS NOSSAS FOTOS &lt;--
        </Link>
      </div>
    </motion.main>
  )
}
