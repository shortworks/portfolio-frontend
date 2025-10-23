interface Props {
  title: string
  text: string
}

export default function SkillCard({ title, text }: Props) {
  const list = text.split(',').map((item) => item.trim())

  return (
    <div className="card font-body font-size-body text-left">
      <div className="font-size-card-title mt-1 text-center font-bold">
        {title}
      </div>
      <div className="flex flex-wrap justify-center gap-1 p-2 pt-1">
        {list.map((skill, idx) => (
          <span
            key={idx}
            className="rounded-full bg-gray-200 px-3 py-1 text-gray-800"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
