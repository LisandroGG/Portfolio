const Contact = () => {
    return(
        <div id='contact' className="grid justify-items-center">
            <div className="">
            <p className="font-bold text-sky-400 underline text-center py-4 xl:(text-4xl) md:(text-3xl) sm:(text-2xl)">Contact Me</p>
            <p className="font-bold pb-10 md:text-lg sm:(text-sm pb-5) w-100">Actualmente estoy buscando empleo, me considero una persona activa y que puedo dar lo mejor de mi para lograr soluciones eficaces, por lo que dejo mis medios de contacto por si gustas contactarme para empleo o para conocerme.</p>
            <div className="flex justify-center pb-4">
                <button className="text-white bg-sky-500 w-18 border-4 rounded border-sky-600 text-xl hover:(shadow-lg shadow-sky-700)"><a href='mailto:lisandro.pereyra123456@gmail.com'>EMAIL</a></button>
            </div>
            </div>
        </div>
    )
}

export default Contact