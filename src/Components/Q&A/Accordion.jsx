import { useState } from "react";

const Accordion = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (


    <>

      <div className="my-8 mx-4">
        <p className=" text-gray-400 text-sm font-light">Dudas</p>
        <h3 className="text-white text-3xl font-bold">Preguntas frecuentes</h3>
      </div>

      <div id="accordion-collapse" data-accordion="collapse" className="mt-8">
        {/* Sección 1 */}
        <h2 id="accordion-collapse-heading-1">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-white border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
            onClick={() => toggleSection(1)}
            aria-expanded={openSection === 1}
            aria-controls="accordion-collapse-body-1"
          >
            <span>¿Necesito experiencia previa?</span>
            <svg
              data-accordion-icon
              className={`w-3 h-3 shrink-0 transition-transform duration-300 ${openSection === 1 ? "rotate-180" : ""}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5L5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-1"
          className={`${openSection === 1 ? "" : "hidden"}`}
          aria-labelledby="accordion-collapse-heading-1"
        >
          <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <p className="mb-2 text-gray-400 dark:text-gray-400">
              No, no necesitas experiencia previa para comenzar en nuestra academia. Ofrecemos entrenamientos tanto para principiantes como para boxeadores amateur. Si nunca has practicado boxeo, nuestros entrenadores te guiarán paso a paso desde lo más básico.
            </p>
            <p className="text-gray-400 dark:text-gray-400">
              Para aquellos que ya tienen algo de experiencia, también ofrecemos entrenamientos más avanzados para continuar desarrollando tus habilidades. ¡Lo importante es que tengas ganas de aprender y mejorar!
            </p>
          </div>
        </div>

        {/* Sección 2 */}
        <h2 id="accordion-collapse-heading-2">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-white border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
            onClick={() => toggleSection(2)}
            aria-expanded={openSection === 2}
            aria-controls="accordion-collapse-body-2"
          >
            <span>¿Que equipo necesito para comenzar?</span>
            <svg
              data-accordion-icon
              className={`w-3 h-3 shrink-0 transition-transform duration-300 ${openSection === 2 ? "rotate-180" : ""}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5L5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-2"
          className={`${openSection === 2 ? "" : "hidden"}`}
          aria-labelledby="accordion-collapse-heading-2"
        >
          <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
            <p className="mb-2 text-gray-400 dark:text-gray-400">
              Para las clases de boxeo, se requiere el uso de guantes, vendas y protector bucal. Sin embargo, no te preocupes si aún no tienes estos elementos, ya que contamos con equipo disponible para los principiantes. Aun así, es recomendable y mucho más cómodo que cada boxeador cuente con su propio equipo personal.
            </p>
            <p className="text-gray-400 dark:text-gray-400">
              Además, ofrecemos estos mismo a la venta directamente en nuestra academia, para que puedas adquirirlos cuando lo necesites.
            </p>
          </div>
        </div>

        {/* Sección 3 */}
        <h2 id="accordion-collapse-heading-3">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-white border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
            onClick={() => toggleSection(3)}
            aria-expanded={openSection === 3}
            aria-controls="accordion-collapse-body-3"
          >
            <span>¿Hay limites de edad?</span>
            <svg
              data-accordion-icon
              className={`w-3 h-3 shrink-0 transition-transform duration-300 ${openSection === 3 ? "rotate-180" : ""}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5L5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-3"
          className={`${openSection === 3 ? "" : "hidden"}`}
          aria-labelledby="accordion-collapse-heading-3"
        >
          <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
            <p className="mb-2 text-gray-400 dark:text-gray-400">
              Aceptamos personas de cualquier edad, desde los más pequeños hasta adultos mayores. Nos aseguramos de adaptar el entrenamiento a las necesidades y capacidades de cada grupo, siempre priorizando su bienestar y seguridad.
            </p>
            <p className="mb-2 text-gray-400 dark:text-gray-400">
              Contamos con entrenadores capacitados para manejar todo tipo de edades, brindando atención personalizada para garantizar un entrenamiento adecuado y efectivo para cada etapa de la vida.
            </p>
          </div>
        </div>
      </div>
    </>

  );
};

export default Accordion;
