import SkillCard from '../components/SkillCard'

export default function Skills() {
    return (
        <div className="mb-10 w-4xl">
            <h1 className="mt-6 mb-2 text-left  font-header font-medium">Technical Skills</h1>
            <div className="grid grid-cols-2 gap-x-4">
                <SkillCard
                    title="Languages"
                    text="C, C++, C#, Python, SQL, Assembly"
                />
                <SkillCard
                    title="GUI Frameworks"
                    text="Qt/QML, C# WPF"

                />
                <SkillCard
                    title="Tools and Platforms"
                    text="Visual Studio, VS Code, Eclipse, Git, Jira, Confluence, Windows, Linux"
                />
                <SkillCard
                    title="Embedded Systems"
                    text="firmware development, device drivers,
                        microcontroller architectures (8-32 bit)"
                />
            </div>
        </div>
    )
}