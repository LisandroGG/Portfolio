const Projects = () => {
    let a = 0
    return(
        <div id='project' className="p-20 m-6">
            <div className="text-center">
                <span className="font-bold text-sky-400 underline pb-10 xl:(text-5xl) md:(text-3xl) sm:(text-2xl)">Projectos</span>
            </div>
            <div className="grid mt-10 place-items-center gap-4 xl:(grid-cols-3) md:(grid-cols-1) sm:(grid-cols-1)">
                <div className="bg-sky-500 p-4 rounded-2xl font-bold text-center w-100">
                    <h1 className="text-xl">The literary corner</h1>
                    <h1 className="text-sm">Trabajo grupal</h1>
                    <div>
                        <a href="https://github.com/lordbattle/PF-Henry-Bookstore" target="_blank"><box-icon type='logo' name='github' size='sm' color='#ffffff'></box-icon></a>
                        <a href="https://pf-henry-bookstore.vercel.app/" target="_blank"><box-icon name='link-alt' size='sm' color='#ffffff'></box-icon></a>
                    </div>
                </div>
                <div className="bg-sky-500 p-4 rounded-2xl font-bold text-center w-100">
                    <h1 className="text-xl">Dolarizate</h1>
                    <h1 className="text-sm">Trabajo individual</h1>
                    <div>
                        <a href="https://github.com/LisandroGG/Dolarizate" target="_blank"><box-icon type='logo' name='github' size='sm' color='#ffffff'></box-icon></a>
                        <a href="https://dolarizate.vercel.app/" target="_blank"><box-icon name='link-alt' size='sm' color='#ffffff'></box-icon></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects