import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/fotos', label: 'Fotos' },
  { to: '/bio', label: 'Bio' },
  { to: '/contato', label: 'Contato' },
]

const socials = [
  { href: 'https://www.instagram.com/breenoramon_/', label: 'Instagram', short: 'IG' },
  { href: 'https://x.com/breenoramon', label: 'X', short: 'X' },
  { href: 'https://www.tiktok.com/@breeramon_', label: 'TikTok', short: 'TT' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        className="menu-toggle"
        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`navbar ${open ? 'navbar--open' : ''}`}>
        <h1 className="navbar__title">Galeria de Imagens</h1>

        <ul className="navbar__links">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) => (isActive ? 'is-active' : '')}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <ul className="navbar__socials">
          {socials.map((s) => (
            <li key={s.href}>
              <a href={s.href} className="icons" target="_blank" rel="noreferrer" aria-label={s.label}>
                {s.short}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {open && <div className="navbar__backdrop" onClick={() => setOpen(false)} />}
    </>
  )
}
