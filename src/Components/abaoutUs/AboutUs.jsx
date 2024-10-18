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
                <h3 className="text-white text-5xl md:text-8xl font-bebas mt-8">Nosotros</h3>
                <img className="m-8" src="https://images.pexels.com/photos/6739946/pexels-photo-6739946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <h4 className="text-white text-2xl font-bebas my-8 md:text-5xl text-center">
                    Una Historia de Fuerza y Dedicación
                </h4>
                <p className="text-gray-400 mx-4 md:text-xl text-center md:px-20 font-roboto">
                    Fundada en 2020, la academia nació de la pasión por el boxeo y el deseo de crear una comunidad que apoye a personas de todos los niveles. Lo que comenzó como un pequeño gimnasio local ha crecido hasta convertirse en un centro de boxeo de referencia.
                    Nuestro compromiso con la excelencia y el progreso de nuestros miembros ha sido siempre el motor que impulsa todo lo que hacemos.
                </p>
            </div>

            <div className="flex flex-col my-16 md:px-96">
                <div className="flex justify-between items-center border border-gray-400 px-4 py-2 font-bebas mx-4">
                    <img className=" h-14 w-14" src={dumbell} alt="" />
                    <p className="text-white font-roboto"> Trabajos de fuerza</p>
                </div>
                <div className="flex justify-between items-center border border-gray-400 px-4 py-2 font-bebas mx-4">
                    <p className="text-white font-roboto"> Trabajos de reistencia</p>
                    <img className=" h-14 w-14" src={stopwatch} alt="" />
                </div>
                <div className="flex justify-between items-center border border-gray-400 px-4 py-2 font-bebas mx-4">
                    <img className=" h-14 w-14" src={runing} alt="" />
                    <p className="text-white font-roboto"> Trabajos de velocidad</p>
                </div>
            </div>

            {/* Instalaciones de la academia */}

            <div className="my-8 mx-4 md:ml-36">
                <p className=" text-gray-400 text-sm font-light md:text-lg font-roboto">Servicios</p>
                <h3 className="text-white text-3xl font-bold md:text-4xl mb-6"> <a className="text-red-700">I</a>nstalaciones</h3>
            </div>

            <div className="flex flex-col justify-center items-center border p-8 my-6 border-gray-600 hover:border-white mx-4 gap-4 md:mx-40">
                <img className="h-24 w-24" src={locker} alt="" />
                <h6 className="text-white font-semibold text-4xl">Lockers</h6>
                <p className="text-gray-400 text-lg font-roboto">Para guardar tu equipamiento y mantener seguro tus pertenencias.</p>
            </div>

            <div className="flex flex-col justify-center items-center border p-8 my-6 border-gray-600 hover:border-white mx-4 gap-4 md:mx-40">
                <img className="h-24 w-24" src={wifi} alt="" />
                <h6 className="text-white font-semibold text-4xl">Wi-Fi</h6>
                <p className="text-gray-400 text-lg font-roboto">Manténgase perfectamente conectado con nuestro servicio <br /> Wi-Fi gratuito.</p>
            </div>

            <div className="flex flex-col justify-center items-center border p-8 my-6 border-gray-600 hover:border-white mx-4 gap-4 md:mx-40">
                <img className="h-24 w-24" src={work} alt="" />
                <h6 className="text-white font-semibold text-4xl">Clases</h6>
                <p className="text-gray-400 text-lg font-roboto">Trabajos y clases de boxeo tanto recreativas como amateurs.</p>
            </div>

            <div className="flex flex-col justify-center items-center border p-8 my-6 border-gray-600 hover:border-white mx-4 gap-4 md:mx-40">
                <img className="h-24 w-24" src={dollar} alt="" />
                <h6 className="text-white font-semibold text-4xl">Tienda</h6>
                <p className="text-gray-400 text-lg font-roboto">Artículos de boxeo y bebidas para el entrenamiento.</p>
            </div>

            <div className="flex flex-col justify-center items-center border p-8 my-6 border-gray-600 hover:border-white mx-4 gap-4 md:mx-40">
                <img className="h-24 w-24" src={ring} alt="" />
                <h6 className="text-white font-semibold text-4xl">Equipamiento</h6>
                <p className="text-gray-400 text-lg font-roboto">Equipamiento de boxeo de primera calidad.</p>
            </div>


            <div className="flex flex-col justify-center items-center mx-4 gap-4">
                <img src="https://images.pexels.com/photos/4761785/pexels-photo-4761785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <h4 className="text-white text-2xl font-bebas my-8 md:text-5xl text-center">Nuestra Visión y Misión.</h4>
                <p className="text-gray-400 mx-4 md:text-xl text-center md:px-20 font-roboto" >Nuestra misión es empoderar a las
                    personas para que alcancen sus objetivos a través del boxeo,
                    mejorando su condición física y mental. Visualizamos una comunidad
                    donde todos se sientan bienvenidos, apoyados y motivados para superarse día a día </p>

                <p className="text-gray-400 mx-4 md:text-xl text-center font-roboto md:px-20"> Con nuestras instalaciones de primera y una variedad de
                    programas de entrenamiento, buscamos crear un ambiente que fomente el crecimiento personal
                    y el bienestar duradero.</p>
            </div>

            <div>
                <div className="my-8 mx-4 md:ml-36 md:mt-32">
                    <p className=" text-gray-400 text-sm font-light md:text-lg font-roboto">Instructores </p>
                    <h3 className="text-white text-3xl font-bebas md:text-4xl mb-6"><a className="text-red-700">P</a>rofesores</h3>
                </div>

                <div className="flex flex-col items-center mx-2 font-bebas">
                    <div className="text-white mx-4 transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300">
                        <img className="md:w-[600px] md:h-[600px]" src="https://cdn.prod.website-files.com/669e4cac4669318c84dbd2b3/66a092c06706dfaa3e18a6ed_instructor-main-01-p-800.jpg" alt="" />
                        <h5 className="text-xl mt-3 mb-2 font-bebas">Diego German Colche</h5>
                        <p className="text-gray-400 mb-20 font-roboto">Director Tecnico de Boxeo</p>
                    </div>

                    <div className="text-white mx-4 transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300">
                        <img className="md:w-[600px] md:h-[600px]" src="https://cdn.prod.website-files.com/669e4cac4669318c84dbd2b3/66a094060f40c8024b4ef5b5_instructor-main-03-p-800.jpg" alt="" />
                        <h5 className="text-xl mt-3 mb-2 font-bebas">Nombre comlpleto</h5>
                        <p className="text-gray-400 font-roboto">Título/Profesión</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AboutUs;