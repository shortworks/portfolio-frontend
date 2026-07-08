import EntryCard from '../components/EntryCard'
import type { SkillsData } from '../components/EntryCard'
import quests from '../resources/quest-data.json'

export default function Experience() {
  return (
    <div className="w-full">
      <div className="items-left mr-4 flex flex-col pb-3 text-left text-lg font-semibold sm:mr-0 sm:flex-row sm:items-center sm:justify-between">
        <h2>
          <span className="color-accent">&#9654;</span>
          <span className="font-body pl-2">Quest Log</span>
        </h2>
        <div className="flex gap-2 text-[0.5em] sm:text-sm md:justify-evenly">
          <span className="pill-hw">Hardware</span>
          <span className="pill-sw">Software</span>
          <span className="pill-frameworks">Frameworks</span>
          <span className="pill-tool">Tools</span>
          <span className="pill-misc">Misc.</span>
        </div>
      </div>
      <div className="border-orange-top pt-4">
        <div className="border-black-left ml-4 pl-4">
          <div className="mt-1 mr-4 flex flex-col justify-center gap-6">
            {quests.map((job) => (
              <EntryCard
                key={job.id}
                title={job.position}
                entity={job.company}
                location={job.location}
                start_date={job.startDate}
                end_date={job.endDate}
                skills={job.skills as SkillsData}
                bullets={[]}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
