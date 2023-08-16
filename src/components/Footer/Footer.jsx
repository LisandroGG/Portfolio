import 'boxicons'

const Footer = () => {
    return(
        <div className="bg-zinc-900 grid justify-items-center">
            <div className="flex row-span-1 p-2 gap-2">
                <a href='https://github.com/LisandroGG' target='_blank' className='border-4 rounded-full hover:(transition-all bg-orange-700)'><box-icon type='logo' name='github' size='lg' color='#ffffff' border='circle'></box-icon></a>
                <a href='https://www.linkedin.com/in/lisandro-pereyra-18503626a/' target='_blank' className='border-4 rounded-full hover:(transition-all bg-blue-900)'><box-icon name='linkedin-square' type='logo' size='lg' color='#ffffff' border='circle'></box-icon></a>
                <a href='https://www.instagram.com/lisandro_ssj/?hl=es-la' target='_blank' className='border-4 rounded-full hover:(transition-all bg-gradient-to-b from-violet-800  to-yellow-400)'><box-icon name='instagram' type='logo' size='lg' color='#ffffff' border='circle'></box-icon></a>
            </div>
            <div>
                <p className="text-white font-bold p-2">Copyright © 2023. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer