import {useState, useEffect} from "react"
import useSnack from "../hooks/useSnack";
import { formatearDinero } from "../helpers"

const ModalProducto = () => {

    // llamo al hook
    const { producto, handleClickModal, handleAgregarPedido, pedido } = useSnack();
    const [cantidad, setCandidad] = useState(1);
    const [edicion, setEdicion] = useState(false);

    // averigua la cantidad del articulo seleccionado y lo mantiene
    useEffect(()=> {
       if(pedido.some( pedidoState => pedidoState.id === producto.id )){
            const productoEdicion = pedido.filter( pedidoState => pedidoState.id === producto.id)[0]

            setCandidad(productoEdicion.cantidad)
            setEdicion(true)
       }
    }, [pedido])


    return (
        <div className="md:flex gap-10 max-w-3xl mx-auto p-5 bg-white rounded-lg shadow-lg">
            
            {/* imagen del producto en el modal */}
            <div className="md:w-1/3">
                <img 
                    alt={`Imagen producto ${producto.nombre}`}
                    src={`/img/${producto.imagen}.jpg`}
                    className="w-full h-auto max-h-50 object-cover"
                />

            </div>


            {/* cerrar boton del modal */}
            <div className="md:w-2/3">
                <div className="flex justify-end">
                    <button onClick={handleClickModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                         <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                    </button>
                </div>


                {/* informacion del producto en el modal */}
                <h1 className="text-2xl font-bold mt-5">
                    {producto.nombre}
                </h1>
                <p className="mt-5 font-black text-5xl text-amber-500">
                    { formatearDinero(producto.precio) }
                </p>



                {/* seccion de cantidad de producto */}
                <div className="flex gap-4 mt-5">

                    {/* boton de decrementar */}
                    <button
                        type="button"
                        onClick={()=> {
                            // validacion
                            if (cantidad <= 1) return
                            setCandidad(cantidad - 1);
                        }}
                        >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>

                    <p className="text-3xl">
                        {cantidad}
                    </p>

                    {/* boton de incrementar */}
                    <button
                        type="button"
                        onClick={()=> {
                            // validacion
                            if (cantidad >= 5) return
                            setCandidad(cantidad + 1);
                        }}
                        >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>

                </div>



                <button
                    type="button"
                    className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 mt-5 text-white font-bold uppercase rounded"
                    onClick={() => {
                        handleAgregarPedido({...producto, cantidad})
                        handleClickModal()
                    }}

                >
                    {edicion ? 'Guardar Cambios' : 'Añadir al Pedido'}
                </button>

            </div>

        </div>
    );
}

export default ModalProducto;
