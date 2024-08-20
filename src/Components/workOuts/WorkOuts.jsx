import bags from "../../assets/images/bags.webp"
import focos from "../../assets/images/focos.webp"
import medicineBall from "../../assets/images/medicineBall.webp"
import plancha from "../../assets/images/plancha.webp"
import "../../styles/styles.css"

const WorkOuts = () => {

    return (
        <>
            <div className="my-8 mx-4">
                <p className=" text-gray-400 text-sm font-light">Sacamos lo mejor de vos </p>
                <h3 className="text-white text-3xl font-bold">Entrena <a className="text-red-800">y</a> Mejora</h3>
            </div>




            <div className="element grid grid-cols-2 md:grid-cols-4 gap-4 md:mx-36 mx-2 mt-4 mb-14">
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={bags} alt="" />
                    <p className="text-white font-medium">Potencia</p>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={focos} alt="" />
                    <p className="text-white font-medium">Coordinación</p>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={medicineBall} alt="" />
                    <p className="text-white font-medium">Fuerza</p>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={plancha} alt="" />
                    <p className="text-white font-medium">Resistencia</p>
                </div>
              
            </div>


        </>
    )
}

export default WorkOuts;