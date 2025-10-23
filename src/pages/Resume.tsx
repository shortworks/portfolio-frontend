import ResumeHeader from '../features/ResumeHeader'
import Experience from '../features/Experience'
import Education from '../features/Education'
import Skills from '../features/Skills'

export default function Resume() {
  return (
    <div className="mx-auto my-2 -mt-5 flex flex-grow flex-col items-center justify-between gap-6">
      <ResumeHeader />
      <Skills />
      <Experience />
      <Education />
    </div>
  )
}
