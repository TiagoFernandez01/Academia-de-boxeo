import perfil from "../../assets/images/perfil.png"
import "../../styles/styles.css"

const AbaoutUs = () => {
    return (
        <>

            <div className="mt-32 mx-4 md:ml-36 md:mt-36 md:mb-0">
                <p className="text-gray-400 text-sm font-roboto md:text-lg">Nuestra historia</p>
                <h3 className="text-white text-3xl font-bebas md:text-4xl mb-6">Evoluci<a className="text-red-700">ó</a>n como academia</h3>
            </div>

            <div className="flex flex-col md:flex-row-reverse justify-center items-center h-screen md:pr-32">
                <div className="md:w-1/2 flex flex-col justify-center">
                    <div>
                        <p className="font-roboto text-gray-300 mx-4 md:text-3xl">
                            En la academia, nuestra misión nació de la visión de ofrecer un espacio donde personas de todos los niveles puedan transformarse a través del boxeo y el apoyo comunitario. <br />
                            Nos inspiran los logros y la dedicación de nuestros miembros. Desde nuestra fundación en 2015, hemos crecido de un pequeño gimnasio local a un próspero centro de boxeo, comprometidos con ayudar a cada persona a alcanzar sus objetivos de salud y bienestar. Aquí, cada golpe cuenta y cada progreso es celebrado.
                        </p>
                    </div>

                    <div className="mx-4 my-4 mt-6">
                        <p className="text-white text-base font-roboto md:text-lg">Fundada <a className="text-red-700">por</a></p>
                        <p className="text-gray-400 text-sm font-roboto md:text-xl">Diego German Colche.</p>
                    </div>
                </div>

                <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
                    <img className="w-80 h-80 rounded-lg" src={perfil} alt="Perfil de Diego German Colche" />
                </div>
            </div>



        </>
    )
}

export default AbaoutUs;