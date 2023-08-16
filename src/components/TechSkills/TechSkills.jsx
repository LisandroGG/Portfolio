import react from '../../img/react.png'
import js from '../../img/js.png'
import css from '../../img/css.png'
import html from '../../img/html.png'
import redux from '../../img/redux.png'
import tailwind from '../../img/tailwind.png'
import vite from '../../img/vite.png'
import sequelize from '../../img/sequelize.png'


const TechSkills = () => {
    return(
        <div className="grid grid-cols-2 p-10 ">
            <div className="grid grid-rows-4 p-10 m-6">
                <span className="text-5xl font-bold text-sky-400 underline text-left">Techs skills</span>
                <span className="font-bold text-left">Todas estas tecnologias, exceptuando algunas, las aprendi en el bootcamp de Henry. <br />Donde ademas de aprenderlas, tuve projectos en los cuales pude aprendir Git-flow, saber como se maneja de forma correcta git, una buena comunicación con mi equipo, aportar ideas, tener reuniones diarias y una flexibilidad de horarios.</span>
            </div>
            <div className="grid grid-cols-4 gap-4 p-10"> 
                <img src={react} className='w-40 hover:(transition-all border-8 border-sky-400 rounded-full shadow-2xl shadow-sky-500)'></img>
                <img src={js} className='rounded-full w-40 hover:(transition-all border-8 border-yellow-200 shadow-2xl shadow-yellow-300)'></img>
                <img src={html} className='w-40 hover:(transition-all border-8 border-orange-500 rounded-full shadow-2xl shadow-orange-600)'></img>
                <img src={css} className='w-40 hover:(transition-all border-8 border-blue-600 rounded-full shadow-2xl shadow-blue-700)'></img>
                <img src={redux} className='w-40 hover:(transition-all border-8 border-violet-600 rounded-full shadow-2xl shadow-violet-700)'></img>
                <img src={tailwind} className='w-40 hover:(transition-all border-8 border-sky-300 rounded-full shadow-2xl shadow-sky-400)'></img>
                <img src={vite} className='w-40 hover:(transition-all border-8 border-violet-400 rounded-full shadow-2xl shadow-violet-500)'></img>
                <img src={sequelize} className='w-40 hover:(transition-all border-8 border-cyan-500 rounded-full shadow-2xl shadow-cyan-600)'></img>
            </div>
        </div>
    )
}

export default TechSkills