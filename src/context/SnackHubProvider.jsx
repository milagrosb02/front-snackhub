import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { categorias as categoriasDB } from "../data/categorias";

const SnackHubContext = createContext();

const SnackHubProvider = ({ children }) => {
    const [categorias, setCategorias] = useState(categoriasDB);
    const [categoriaActual, setCategoriaActual] = useState(categorias[0]);

    // modal
    const [modal, setModal] = useState(false);
    const [producto, setProducto] = useState({});

    // resumen
    const [pedido, setPedido] = useState([]);

    // total
    const [total, setTotal] = useState(0);


    // funcion para calcular el total
    useEffect(()=>{
        const nuevoTotal = pedido.reduce((total, producto) => (producto.precio * producto.cantidad) + total, 0)
        setTotal(nuevoTotal)
    }, [pedido])


    // función para cargar categoría
    const handleClickCategoria = (id) => {
        const categoria = categorias.filter((categoria) => categoria.id === id)[0];
        setCategoriaActual(categoria);
    };

    // función del modal
    const handleClickModal = () => {
        setModal(!modal);
    };

    const handleSetProducto = (producto) => {
        setProducto(producto);
    };

    // función de la sección de pedidos
    const handleAgregarPedido = ({ categoria_id, ...producto }) => {
        if (pedido.some((pedidoState) => pedidoState.id === producto.id)) {
            const pedidoActualizado = pedido.map((pedidoState) =>
                pedidoState.id === producto.id ? producto : pedidoState
            );
            setPedido(pedidoActualizado)
            toast.success('Pedido actualizado!')
        } else {
            setPedido([...pedido, producto])
            toast.success('Agregado al Pedido!')
        }
    };


    // funcion para manejar las cantidades
    const handleEditarCantidad = id => {
        const productoActualizar = pedido.filter(producto => producto.id === id)[0]

        // lo coloca en el state
        setProducto(productoActualizar)
        setModal(!modal)
    }


    // funcion para eliminar pedido
    const handleEliminarProductoPedido = id => {
        const pedidoActualizado = pedido.filter(producto => producto.id !== id)
        setPedido(pedidoActualizado)
        toast.success('Pedido eliminado!')
    }


    return (
        // en el value hago disponible states y funciones
        <SnackHubContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria,
                modal,
                handleClickModal,
                producto,
                handleSetProducto,
                pedido,
                handleAgregarPedido,
                handleEditarCantidad,
                handleEliminarProductoPedido,
                total
            }}
        >
            {children}
        </SnackHubContext.Provider>
    );
};

export { SnackHubProvider };

export default SnackHubContext;
