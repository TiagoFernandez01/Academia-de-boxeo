import dumbell from "../../assets/images/dumbell.svg"
import stopwatch from "../../assets/images/stopwatch.svg"
import runing from "../../assets/images/runing.svg"
import locker from "../../assets/images/locker.svg"
import wifi from "../../assets/images/wifi.svg"
import work from "../../assets/images/private.svg"
import dollar from "../../assets/images/dollar.svg"
import ring from "../../assets/images/ring.svg"
import diego from "../../assets/images/diego.png"
 import mari from "../../assets/images/mari.png"

const AboutUs = () => {

    return (
        <>

            <div className="flex flex-col justify-center items-center">
                <h3 className="text-white text-5xl font-bold mt-8">Nosotros</h3>
                <img className="m-8" src="https://images.pexels.com/photos/6739946/pexels-photo-6739946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <h4 className="text-white text-xl font-semibold my-8">Una Historia de Fuerza y Dedicaión</h4>
                <p className=" text-gray-400 mx-4"> Fundada en 2015, la academia nació de la pasión por el boxeo y el deseo de crear una comunidad que apoye a personas de todos los niveles. Lo que comenzó como un pequeño gimnasio local ha crecido hasta convertirse en un centro de boxeo de referencia.
                    <br></br>Nuestro compromiso con la excelencia y el progreso de nuestros miembros ha sido siempre el motor que impulsa todo lo que hacemos.</p>

            </div>

            <div className="flex flex-col my-16">
                <div className="flex justify-between items-center border border-gray-600 px-4 py-2 mx-4">
                    <img className=" h-14 w-14" src={dumbell} alt="" />
                    <p className="text-white"> Trabajos de fuerza</p>
                </div>
                <div className="flex justify-between items-center border border-gray-600 px-4 py-2 mx-4">
                    <p className="text-white"> Trabajos de reistencia</p>
                    <img className=" h-14 w-14" src={stopwatch} alt="" />
                </div>
                <div className="flex justify-between items-center border border-gray-600 px-4 py-2 mx-4">
                    <img className=" h-14 w-14" src={runing} alt="" />
                    <p className="text-white"> Trabajos de velocidad</p>
                </div>
            </div>

            {/* Instalaciones de la academia */}

            <div className="my-8 mx-4">
                <p className=" text-gray-400 text-sm semi-bold">Servicios</p>
                <h3 className="text-white text-3xl font-bold">Instalaciones</h3>
            </div>

            <div className="flex flex-col justify-center items-center border p-8 my-6 border-gray-600 hover:border-white mx-4 gap-4">
                <img className="h-24 w-24" src={locker} alt="" />
                <h6 className="text-white font-semibold text-4xl">Lockers</h6>
                <p className="text-gray-400 text-lg">Para guardar tu equipamiento y mantener seguro tus pertenencias.</p>
            </div>

            <div className="flex flex-col justify-center items-center border p-8 my-6 border-gray-600 hover:border-white mx-4 gap-4">
                <img className="h-24 w-24" src={wifi} alt="" />
                <h6 className="text-white font-semibold text-4xl">Wi-Fi</h6>
                <p className="text-gray-400 text-lg">Manténgase perfectamente conectado con nuestro servicio <br /> Wi-Fi gratuito.</p>
            </div>

            <div className="flex flex-col justify-center items-center border p-8 my-6 border-gray-600 hover:border-white mx-4 gap-4">
                <img className="h-24 w-24" src={work} alt="" />
                <h6 className="text-white font-semibold text-4xl">Clases</h6>
                <p className="text-gray-400 text-lg">Trabajos y clases de boxeo tanto recreativas como amateurs.</p>
            </div>

            <div className="flex flex-col justify-center items-center border p-8 my-6 border-gray-600 hover:border-white mx-4 gap-4">
                <img className="h-24 w-24" src={dollar} alt="" />
                <h6 className="text-white font-semibold text-4xl">Tienda</h6>
                <p className="text-gray-400 text-lg">Articulos de boxeo y bebidas para el entrenamiento.</p>
            </div>

            <div className="flex flex-col justify-center items-center border p-8 my-6 border-gray-600 hover:border-white mx-4 gap-4">
                <img className="h-24 w-24" src={ring} alt="" />
                <h6 className="text-white font-semibold text-4xl">Equipamiento</h6>
                <p className="text-gray-400 text-lg">Equipamiento de boxeo de primera calidad.</p>
            </div>


            <div className="flex flex-col justify-center items-center mx-4 gap-4">
                <img src="https://images.pexels.com/photos/4761785/pexels-photo-4761785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <h4 className="text-white text-xl font-semibold my-8">Nuestra Visión y Misión.</h4>
                <p className="text-gray-400 mx-4" >En Knockout Academy, nuestra misión es empoderar a las
                    personas para que alcancen sus objetivos a través del boxeo,
                    mejorando su condición física y mental. Visualizamos una comunidad
                    donde todos se sientan bienvenidos, apoyados y motivados para superarse día a día </p>

                <p className="text-gray-400 mx-4"> Con nuestras instalaciones de primera y una variedad de
                    programas de entrenamiento, buscamos crear un ambiente que fomente el crecimiento personal
                    y el bienestar duradero.</p>
            </div>

            <div>
                <div className="my-8 mx-4">
                    <p className=" text-gray-400 text-sm font-light">Instructores </p>
                    <h3 className="text-white text-3xl font-bold">Profesores</h3>
                </div>

                <div className="flex flex-col">
                    <div className="text-white mx-4 transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300">
                        <img src={diego} alt="" />
                        <h5 className="text-xl mt-3 mb-2">Diego German Colche</h5>
                        <p className="text-gray-400 mb-20">Director Tecnico de Boxeo</p>
                    </div>

                    <div className="text-white mx-4 transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300">
                        <img src={mari} alt="" />
                        <h5 className="text-xl mt-3 mb-2">Nombre comlpleto</h5>
                        <p className="text-gray-400">Título/Profesión</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AboutUs;