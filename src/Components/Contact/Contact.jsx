import { IoLocationOutline } from "react-icons/io5";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io";
import Map from "./map";


const Contact = () => {

    return (
        <>
            <div className="mt-36 mx-4 md:ml-36 md:mt-36">
                <p className=" text-gray-400 text-sm font-roboto md:text-lg">Encontranos en</p>
                <h3 className="text-white text-3xl font-bebas md:text-4xl md:mb-4"> <a className="text-red-700">C</a>ontacto</h3>
                <p className="font-roboto text-gray-300 md:text-2xl">Podes venir a visitarnos, ver nuestro gimnasio y entrenamientos o
                    podes contactarnos mediantes estos medios por cualquier duda que tengas. </p>
            </div>

            <div className="mx-auto max-w-3xl">
                {/* Dirección */}
                <div>
                    <h3 className="text-red-800 text-2xl font-semibold my-8 mx-4">Dirección</h3>

                    <div className="border-4 rounded-lg mx-4 bg-white flex items-center">
                        <IoLocationOutline className="text-5xl my-4 mx-2" />
                        <p className="text-xl font-semibold my-4 mx-4">
                            Buenos Aires, Lanús <br />
                            Eva Perón 1619
                        </p>
                    </div>
                </div>

                {/* Online */}
                <div>
                    <h3 className="text-red-800 text-2xl font-semibold my-8 mx-4">Online</h3>

                    <div className="border-4 bg-white rounded-lg mx-4 flex flex-col items-start">
                        <div className="flex items-center">
                            <IoPhonePortraitOutline className="text-5xl my-4 mx-2" />
                            <p className="text-xl font-semibold my-4 mx-4">+54 11 3431 8539</p>
                        </div>

                        <div className="flex items-center">
                            <IoMail className="text-5xl my-4 mx-2" />
                            <p className="text-xl font-semibold my-4 mx-4">academiadeboxeo@gmail.com</p>
                        </div>

                        <div className="flex items-center">
                            <IoLogoInstagram className="text-5xl my-4 mx-2" />
                            <p className="text-xl font-semibold my-4 mx-4">academiadeboxeo</p>
                        </div>
                    </div>
                </div>
            </div>


            <div>
                <h3 className="text-red-800 text-2xl font-semibold my-8 mx-4">Ubicación</h3>

                <Map />
            </div>



        </>
    )
}

export default Contact;