import tenis from '../../img/tenis.png'

const Main = () => {

    return(
        <div id="home" className="h-220 grid place-items-center p-10">
            <div className="p-10 m-6">
                <div className="pb-4">
                    <span className="font-mono text-7xl font-bold text-sky-500 drop-shadow">Lisandro Pereyra</span>
                </div>
                <h1 className="font-mono text-4xl font-bold pl-2 animate-typing overflow-hidden whitespace-nowrap border-r-4">Desarrolador web <span className="text-sky-500 underline">Full-stack</span></h1>
                <h1 className='pl-2 font-mono text-2xl font-bold'>Soluciones eficaces y bonitas</h1>
                <div className='flex row-span-1 pt-4 gap-2 justify-center'>
                    <a href='https://github.com/LisandroGG' target='_blank' className='border-4 rounded-full hover:(transition-all border-orange-700)'><box-icon type='logo' name='github' size='lg' color='#ffffff' border='circle'></box-icon></a>
                    <a href='https://www.linkedin.com/in/lisandro-pereyra-18503626a/' target='_blank' className='border-4 rounded-full hover:(transition-all border-blue-900)'><box-icon name='linkedin-square' type='logo' size='lg' color='#ffffff' border='circle'></box-icon></a>
                </div>
            </div>
        </div>
    )
}

export default Main