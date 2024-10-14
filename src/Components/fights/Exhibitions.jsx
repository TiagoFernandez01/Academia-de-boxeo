import ImageSlider from "./ImageSlider";
import Image1 from "../../assets/images/image1.webp"
import Image2 from "../../assets/images/image2.webp"
import Image3 from "../../assets/images/image3.webp"
import perfil from "../../assets/images/perfil.png"
import quaglia from "../../assets/images/quaglia.jpg"
import "../../styles/styles.css"

const images = [
    Image1, Image2, Image3
]


const Exhibitions = () => {

    return (

        <>
            <ImageSlider images={images} />
            <div className="">
                <div className=" items-center">
                    <h3 className="text-4xl font-bebas text-red-600 md:ml-36"> Proximos combates</h3>
                </div>

                <div className="mx-auto max-w-7xl flex flex-col md:flex-row md:space-x-4 font-roboto">
                    {/* Pelea 1 */}
                    <div className="background-gradiant flex flex-col items-center border my-6 text-white  rounded-lg md:flex-1">
                        <div className="flex flex-col text-2xl items-center">
                            <div className="flex items-center">
                                <img className="h-10 w-10" src={perfil} alt="Peleador 1" />
                                <p className="my-4 font-roboto">Peleador 1</p>
                            </div>
                            <p>VS</p>
                            <div className="flex items-center">
                                <img className="h-10 w-10" src={quaglia} alt="Peleador 2" />
                                <p className="my-4 font-roboto">Peleador 2</p>
                            </div>
                        </div>
                        <div className="my-8">
                            <p>Peso: Mediano</p>
                        </div>
                    </div>

                    {/* Pelea 2 */}
                    <div className="background-gradiant flex flex-col items-center border my-6 text-white rounded-lg md:flex-1">
                        <div className="flex flex-col text-2xl items-center">
                            <div className="flex items-center">
                                <img className="h-10 w-10" src={perfil} alt="Peleador 3" />
                                <p className="my-4 font-roboto">Peleador 3</p>
                            </div>
                            <p>VS</p>
                            <div className="flex items-center">
                                <img className="h-10 w-10" src={quaglia} alt="Peleador 4 font-roboto" />
                                <p className="my-4 font-roboto">Peleador 4</p>
                            </div>
                        </div>
                        <div className="my-8">
                            <p>Peso: Gallo</p>
                        </div>
                    </div>

                    {/* Pelea 3 */}
                    <div className="background-gradiant flex flex-col items-center border my-6 text-white rounded-lg md:flex-1">
                        <div className="flex flex-col text-2xl items-center">
                            <div className="flex items-center">
                                <img className="h-10 w-10" src={perfil} alt="Peleador 5" />
                                <p className="my-4 font-roboto">Peleador 5</p>
                            </div>
                            <p>VS</p>
                            <div className="flex items-center">
                                <img className="h-10 w-10" src={quaglia} alt="Peleador 6" />
                                <p className="my-4 font-roboto">Peleador 6</p>
                            </div>
                        </div>
                        <div className="my-8">
                            <p>Peso: Super Mediano</p>
                        </div>
                    </div>
                </div>



            </div>



        </>
    )
}

export default Exhibitions;

