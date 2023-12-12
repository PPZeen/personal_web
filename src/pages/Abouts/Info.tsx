interface InfoProps {
  title: string;
  icon: string,
  datas: any;
}

type DataProps = {
    title: string,
    infos: [string]
}

export default function Info ({title, icon, datas}: InfoProps) {
    return (
        <div className="w-[32%] max-lg:w-[49%] max-[430px]:w-full overflow-hidden">
            <div className="flex flex-col items-center gap-2 pb-1">
                <i className={`uil uil-${icon} text-neutral-400 text-7xl max-md:text-5xl max-sm:text-3xl`}></i>
                <h3 className="text-neutral-800 max-md:text-lg max-sm:text-base">{title}</h3>
            </div>
            <div className='flex justify-center'>
                <div className='w-fit font-medium max-md:text-sm max-sm:text-xs'>
                    {datas.map(({title, infos}: DataProps, index: number) => (
                        <div className='pt-2' key={`${index}${title}`}>
                            <h3 className="font-semibold text-base max-md:text-sm max-sm:text-xs">{title}</h3>
                            <div>
                                {infos?.map((info:string, index: number) => (
                                    <li className="text-neutral-500" key={`${info}${index}`}>{info}</li>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}