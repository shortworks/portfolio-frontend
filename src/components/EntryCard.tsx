interface Props {
  img_url: string
  title: string
  sm_title?: string
  sub_title?: string
  entity: string
  sm_entity?: string
  location: string
  start_date?: string
  end_date: string
  bullets?: string[]
}

export default function EntryCard({
  img_url,
  title,
  sm_title,
  entity,
  sm_entity,
  location,
  start_date,
  end_date,
  bullets,
}: Props) {
  return (
    <div className="card font-size-body flex items-center p-2">
      <div className="card-icon mr-1 flex h-16 w-16 p-2 sm:mr-2 sm:h-20 sm:w-20 sm:p-2">
        <img src={img_url} alt={`${entity} logo`} />
      </div>

      <div className="flex flex-col gap-1 text-left">
        <div className="flex flex-col gap-1 sm:flex">
          <span className="hidden font-bold sm:block">{title}</span>
          <span className="font-bold sm:hidden">
            {sm_title ? sm_title : title}
          </span>
          <span className="font-bold text-gray-700">
            {start_date ? start_date + ' — ' : ''}
            {end_date}
          </span>
        </div>

        <div className="text-gray-800">
          <span className="hidden italic sm:inline">{entity}, </span>
          <span className="italic sm:hidden">
            {sm_entity ? sm_entity : entity},
          </span>
          <span> {location}</span>
        </div>

        <div className="text-base text-gray-900">{bullets}</div>
      </div>
    </div>
  )
}
