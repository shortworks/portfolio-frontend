import SkillCard from '../components/SkillCard'

export default function Skills() {
  return (
    <div className="w-full flex-col px-2">
      <h1 className="font-header font-size-header text-left">
        Technical Skills
      </h1>
      <div className="mt-1 grid grid-cols-1 gap-2 sm:grid-cols-2">
        <SkillCard
          title="Languages"
          text="C, C++, C#, Python, JavaScript, HTML, CSS, SQL"
        />
        <SkillCard
          title="Frameworks and Libraries"
          text="React JS, Tailwind CSS, Node.JS, Qt/QML, C# WPF"
        />
        <SkillCard
          title="Tools and Platforms"
          text="Visual Studio/VS Code, Eclipse, Git, Jira, Confluence, Linux"
        />
        <SkillCard
          title="Embedded Systems"
          text="Firmware Development, Device Drivers, Microcontroller Architecture"
        />
      </div>
    </div>
  )
}
