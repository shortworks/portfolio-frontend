import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="w-full sticky top-0 bg-slate-400 text-black">
          <div id="nav-container" className="max-w-4xl mx-auto items-center flex py-2">
            <Link to="/">
              <div className="grid grid-cols-[auto_1fr_auto] grid-rows-2 font-header font-bold text-4xl logo-color transition-colors duration-100 select-none">
                <div className="row-span-2 place-items-center text-7xl font-medium leading-none">
                  {"{"}
                </div>
                
                <div className="col-start-2 row-start-1 w-35 pl-1 flex justify-start">
                  Short
                </div>
                
                <div className="col-start-2 row-start-2 flex pr-1 justify-end">
                  Works
                </div>
                
                <div className="row-span-2 place-items-center text-7xl font-medium leading-none">
                  {"}"}
                </div>
              </div>
            </Link>
            <div className="flex-1 text-3xl font-header font-bold text-right space-x-6">
              <Link to="/about" className="link-style select-none">About</Link>
              <Link to="/projects" className="link-style select-none">Projects</Link>
              <Link to="/resume" className="link-style select-none">Resume</Link>
              <Link to="/contact" className="link-style select-none">Contact Me</Link>
            </div>
          </div>
        </nav>
    )
}