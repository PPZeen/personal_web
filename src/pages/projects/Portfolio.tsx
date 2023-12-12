import { Link } from 'react-router-dom'

import { Web_H1, Web_H2, Web_H3, Web_H4, Web_H5,
         Game_H1, 
         Py_H1, Py_H2, Py_H3 } from '../../assets/images'

export default function Portfolio() {
    const datas = [
        {
            "title": "Web Development",
            "content": [
                {
                    "head": "E-commerce",
                    "description": "Online clothing trading website.",
                    "image": Web_H1,
                    "path": "Clothing4U"
                },
                {
                    "head": "Clone Project",
                    "description": "Clone UI of web pages.",
                    "image": Web_H2,
                    "path": "Clone"
                },
                {
                    "head": "PleaseBuy Project",
                    "description": "A website for a grab some food.",
                    "image": Web_H3,
                    "path": "PleaseBuy"
                },
                {
                    "head": "PickMovie Project",
                    "description": "This website can help you decide on a movie.",
                    "image": Web_H4,
                    "path": "PickMovie"
                },
                {
                    "head": "CE BoostUp Backend",
                    "description": "Create API for web CE BoostUp60.",
                    "image": Web_H5,
                    "path": "BoostUpCE60"
                },
            ]
        },
        {
            "title": "Game Development",
            "content": [
                {
                    "head": "Knight Journey Project",
                    "description": "2D Game with SFML.",
                    "image": Game_H1,
                    "path": "Knight-Journey"
                }
            ]
        },
        {
            "title": "Python Programming",
            "content": [
                {
                    "head": "Tertis",
                    "description": "Tertis with pygame library.",
                    "image": Py_H1,
                    "path": "Tertis"
                },
                {
                    "head": "Tic-Tac-Toe",
                    "description": "Tic-Tac-Toe text mode with python.",
                    "image": Py_H2,
                    "path": "Tic-Tac-Toe"
                },
                {
                    "head": "Vocab Game",
                    "description": "Vocab Game with GUI library.",
                    "image": Py_H3,
                    "path": "Vocab-Game"
                }
            ]
        },
    ]

    return (
        <div className="port max-lg:px-5 px-10 pb-5">
            <h3 className="py-2 pb-4 border-b">My Portfolio</h3>
            {datas.map((data, index) => (
                <section className="mt-5" key={`${data}${index}`}>
                    <h2>{data.title}</h2>
                    <div className="w-full pt-3 flex gap-x-3 flex-wrap">
                        {data.content.map((content, index) => (
                            <Link className="card" key={`${content}${index}`} to={`/portfolio/${content.path}`}>
                                <div className="w-full h-[80%] absolute top-0 left-0">
                                    <img src={content.image} className="object-cover h-full" />
                                </div>
                                <div className="info">
                                    <h3 className="max-md:text-base">{content.head}</h3>
                                    <p className="max-lg:text-sm max-sm:text-xs">{content.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            ))}
        </div>
    )
}