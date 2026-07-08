type SkillCategory = keyof typeof typeDictionary
export type SkillsData = Record<SkillCategory, string[]>

const typeDictionary = {
  hardware: 'pill-hw',
  software: 'pill-sw',
  frameworks: 'pill-frameworks',
  tools: 'pill-tool',
  misc: 'pill-misc',
}

const isSkillCategory = (key: string): key is SkillCategory =>
  key in typeDictionary

interface Props {
  title: string
  sm_title?: string
  sub_title?: string
  entity: string
  sm_entity?: string
  location: string
  start_date?: string
  end_date: string
  skills?: SkillsData
  bullets?: string[]
}

export default function EntryCard({
  title,
  sm_title,
  entity,
  sm_entity,
  location,
  start_date,
  end_date,
  skills,
  bullets,
}: Props) {
  var skillsIn = skills as SkillsData
  return (
    <div className="card font-size-body flex items-center">
      <div className="border-orange-top w-full">
        <div className="flex flex-col gap-1 p-2 text-left">
          <div className="flex flex-col gap-1 sm:flex">
            <div className="flex flex-row items-center justify-between">
              <span className="hidden font-bold sm:block">{title}</span>
              <span className="font-bold sm:hidden">
                {sm_title ? sm_title : title}
              </span>
              <span className="date-card">
                {start_date ? start_date + ' — ' : ''}
                {end_date}
              </span>
            </div>
          </div>

          <div className="text-gray-800">
            <span className="hidden italic sm:inline">{entity}, </span>
            <span className="italic sm:hidden">
              {sm_entity ? sm_entity : entity},
            </span>
            <span> {location}</span>
          </div>
          {skills ? <hr /> : ''}
          <div className="card-skills-list">
            {skills &&
              Object.entries(skillsIn).map(
                ([category, skillList]) =>
                  isSkillCategory(category) &&
                  skillList.map((skill) => (
                    <div
                      key={`${category}-${skill}`}
                      className={typeDictionary[category as SkillCategory]}
                    >
                      {skill}
                    </div>
                  ))
              )}
          </div>
        </div>
      </div>
    </div>
  )
}
