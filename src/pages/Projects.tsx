export default function ProjectsPage() {
  return (
    <div className="mx-auto flex flex-col items-center justify-center gap-6 py-16 text-center">
      <p className="text-secondary font-mono text-sm">
        <span className="text-accent">// </span>TODO: add projects
      </p>
      <h1 className="font-mono text-3xl font-bold">
        <span className="text-accent">{'<'}</span>
        Projects
        <span className="text-accent">{' />'}</span>
      </h1>
      <p className="text-secondary max-w-xs font-mono text-sm leading-relaxed">
        This section is under construction.
        <br />
        Check back soon.
      </p>
      <span className="text-secondary border-muted mt-2 rounded-md border px-3 py-1.5 font-mono text-xs">
        status: <span className="text-accent">in_progress</span>
      </span>
    </div>
  )
}
