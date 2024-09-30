import perfil from "../../assets/images/perfil.png"
const NewFooter = () => {

    return (
        <footer className="bg-transparent rounded-lg shadow dark:bg-gray-900 m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src={perfil} className="h-8" alt="Academia Logo" />
                        <p className="self-center text-2xl font-semibold whitespace-nowrap text-white"> <span className="text-red-800">C</span>olche <s className="text-red-800">T</s>eam</p>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Inicio</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Nosotros</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
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