import Experience from '../features/Experience'
import Education from '../features/Education'

export default function Resume() {
  return (
    <div className="mx-auto flex flex-grow flex-col items-center justify-between gap-6">
      <Experience />
      <Education />
    </div>
  )
}
