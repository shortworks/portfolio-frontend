interface Props {
    title: string;
    text: string;
}

export default function SkillCard({title, text}:Props) {
    return (
        <div className="card my-3 p-4 text-left font-body">
            <div className="text-xl font-bold pb-1">{title}</div>
            <div className="text-xl">{text}</div>
        </div>
    )
}