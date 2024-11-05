import { formatearDinero } from "../helpers";
import useSnack from "../hooks/useSnack";
import ResumenProducto from "./ResumenProducto";

const Resumen = () => {

    const {pedido, total} = useSnack();

    return (
        <aside className='w-72 h-screen overflow-y-scroll p-5'>
            <h1 className="text-4xl font-black">
                Mi pedido
            </h1>
            <p className="text-lg my-5">
                Aqui podras ver el resumen y totales de tu pedido
            </p>

            {/* verifica la longitud del array (validacion) */}
            <div className="py-10">
                {pedido.length === 0 ? (
                    <p className="text-center text-2xl">
                        No hay elementos en tu pedido aun
                    </p>
                ) : (
                    pedido.map(producto => (
                        <ResumenProducto 
                            key={producto.id}
                            producto={producto}
                        />
                    ))
                )}
            </div>


            {/* pago del producto */}
            <p className="text-xl mt-10">
                Total: {''}
                {formatearDinero(total)}
            </p>


            {/* boton de enviar info del pedido */}
            <form className="w-full">
                <div className="mt-5">
                    <input 
                        type="submit"
                        className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 rounded uppercase font-bold text-white text-center w-full cursor-pointer"
                        value="Confirmar Pedido"
                    >
                    
                    </input>
                </div>
            </form>

        </aside>
    );
}

export default Resumen;
