import bags from "../../assets/images/bags.webp"
import focos from "../../assets/images/focos.webp"
import medicineBall from "../../assets/images/medicineBall.webp"
import plancha from "../../assets/images/plancha.webp"
import "../../styles/styles.css"

const WorkOuts = () => {

    return (
        <>
            <div className="mx-4 md:ml-36 mt-40">
                <p className=" text-gray-400 text-sm font-roboto md:text-lg">Sacamos lo mejor de vos </p>
                <h3 className="text-white text-3xl font-bebas md:text-4xl">Entrena <a className="text-red-800">y</a> Mejora</h3>
            </div>




            <div className=" grid grid-cols-2 md:grid-cols-4 gap-4 md:mx-36 mx-2 mt-4 mb-14 md:text-2xl">
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={bags} alt="" />
                    <p className="text-white font-medium font-roboto">Potencia</p>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={focos} alt="" />
                    <p className="text-white font-medium font-roboto">Coordinación</p>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={medicineBall} alt="" />
                    <p className="text-white font-medium font-roboto">Fuerza</p>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={plancha} alt="" />
                    <p className="text-white font-medium font-roboto">Resistencia</p>
                </div>
              
            </div>


        </>
    )
}

export default WorkOuts;