import ResumeHeader from '../features/ResumeHeader'
import Experience from '../features/Experience'
import Education from '../features/Education'
import Skills from '../features/Skills'

export default function Resume() {
  return (
    <>
    <ResumeHeader />
    <Skills />
    <Experience />
    <Education />
    </>
  )
}