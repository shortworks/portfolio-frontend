import { Link } from 'react-router-dom'

function AboutImage({
  type = '',
  className = '',
}: {
  type?: string
  className?: string
}) {
  return (
    <img
      src={`src/assets/about-me-picture-${type}.webp`}
      alt=""
      className={`rounded-3xl object-cover object-top ${className}`}
    />
  )
}

function AboutLinks({
  orientation = 'col',
  className,
}: {
  orientation?: string
  className?: string
}) {
  return (
    <div className={`flex flex-${orientation} w-full gap-4 ${className} mt-2`}>
      <Link to="/projects" className="flex-1">
        <button className="bg-accent hover:bg-accent-hover w-full rounded-full shadow-xs transition-all hover:shadow">
          View My Projects
        </button>
      </Link>
      <Link to="/resume" className="flex-1">
        <button className="bg-accent hover:bg-accent-hover w-full rounded-full shadow-xs transition-all hover:shadow">
          View My Resume
        </button>
      </Link>
    </div>
  )
}

export default function AboutMe() {
  return (
    <div className="text-primary m-4 mt-5 leading-relaxed">
      <h2 className="font-header font-size-header text-left">About Me</h2>
      <div className="mt-4 flex flex-col sm:flex-row sm:gap-5">
        {/* Sidebar — wide screens only */}
        <div className="mb-2 hidden gap-3 sm:flex sm:w-1/3 sm:flex-col">
          <AboutImage type="sidebar" className="h-auto w-full" />
          <AboutLinks orientation="col" />
        </div>
        <AboutImage
          type="letterbox"
          className="xs:mr-4 float-left mr-2 h-auto w-full sm:hidden"
        />
        {/* Text content */}
        <div className="font-body mt-4 text-left text-base sm:mt-0 sm:w-2/3 md:text-lg lg:text-xl">
          <div className="space-y-4">
            <p>
              I'm a software engineer with a background in embedded systems and
              desktop development, with a growing focus on full-stack web
              development. I specialize in building efficient, maintainable
              applications across the stack — from low-level firmware to
              user-facing interfaces built with React and Tailwind CSS.
            </p>
            <p>
              I've developed firmware for safety-critical systems, built
              internal tools for process automation, and collaborated with
              cross-functional teams to bring embedded products to market. I'm
              particularly drawn to projects where hardware and software meet —
              whether that's visualizing sensor data in a browser or building
              tooling that makes an engineer's day a little less tedious.
            </p>
            <p>
              I'm also currently building Dice Mathsters, an educational math
              game for early learners built in Unity and C#, targeting
              Chromebooks. It's been a rewarding exercise in game design and
              product thinking outside of my usual web stack.
            </p>
            <p>
              When I'm not coding, I enjoy hiking &mdash; one day I hope to
              complete a stretch of the Pacific Crest Trail from Portland,
              Oregon to Vancouver, BC &mdash; as well as camping near water and
              relaxing with friends over a board game and great coffee.
            </p>
            <AboutLinks orientation="row" className="sm:hidden" />
          </div>
          <div className="clear-both" />
        </div>
      </div>
    </div>
  )
}
