import { FaLinkedin } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import type { IconType } from 'react-icons'

export default function ContactMe() {
  return (
    <section className="font-body mx-auto space-y-8 px-8 py-12 text-center sm:py-24">
      <h1 className="font-header text-4xl font-bold">Contact Me</h1>
      <p className="text-secondary">
        Have a project in mind, or just want to connect? Feel free to reach out
        using any of the methods below.
      </p>
      <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-8">
        <ContactLink
          icon={FiMail}
          name="E-Mail"
          link="mailto:nickolas.short@shortworks.dev"
        />
        <ContactLink
          icon={FaLinkedin}
          name="Linkedin"
          link="https://www.linkedin.com/in/nickolas-short/"
        />
      </div>
      <p className="text-secondary text-sm">
        {'Curious about my work? Check out my '}
        <a
          href="/projects"
          className="text-secondary font-semibold hover:text-slate-900"
        >
          projects
        </a>
        {' or '}
        <a
          href="/resume"
          className="text-secondary font-semibold hover:text-slate-900"
        >
          resume
        </a>
        .
      </p>
      <p className="text-secondary text-center text-lg">
        I’m always excited to explore new ideas and build creative solutions —
        feel free to get in touch about any projects or opportunities!
      </p>
    </section>
  )
}

interface ContactLinkProps {
  icon: IconType
  name: string
  link: string
}

function ContactLink({ icon: Icon, name, link }: ContactLinkProps) {
  return (
    <a
      href={link}
      target={link.startsWith('http') ? '_blank' : undefined}
      rel="noopener noreferrer"
    >
      <div className="group text-primary flex items-center gap-2 transition-all hover:cursor-pointer hover:drop-shadow-lg">
        <Icon className="h-6 w-6 transition-colors group-hover:text-orange-500" />
        <span className="transition-colors group-hover:text-orange-500">
          {name}
        </span>
      </div>
    </a>
  )
}
