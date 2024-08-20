import React from "react";
import box1 from "../../assets/images/box1.webp"
import "../../styles/styles.css"
import WorkOuts from "../workOuts/WorkOuts";
import AbaoutUs from "../abaoutUs/AbaoutUs";


const Home = () => {

    return (
        <>
            <div className="flex flex-col md:flex-row items-center justify-center">
                <div className="my-4">
                    <h1 className="text-white text-4xl font-semibold">Academia de boxeo</h1>
                </div>
                <div>
                    <h3 className="my-6 font-mono text-light mx-3 text-gray-300">
                        "En nuestra academia, el boxeo es más que un deporte: es una forma de vida. Mejora tu cuerpo y mente con entrenadores que te guiarán desde el primer día. Aquí, el esfuerzo real lleva a resultados reales."
                    </h3>
                </div>

                <div className="my-3">
                    <button className="boton-elegante">Explora</button>
                </div>
                <div className="mt-6 mb-14">
                    <img src={box1} alt="" />
                </div>
            </div>

            <section>
                <WorkOuts/>
            </section>

            <section>
                <AbaoutUs/>
            </section>
        </>
    )
}

export default Home;