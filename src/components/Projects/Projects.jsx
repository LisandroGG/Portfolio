const Projects = () => {
    let a = 0
    return(
        <div id='project' className="p-20 m-6">
            <div className="text-center">
                <span className="text-5xl font-bold text-sky-400 underline pb-10">Projectos</span>
            </div>
            <div className="grid grid-cols-3 mt-10 place-items-center gap-4">
                <div className="bg-sky-500 p-4 rounded-2xl w-100 font-bold text-center">
                    <h1 className="text-xl">The literary corner</h1>
                    <h1 className="text-sm">Trabajo grupal</h1>
                    <div>
                        <a href="https://github.com/lordbattle/PF-Henry-Bookstore" target="_blank"><box-icon type='logo' name='github' size='sm' color='#ffffff'></box-icon></a>
                        <a href="https://pf-henry-bookstore.vercel.app/" target="_blank"><box-icon name='link-alt' size='sm' color='#ffffff'></box-icon></a>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Projects