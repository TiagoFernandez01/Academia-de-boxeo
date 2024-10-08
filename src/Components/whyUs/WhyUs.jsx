import gym from "../../assets/images/gym.webp"
import training from "../../assets/images/training.webp"
import coach from "../../assets/images/coach.webp"


const WhyUs = () => {

    return (
        <>
            <div>
                <div className="my-8 mx-4">
                    <h4 className="text-gray-400 text-sm font-light">Brindamos lo mejor. </h4>
                    <h3 className="text-3xl font-bold text-white" >Por que nosotros? </h3>
                </div>


                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-xl px-4">


                    <div className="max-w-sm bg-transparent border transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300 border-red-800 rounded-lg ">

                        <img className="rounded-t-lg" src={training} alt="gym" />

                        <div className="p-5">

                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-red-700">Entrenamientos</h5>

                            <p className="mb-3 font-normal text-gray-300">Ofrecemos entrenamientos intensivos de boxeo que combinan técnica, fuerza y resistencia. Mejora tu condición física y mental con el apoyo de nuestros entrenadores.</p>

                        </div>
                    </div>

                    <div>
                        <div className="max-w-sm bg-transparent transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300 border border-red-800 rounded-lg ">

                            <img className="rounded-t-lg" src={gym} alt="gym" />

                            <div className="p-5">

                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-red-700">Gimnasio</h5>

                                <p className="mb-3 font-normal text-gray-300">Contamos con el mejor equipamiento para entrenamiento de boxeo. Ofrecemos sacos, cuerdas, pesas y todo lo necesario para maximizar tu rendimiento.</p>

                            </div>
                        </div>
                    </div>

                    
                    <div>
                        <div className="max-w-sm bg-transparent transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300 border border-red-800 rounded-lg ">

                            <img className="rounded-t-lg" src={coach} alt="coach" />

                            <div className="p-5">

                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-red-700">Porfesores</h5>

                                <p className="mb-3 font-normal text-gray-300">Profesionales apasionados y con amplia experiencia, comprometidos en ayudarte a mejorar tu técnica, fuerza y disciplina. Cada entrenador adapta el entrenamiento a tu nivel para que alcances tu máximo potencial.</p>

                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}

export default WhyUs;