import EntryCard from '../components/EntryCard'
import achievements from '../resources/achievement-data.json'

export default function Education() {
  return (
    <div className="w-full">
      <h2 className="flex items-center pb-3 text-left text-lg font-semibold">
        <span className="color-accent">&#9654;</span>
        <span className="pl-2">Unlocked Achievements</span>
      </h2>
      <div className="border-orange-top pt-4">
        <div className="border-black-left ml-4 pl-4">
          <div className="mt-1 mr-4 flex flex-col justify-center gap-6">
            {achievements.map((ach) => (
              <EntryCard
                key={ach.id}
                title={ach.degree}
                entity={ach.school}
                location={ach.location}
                end_date={ach.endDate}
                bullets={[]}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
