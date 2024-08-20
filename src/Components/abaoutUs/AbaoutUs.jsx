import perfil from "../../assets/images/perfil.png"

const AbaoutUs = () => {
    return (
        <>
            <div className="element flex flex-col justify-center items-center">

                <div className="my-8 mx-4">
                    <p className=" text-gray-400 text-sm font-light">Nuestra historia </p>
                    <h3 className="text-white text-3xl font-bold">Evolución como academia</h3>
                </div>

                <div className="element">
                    <div>

                        <p className="font-light text-gray-300 mx-4 ">En la academia, nuestra misión nació de la visión de ofrecer un espacio donde personas de todos los niveles puedan transformarse a través del boxeo y el apoyo comunitario. <br /> Nos inspiran los logros y la dedicación de nuestros miembros.
                            Desde nuestra fundación en 2015, hemos crecido de un pequeño gimnasio local a un próspero centro de boxeo, comprometidos con ayudar a cada persona a alcanzar sus objetivos de salud y bienestar. Aquí, cada golpe cuenta y cada progreso es celebrado.</p>
                    </div>

                    <div className="mx-4 my-4 ">
                        <p className=" text-white text-base font-sembold">Fondada por </p>
                        <p className="text-gray-400 text-sm font-light">Diego German Colche.</p>
                    </div>
                </div>
                <div className=" w-80 h-80">
                    <img className= "rounded-lg" src={perfil} alt="" />
                </div>
            </div>


        </>
    )
}

export default AbaoutUs;