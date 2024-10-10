// arriba se definen funciones y la logica
import { formatearDinero } from "../helpers";
import useSnack from "../hooks/useSnack";

function Producto({producto}) {

    const { handleClickModal, handleSetProducto } = useSnack();
    
    const { nombre, imagen, precio } = producto

    return (

        // abajo para mostrar informacion
        <div className="border p-3 shadow bg-white">
            <img 
                alt={`imagen ${nombre}`}
                className="w-full"
                src={`/img/${imagen}.jpg`}
            />


            {/* nombre de los productos */}
            <div className="p-5">

                <h3 className="text-2xl font-bold">{nombre}</h3>
                <p className="mt-5 font-black text-4xl text-amber-500">
                    {formatearDinero(precio)}
                </p>


                {/* boton para agregar el pedido */}
                <button
                    type="button"
                    className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold"
                    onClick={() => {
                        handleClickModal();
                        handleSetProducto(producto);
                    }}
                > Agregar
                </button>

            </div>
            
        </div>
    );
}

export default Producto;