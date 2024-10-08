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
                    <h3 className="text-4xl font-semibold text-red-600"> Proximos combates</h3>
                </div>

                <div className=" background-gradiant flex flex-col items-center border my-6 text-white mx-6">

                    <div className="flex flex-col text-2xl items-center">
                        <div className="flex items-center">
                            <img className="h-10 w-10" src={perfil} alt="" />
                            <p className="my-4">Peleador 1</p>
                        </div>
                                <p>VS</p>
                        <div className="flex items-center">
                            <img className="h-10 w-10" src={quaglia} alt="" />
                            <p className="my-4"> Peleador 2</p>
                        </div>

                    </div>

                    <div className="my-8">
                        <p>Peso: Mediano</p>
                    </div>
                </div>

                <div className=" background-gradiant flex flex-col items-center border my-6 text-white mx-6">

                    <div className="flex flex-col text-2xl items-center">
                        <div className="flex items-center">
                            <img className="h-10 w-10" src={perfil} alt="" />
                            <p className="my-4">Peleador 3</p>
                        </div>
                                <p>VS</p>
                        <div className="flex items-center">
                            <img className="h-10 w-10" src={quaglia} alt="" />
                            <p className="my-4"> Peleador 4</p>
                        </div>

                    </div>

                    <div className="my-8">
                        <p>Peso: Gallo</p>
                    </div>
                </div>

                <div className=" background-gradiant flex flex-col items-center border my-6 text-white mx-6">

                    <div className="flex flex-col text-2xl items-center">
                        <div className="flex items-center">
                            <img className="h-10 w-10" src={perfil} alt="" />
                            <p className="my-4">Peleador 5</p>
                        </div>
                                <p>VS</p>
                        <div className="flex items-center">
                            <img className="h-10 w-10" src={quaglia} alt="" />
                            <p className="my-4"> Peleador 6</p>
                        </div>

                    </div>

                    <div className="my-8">
                        <p>Peso: Super Mediano</p>
                    </div>
                </div>


            </div>



        </>
    )
}

export default Exhibitions;

