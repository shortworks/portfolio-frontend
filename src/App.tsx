import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import Resume from "./pages/Resume"

export default function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/resume" element={<Resume />}/>
        </Routes>
    </BrowserRouter>
  )
}
