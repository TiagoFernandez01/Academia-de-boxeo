import React from "react";
import { Link } from "react-router-dom";
import box1 from "../../assets/images/box1.webp"
import "../../styles/styles.css"
import WorkOuts from "../workOuts/WorkOuts";
import History from "../abaoutUs/history";
import WhyUs from "../whyUs/WhyUs";
import Contact from "../Contact/Contact";
import Accordion from "../Q&A/Accordion.jsx";


const Home = () => {

    return (
        <>

            <div className="my-4 flex flex-col items-center">
                <h1 className="text-white text-4xl font-bebas md:text-8xl md:mt-14 mb-10">Academia de boxeo</h1>
            </div>


            <div className="flex flex-col md:flex-row-reverse items-center justify-center h-screen md:pr-36">
                <div className="md:w-1/2 flex flex-col justify-center items-center">
                    <h3 className=" font-roboto md:text-3xl text-light mx-3 text-gray-300 mt-56 md:mt-0">
                        "En nuestra academia, el boxeo es más que un deporte: es una forma de vida. Mejora tu cuerpo y mente con entrenadores que te guiarán desde el primer día. Aquí, el esfuerzo real lleva a resultados reales."
                    </h3>
                    <Link to='/gallery'>
                        <button className="boton-elegante my-3">Explora</button>
                    </Link>
                </div>

                <div className="md:w-1/2 mt-6 mb-14 flex justify-center">
                    <img src={box1} alt="Boxeo" />
                </div>
            </div>


            <section>
                <WorkOuts />
            </section>

            <section>
                <History />
            </section>

            <section>
                <WhyUs />
            </section>

            <section>
                <Accordion />
            </section>

            <section>
                <Contact />
            </section>

        </>
    )
}

export default Home;