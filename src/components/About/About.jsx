import lisandro from '../../img/lisandroFoto.png'

const About = () => {
    return(
        <div id='about' className="p-10">
            <div className="grid p-10 m-6">
                <span className="text-5xl font-bold text-sky-400 underline text-left pb-10">About me</span>
                <div className="font-bold grid grid-cols-2">
                    <div>
                        <h1>Hola, soy Lisandro Pereyra, un Desarrolador Full-Stack graduado en henry.</h1>
                        <h1>Aunque me gusta más enfocarme en el front-end porque ademas de funcional, se tienen que ver bonitas las cosas para dar mejor impresion.</h1>
                        <h1>Para que me conozcan un poco, desde pequeño me gustaba todo lo que tenia que ver con crear, imaginar, ser creativo, activo, productor, en si me gustaba todo lo que me dejaba crear cosas y demostrarle a la gente lo que se hacer, terminando mi trayecto de secundaria, decidi anotarme en Henry, donde estudie en el bootcamp de 800 horas teoricas, tambien pude hacer compañeros, y aprender muchas cosas valiosas a lo largo de mi camino en Henry.</h1>
                        <h1>Lo que nos lleva a la actualidad de ahora, que estoy buscando empleo, estoy abiertamente a postulaciones, reuniones, preguntas, a lo que necesiten, por eso los invito a ver mis medios de Contacto</h1>
                    </div>
                    <div className='px-30'>
                            <span className='bg-zinc-900 grid place-items-center rounded-full border-4 p-4 border-sky-500 scale-100 shadow-2xl shadow-sky-500 hover:(transition-all scale-105)'>
                                <img src={lisandro} width='220rem' className='rounded-xl'></img>
                            </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About