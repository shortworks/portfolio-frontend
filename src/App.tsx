import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import Resume from './pages/Resume'
import ContactMe from './pages/ContactMe'
import AboutMe from './pages/AboutMe'

export default function App() {
  return (
    <BrowserRouter>
      <div className="mx-auto flex min-h-screen max-w-3xl flex-grow flex-col md:max-w-4xl">
        <Navbar />
        <div className="flex flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<ContactMe />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}
