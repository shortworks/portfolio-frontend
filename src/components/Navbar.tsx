import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import MenuButton from './MenuButton'

const links = [
  { to: '/about', label: 'About Me' },
  { to: '/projects', label: 'Projects' },
  { to: '/resume', label: 'Resume' },
  { to: '/contact', label: 'Contact Me' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-10 flex w-full justify-center shadow-md md:rounded-b-2xl">
      <div className="flex w-full grow px-2 py-1 sm:px-4 sm:py-2">
        <div
          id="nav-container"
          className="relative flex grow items-center select-none"
        >
          <div className="font-header text-shadow hover:text-shadow-hover text-2xl font-bold transition-all">
            <Link to="/">
              <span className="text-accent">{'<'}</span>
              <span className="text-primary">Short</span>
              <span className="text-accent">Works</span>
              <span className="text-primary">{' />'}</span>
            </Link>
          </div>
          <div
            id="menu-button"
            className="hover:text-shadow-hover ml-auto flex items-center font-semibold transition-all sm:hidden"
          >
            <MenuButton
              open={menuOpen}
              toggleMenu={() => setMenuOpen(!menuOpen)}
            />
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{
                  height: menuOpen ? 0 : 'auto',
                  opacity: 0,
                }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                  duration: 0.1,
                  ease: 'easeInOut',
                }}
                className="bg-secondary absolute top-9 -right-2 z-50 flex flex-col items-end space-y-2 overflow-hidden rounded-bl-md p-2 shadow-lg sm:hidden"
              >
                {links.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="hover:text-shadow-hover font-semibold"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="mt-2 hidden sm:mt-0 sm:ml-auto sm:flex sm:flex-row sm:items-center sm:justify-end sm:space-x-4">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="hover:text-shadow-hover font-semibold transition-all"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
