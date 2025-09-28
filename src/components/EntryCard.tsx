interface Props {
    img_url: string;
    title: string;
    entity: string;
    location: string;
    start_date?: string;
    end_date: string;
    bullets?: string[];
}

export default function EntryCard({
  img_url,
  title,
  entity,
  location,
  start_date,
  end_date,
  bullets,
}: Props) {
    return (
        <div className="card flex w-4xl my-6 p-4 font-body">
            <div className="card-icon">
                <img
                    src={img_url}
                    alt={`${entity} logo`}
                />
            </div>

            <div className="flex flex-col w-full ml-4 text-xl text-left">
                <div className="flex justify-between items-baseline w-full">
                    <span className="font-bold">
                        {title}
                    </span>
                    <span className="font-bold text-gray-700">
                        {start_date ? (start_date + " — ") : ""}{end_date}
                    </span>
                </div>

                <div className="text-gray-800">
                    <span className="italic">{entity}</span>, <span>{location}</span>
                </div>

                <div className="mt-2 text-base text-gray-900">
                    {bullets}
                </div>
            </div>
        </div>
    );
}