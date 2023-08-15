import logo from '../../img/logo.png'

const Nav = () => {
    return(
        
        <div className="p-4 flex justify-between text-xl text-white bg-sky-900">
            <div className="flex">
                <img src={logo} className='w-8'></img>
                <ul className="flex text-white">
                    <li className="mx-5"><a href='#about'>Sobre mi</a></li>
                    <li className="mx-5"><a href='#techs'>Habilidades</a></li>
                    <li className="mx-5"><a href="#project">Projectos</a></li>
                    <li className="mx-5"><a href="#contact">Contacto</a></li>
                </ul>
            </div>
                
            <div>
                <a href='../../docs/cv.pdf' download className='bg-sky-500 rounded-2xl p-2 hover:(bg-sky-600 shadow-md shadow-sky-400)'>Descargar currículum</a>
            </div>
        </div>
    )
}

export default Nav