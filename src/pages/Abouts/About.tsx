import { AboutProfile } from '../../assets/images'
import { c, cplusplus, csharp, javascript, typescript, java, python, 
         mongodb, express, react, nodejs, tailwindcss, dotnetcore, sql } from '../../assets/svgs'

import Info from './Info'

export default function About() {
    const datas = [
        {
            "title": "Languages",
            "content": [
                c, cplusplus, csharp, javascript, typescript, java, python
            ] 
        },
        {
            "title": "Tools",
            "content": [
                mongodb, express, react, nodejs, tailwindcss, dotnetcore, sql
            ] 
        },
    ]

    return (
        <div className="about pb-5 bg-neutral-100">
            <section className="flex justify-center pt-4">
                <div className="flex gap-2 w-[80%] max-lg:w-[90%] max-md:w-[95%] bg-white p-4">
                    <div className="h-[50vh] max-lg:h-[40vh] max-md:h-[30vh] overflow-hidden">
                        <img src={AboutProfile} className="h-full object-cover" />
                    </div>
                    <div className="flex flex-col w-[75%] items-center justify-center text-neutral-800">
                        <h1 className="pb-8 max-md:pb-2">About me</h1>
                        <p className="text-center w-[65%] max-lg:w-[75%] max-md:w-[85%] max-md:text-sm max-sm:text-xs max-[428px]:text-[0.6rem]/[0.7rem]">
                            My name is Nutthavat Phomak and I want to be a Full-Stack Developer. 
                            I'm still learning essential skills to do it. now I'm looking for a co-op internship.
                            Unfortunately, last summer I only had 1 month. so I couldn't do an internship.
                            I really want to do because I prefer hands-on more and I like programming.
                            Therefore, I usually do well in subjects that require programming.
                        </p>
                    </div>
                </div>
            </section>
            <section className="flex justify-center items-center py-8">
                <div className="w-full px-6 flex justify-center flex-wrap gap-3 max-md:gap-1">
                    <Info
                        title={"Education"}
                        icon={"graduation-cap"}
                        datas={[
                            {
                                "title": "King Mongkut's Institute of Technology Ladkrabang",
                                "infos": ["Aug 2021 - Current | Undergraduate", "Computer Engineering"]
                            },
                            {
                                "title": "Chulalongkorn University",
                                "infos": ["Aug 2020 - May 2021 | Undergraduate", "Survey Engineering"] 
                            },
                            {
                                "title": "Matthayom Watbungthonglang School",
                                "infos": ["Undergraduate Mar 2020", "Science - Math Program"]
                            }
                        ]}
                    />
                    <Info 
                        title={"Information"}
                        icon={"user"}
                        datas={[
                            {
                                "title": "Personality",
                                "infos": ["Name Nutthavat Phomak", "Nickname Prite", "Day of Birth 17/02/2002 Age 21", "Weight 60 kg", "Height 175 cm", "Gender Male"]
                            },
                        ]}
                    />
                    <Info
                        title={"Contact"}
                        icon={"clipboard-notes"}
                        datas={[
                            {
                                "title": "Email",
                                "infos": ["nutthavat.ph@gmail.com (for work)", "P.nutthavat_@hotmail.com (personal)"]
                            },
                            {
                                "title": "Address",
                                "infos": ["78/112 Bang Chan, Khlong Sam Wa, Bangkok 10510"]
                            },
                            {
                                "title": "Tel",
                                "infos": ["096 141 0357"]
                            }
                        ]}
                    />
                </div>
            </section>
            <section className="flex flex-col items-center justify-center pt-8">
                <div className="pb-8 max-md:pb-2 text-center">
                    <h1 className="pb-2 text-neutral-800">Skills</h1>
                    <h4 className="text-neutral-500 text-lg max-md:text-sm max-sm:text-xs">skills I learned at the institute and learned by myself.</h4>
                </div>
                <div className="skill-container">
                    {datas.map((data, index) => (
                        <div className="skill-wrap" key={`${data.title}${index}`}>
                            <div className="skill">
                                {data.content.map((svg,index) => (
                                    <img src={svg} key={`${svg}${index}`}/>
                                ))}
                            </div>
                            <h2 className="text-neutral-800">{data.title}</h2>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}