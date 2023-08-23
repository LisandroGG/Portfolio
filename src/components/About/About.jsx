import lisandro from '../../img/lisandroFoto.png'

const About = () => {
    return(
        <div id='about' className="p-10">
            <div className="grid p-10 m-6">
                <span className="text-5xl font-bold text-sky-400 underline text-left pb-10">About me</span>
                <div className="font-bold grid grid-cols-2">
                    <div>
                        <h1>Hola! Soy Lisandro y soy Desarrollador Fullstack, graduado en henry, donde he tenido una formacion intensiva de 800 horas teórico y practicas, he podido realizar proyectos reales y vivenciado ambos lados del desarrollo, tanto el Back como el Front aunque disfruto mucho del frontend.</h1>
                        <h1>Desde pequeño he tenido mucha facilidad e interés por todos los ámbitos que me permitieran explorar mi creatividad, la tecnología me ha permitido utilizar mi creatividad al 100%, este gran interés por el mundo de la tecnología y del desarrollo me llevó a sumarme a Henry donde pude aprender no solo a programar, sino a trabajar en equipo, utilizar metodologias agiles, a ser tolerante a la frustracion entre otras habilidades.</h1>
                        <h1>Hoy busco incorporarme a un equipo donde pudiera crecer profesionalmente poniendo a disposición todos mis recursos.</h1>
                        <h1>Si te interesa mi perfil y crees que puedo ser un buen match no dudes en contactarme!</h1>
                    </div>
                    <div className='px-30'>
                            <span className='bg-zinc-900 grid place-items-center rounded-full border-4 p-4 border-sky-500 shadow-2xl shadow-sky-500'>
                                <img src={lisandro} width='220rem' className='rounded-xl'></img>
                            </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About