const Nav = () => {

    const icon = '</>'

    return(
        
        <div className="flex justify-between text-white bg-zinc-900 border-b-4 border-sky-600 shadow-md shadow-sky-500 xl:(p-6 text-xl fixed w-full) md:(p-6 text-xl) sm:(p-3)">
            <div className="flex">
                <a href="#home">{icon}</a>
                <ul className="flex text-white">
                    <li className="mx-5 hover:(text-sky-600)"><a href='#about'>Sobre mi</a></li>
                    <li className="mx-5 hover:(text-sky-600)"><a href='#techs'>Habilidades</a></li>
                    <li className="mx-5 hover:(text-sky-600)"><a href="#project">Projectos</a></li>
                    <li className="mx-5 hover:(text-sky-600)"><a href="#contact">Contacto</a></li>
                </ul>
            </div>
                
            <div>
                <a href='https://docs.google.com/document/d/1mB9tp6fL8DBOf53kFjkyF1fU_pattDWn55k00FQZBPI/edit?usp=sharing' target="_Blank" className='bg-sky-600 rounded-2xl p-2 hover:(bg-sky-700 shadow-md shadow-sky-800) '>Ver currículum</a>
            </div>
        </div>
    )
}

export default Nav