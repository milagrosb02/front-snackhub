import Categoria from "./Categoria"
import { categorias } from "../data/categorias"

const Sidebar = () => {
    return (

        <aside className='md:w-72'>

            <div className='p-4'>
                <img
                    className='w-40'
                    src='img/logo.svg'
                    alt="Imagen logo"
                />
            </div>


             {/* Recorro categorías */}
             <div className="mt-10">
                {categorias.map( categoria => (
                    <Categoria 
                        // izquierda: nombre del prop y derecha: el valor
                        categoria={categoria}
                    />
                ))}
            </div>


            {/* boton de cancelar orden */}
           <div className="my-5 px-5">
                <button
                    type="button"
                    className="text-center bg-red-500 w-full p-3 font-bold text-white truncate"
                >
                    Cancelar Orden
                </button>
            </div> 

        </aside>
    );
}

export default Sidebar;
