import perfil from "../../assets/images/perfil.png"
import { Link } from "react-router-dom";

const NewFooter = () => {

    return (
        <footer className="bg-transparent rounded-lg shadow dark:bg-gray-900 m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src={perfil} className="h-8" alt="Academia Logo" />
                        <p className="self-center text-2xl font-bebas whitespace-nowrap text-white"> <span className="text-red-700">C</span>olche <s className="text-red-700">T</s>eam</p>
                    </a>

                    <div className="text-white md:mx-8">
                        <p className="text-xl my-6 font-roboto">Nuestros Horarios</p>
                    </div>

                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

                    <div className="text-gray-300">
                        <div className="flex justify-between mb-6">
                            <p className="mr-6 font-roboto">Lunes - Miercoles - Viernes</p>
                            <p className="font-roboto">7:00AM - 9:00PM</p>
                        </div>
                        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                        <div className="flex justify-between mb-6">
                            <p className="font-roboto">Martes - Jueves</p>
                            <p className="font-roboto">8:00AM - 9:00PM</p>
                        </div>

                        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

                        <div className="flex justify-between">
                            <p className="font-roboto">Sabado - Domingo</p>
                            <p className="font-roboto">Cerrado</p>
                        </div>
                    </div>

                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

                    <ul className="flex flex-wrap items-center mb-6 text-smfont-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <Link to='/'>
                                <a className="hover:underline me-4 md:me-6 font-roboto">Inicio</a>
                            </Link>
                        </li>
                        <li>
                            <Link to='/nosotros'>
                                <a className="hover:underline me-4 md:me-6 font-roboto">Nosotros</a>
                            </Link>
                        </li>
                        <li>
                            <Link to='/gallery'>
                                <a className="hover:underline me-4 md:me-6 font-roboto">Galeria</a>
                            </Link>
                        </li>
                        <li>
                            <Link to='/exhibiciones'>
                                <a className="hover:underline font-roboto">Exhibiciones</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="" className="hover:underline">Tiago Fernandez™</a>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}

export default NewFooter;