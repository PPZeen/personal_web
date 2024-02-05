import developing from '../../assets/videos/developing.gif'

export default function Clone () {
    return (
        <div className="flex flex-col justify-center items-center h-[70vh]">
            <h3>Clone Project</h3>
            <img src={developing} alt="Developing" className='py-5 w-72 aspect-auto'></img>
            <h1>Developing</h1>
        </div>
    )
}