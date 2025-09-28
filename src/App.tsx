import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Resume from "./pages/Resume"

export default function App() {
  return (
    <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> | <Link to="/resume">Resume</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/resume" element={<Resume />}/>
        </Routes>
    </BrowserRouter>
  )
}
