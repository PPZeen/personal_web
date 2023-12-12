import { HomeBG, Web_H1, Web_H3, Web_H4, Web_H5, Game_H1 } from '../assets/images'

export default function Home () {
    return (
        <div className="home">
            <div className="h-[80vh] w-full">
                <div className="relative h-full w-full bg-[#bebbb7]">
                    <img src={ HomeBG } alt="homeBG" className="homeBg-img" />
                    <div className="welcome">
                        <div className="w-[80%] max-md:w-[60%] h-full flex flex-col max-md:items-start justify-center items-center">
                            <h1 className="title">Nutthavat Phomak</h1>
                            <h4 className="text-2xl font-medium pt-4">Computer Engineering | KMITL</h4>
                            <p className="pt-6 font-medium text-center max-md:text-left max-sm:text-sm">I'm interested in becoming a Full-Stack Developer.<br/>This website has everything about me such as skills,  personal info,  and projects I've done in the past.</p>
                            <p className="pt-6 max-sm:text-sm">Thank you for attention.</p>
                            <div className="flex gap-2 pt-2">
                                <a href="./portfolio" className="bg-white hover:bg-neutral-200/90">
                                    <i className="uil uil-book-alt"></i>
                                    Portfolio
                                </a>
                                <a href="./about" className="bg-neutral-800/20 text-white hover:bg-neutral-800/50">
                                    <i className="uil uil-info-circle"></i>
                                    About
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <h1 className="py-7 max-md:py-4 text-center bg-neutral-100">My Project</h1>
            <div className="w-full h-[80vh] max-xl:h-[65vh] max-lg:h-[55vh] max-md:h-[40vh] max-sm:h-[34vh] py-5 pb-10 flex gap-5 overflow-scroll">
                <img src={Web_H1} className="h-full" />
                <img src={Web_H3} className="h-full" />
                <img src={Web_H4} className="h-full" />
            </div> */}
        </div>
    )
}