import { Link } from 'react-router-dom'

export default function AboutMe() {
  return (
    <div className="text-primary m-4 mt-5 flex flex-col justify-between leading-relaxed sm:flex-row sm:gap-5">
      <div className="mb-0 flex flex-col gap-3 sm:mb-2 sm:w-1/3">
        <h2 className="font-header text-center text-3xl">About Me</h2>
        <img
          src="src/assets/stock.jpg"
          alt=""
          className="object-fit rounded-full"
        />
        <Link to="/projects">
          <button className="bg-accent hover:bg-accent-hover mt-2 mb-1 hidden w-full rounded-full shadow-xs transition-all hover:shadow sm:block">
            View My Projects
          </button>
        </Link>
        <Link to="/resume">
          <button className="bg-accent hover:bg-accent-hover hidden w-full rounded-full shadow-xs transition-all hover:shadow sm:block">
            View My Resume
          </button>
        </Link>
      </div>
      <div className="font-body flex max-w-prose flex-col gap-3 text-left text-base sm:w-2/3 md:text-lg">
        <p>
          I'm a Portland, OR-based software engineer with a background in
          embedded systems and desktop development, now expanding into
          full-stack web development. I specialize in building efficient,
          maintainable applications using{' '}
          <span className="text-accent font-semibold">C/C++</span>,{' '}
          <span className="text-accent font-semibold">Python</span>, and modern
          web technologies such as{' '}
          <span className="text-accent font-semibold">React</span> and{' '}
          <span className="text-accent font-semibold">Tailwind CSS</span>. My
          work blends low-level firmware experience with a strong focus on
          usability, responsiveness, and tools that make processes smarter, not
          harder.
        </p>
        <p>
          Over the years, I've developed firmware for safety systems, built
          internal tools for process automation, and collaborated with
          cross-functional teams to bring embedded products to market. I'm
          especially interested in how web technologies can interface with and
          visualize data from hardware, bridging the gap between systems-level
          performance and user-facing reliability.
        </p>
        <p>
          When I'm not coding, I enjoy hiking&mdash;one day I hope to complete a
          stretch of the Pacific Crest Trail from Portland to Vancouver,
          BC&mdash;as well as camping near water and relaxing with friends over
          a board game and great coffee.
        </p>
        <p>
          Feel free to check out my{' '}
          <a
            href="https://github.com/shortnr"
            target="_blank"
            className="text-accent transition-colors hover:text-shadow-sm"
          >
            Github
          </a>{' '}
          or{' '}
          <a
            href="https://www.linkedin.com/in/nickolas-short/"
            target="_blank"
            className="text-accent transition-colors hover:text-shadow-sm"
          >
            LinkedIn
          </a>{' '}
          to see more of what I've been working on.
        </p>
      </div>
    </div>
  )
}
