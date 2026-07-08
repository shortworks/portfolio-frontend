import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import MenuButton from './MenuButton'
import Logo from '../components/Logo'

const stepEasing = (steps: number) => (t: number) =>
  Math.floor(t * steps) / steps

const links = [
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/resume', label: 'Resume' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav>
      <div className="mx-auto max-w-3xl md:max-w-4xl">
        <div className="flex w-full grow justify-center p-4">
          <div
            id="nav-container"
            className="relative flex grow items-center select-none"
          >
            <Link to="/">
              <Logo size="text-lg sm:text-xl" />
            </Link>
            <div
              id="menu-button"
              className="ml-auto flex items-center md:hidden"
            >
              <MenuButton
                open={menuOpen}
                toggleMenu={() => setMenuOpen(!menuOpen)}
              />
            </div>

            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  initial={{ y: -80, opacity: 0 }}
                  animate={{ y: [-110, -70, -30, 10], opacity: 1 }}
                  exit={{ y: -80, opacity: 0 }}
                  transition={{
                    y: {
                      duration: 0.25,
                      times: [0, 0.33, 0.66, 1],
                      ease: [stepEasing(1), stepEasing(1), stepEasing(1)],
                    },
                  }}
                  className="hamburger-card absolute top-10 -right-2 z-50 flex flex-col items-end space-y-2 overflow-hidden p-4 md:hidden"
                >
                  {links.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="hover:text-accent-hover text-[10px]"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="mt-2 ml-auto hidden space-x-6 sm:justify-end md:flex md:flex-row">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="hover:text-accent-hover text-[10px] md:text-[12px]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
