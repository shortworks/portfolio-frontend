import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import ContactMe from './pages/ContactMe'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="mx-auto flex min-h-screen max-w-3xl flex-grow flex-col overflow-x-hidden md:max-w-4xl">
        <div className="flex">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<ContactMe />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}
