import developing from '../../assets/videos/developing.gif'

export default function Clothing4U () {
    return (
        <div className="flex flex-col justify-center items-center h-[70vh]">
            <h3>Clothing Project</h3>
            <h3>You can see <a href="https://clothing4u.vercel.app/" target="_blank" className="underline underline-offset-4">this website</a></h3>
            <img src={developing} alt="Developing" className='py-5 w-72 aspect-auto'></img>
            <h1>Developing</h1>
        </div>
    )
}