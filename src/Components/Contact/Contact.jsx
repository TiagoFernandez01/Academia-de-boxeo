import { IoLocationOutline } from "react-icons/io5";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io";
import Map from "./map";


const Contact = () => {

    return (
        <>

            <div className="my-8 mx-4">
                <p className=" text-gray-400 text-sm font-light">Encontranos en</p>
                <h3 className="text-white text-3xl font-bold">Contacto</h3>

                <p className="font-light text-gray-300">Podes venir a visitarnos, ver nuestro gimnasio y entrenamientos o
                    podes contactarnos mediantes estos medios por cualquier duda que tengas. </p>

                <img src="" alt="" />
            </div>

            <div>
                <h3 className="text-red-800 text-2xl font-semibold my-8 mx-4">Dirección</h3>

                <div className=" border-4 rounded-lg mx-4 bg-white">
                    <IoLocationOutline className="text-5xl my-4 mx-2" />
                    <p className="text-xl font-semibold my-4 mx-4">Buenos Aires, Lanús <br />
                        Eva Perón 1619</p>
                </div>
            </div>

            <div>
                <h3 className="text-red-800 text-2xl font-semibold my-8 mx-4">Online</h3>

                <div className="border-4 bg-white rounded-lg mx-4">
                <IoPhonePortraitOutline className="text-5xl my-4 mx-2"/>
                    <p className="text-xl font-semibold my-4 mx-4">+54 11 3431 8539</p>
                    <IoMail className="text-5xl my-4 mx-2"/>
                    <p className="text-xl font-semibold my-4 mx-4">academiadeboxeo@gmail.com</p>
                    <IoLogoInstagram className="text-5xl my-4 mx-2"/>
                    <p className="text-xl font-semibold my-4 mx-4">academiadeboxeo</p>
                </div>
            </div>

            <div>
            <h3 className="text-red-800 text-2xl font-semibold my-8 mx-4">Ubicación</h3>

            <Map/>
            </div>



        </>
    )
}

export default Contact;