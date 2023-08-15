import logo from '../../img/logo.png'

const Nav = () => {

    const icon = '</>'

    return(
        
        <div className="p-4 flex justify-between text-xl text-white bg-zinc-900 border-b-4 border-sky-600 shadow-md shadow-sky-500">
            <div className="flex">
                <h1>{icon}</h1>
                <ul className="flex text-white">
                    <li className="mx-5 hover:(text-sky-600)"><a href='#about'>Sobre mi</a></li>
                    <li className="mx-5 hover:(text-sky-600)"><a href='#techs'>Habilidades</a></li>
                    <li className="mx-5 hover:(text-sky-600)"><a href="#project">Projectos</a></li>
                    <li className="mx-5 hover:(text-sky-600)"><a href="#contact">Contacto</a></li>
                </ul>
            </div>
                
            <div>
                <a href='../../docs/cv.pdf' download className='bg-sky-600 rounded-2xl p-2 hover:(bg-sky-700 shadow-md shadow-sky-800)'>Descargar currículum</a>
            </div>
        </div>
    )
}

export default Nav