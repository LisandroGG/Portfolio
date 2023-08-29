import tenis from '../../img/tenis.png'

const Main = () => {

    return(
        <div id="home" className="xl:(h-220 grid place-items-center p-10) md:(h-180 grid place-items-center)">
            <div className="xl(p-10 m-6) md:(p-5 m-3)">
                <div className="pb-4">
                    <span className="font-mono font-bold text-sky-500 drop-shadow xl:text-7xl md:text-5xl">Lisandro Pereyra</span>
                </div>
                <h1 className="font-mono font-bold pl-2 animate-typing overflow-hidden whitespace-nowrap border-r-4 xl:text-4xl md:text-2xl">Desarrolador web <span className="text-sky-500 underline">Full-stack</span></h1>
                <h1 className='pl-2 font-mono font-bold xl:text-2xl md:text-lg'>Soluciones eficaces y bonitas</h1>
                <div className='flex row-span-1 pt-4 justify-center xl:gap-2 md:gap-0'>
                    <a href='https://github.com/LisandroGG' target='_blank' className='md:scale-75 border-4 rounded-full hover:(transition-all border-orange-700)'><box-icon type='logo' name='github' size='lg' color='#ffffff' border='circle'></box-icon></a>
                    <a href='https://www.linkedin.com/in/lisandro-pereyra-18503626a/' target='_blank' className='md:scale-75 border-4 rounded-full hover:(transition-all border-blue-900)'><box-icon name='linkedin-square' type='logo' size='lg' color='#ffffff' border='circle'></box-icon></a>
                </div>
            </div>
        </div>
    )
}

export default Main