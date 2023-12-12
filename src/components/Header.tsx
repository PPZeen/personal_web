import Logo from '../assets/Logo.png'

export default function Header() {
    return (
        <div className="sticky top-0 z-20">
            <header className="nav">
                <div className="flex justify-between items-center">
                    <div className="menu">
                        <a href="/" className='h-full'>
                            <img src={Logo} className="img-in-frame"></img>
                        </a>
                        <a href='/portfolio' className="font-kanit">Portfolio</a>
                        <a href='/about' className="font-kanit">About</a>
                    </div>

                    <div className="flex gap-2 text-xl">
                        <a href="https://github.com/PPZeen" target="_blank">
                            <i className="uil uil-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/nutthavat-phomak-87923a230/" target="_blank">
                            <i className="uil uil-linkedin"></i>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100005197095043" target="_blank">
                            <i className="uil uil-facebook"></i>
                        </a>
                        <a href="https://www.instagram.com/ntvpmd_/" target="_blank">
                            <i className="uil uil-instagram"></i>
                        </a>
                    </div>
                </div>
            </header>
        </div>
    )
}