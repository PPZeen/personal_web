export default function Tools({tools, title}: {tools: [any], title: string}) {

    return (
        <div className="skill-wrap">
            <div className="skill">
                {tools.map((tool: string) => (
                    <img src={tool} className="w-[2.5rem] aspect-square" />
                ))}
            </div>
            <h2 className="text-neutral-800">{title}</h2>
        </div>
    )
}