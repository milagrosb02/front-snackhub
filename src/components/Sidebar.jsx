import useSnack from "../hooks/useSnack";
import Categoria from "./Categoria"


const Sidebar = () => {

    const { categorias } = useSnack()

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
                    // siempre que se itera una coleccion se necesita una key
                    key={categoria.id}
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
