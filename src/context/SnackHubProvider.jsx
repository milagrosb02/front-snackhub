import { createContext ,useState } from "react"
import { categorias as categoriasDB } from "../data/categorias"


const SnackHubContext = createContext();

const SnackHubProvider = ({children}) => {

    const [categorias, setCategorias] = useState(categoriasDB);
    const [categoriaActual, setCategoriaActual] = useState(categorias[0]);

    // modal
    const [modal, setModal] = useState(false);
    const [producto, setProducto] = useState({});

    // resumen
    const [pedido, setPedido] = useState([]);


    // funcion para cargar categoria
    const handleClickCategoria = id => {
        const categoria = categorias.filter(categoria => categoria.id === id)[0]

        setCategoriaActual(categoria)
    }


    // funcion del modal
    const handleClickModal = () => {
        setModal(!modal);
    }


    const handleSetProducto = producto => {
        setProducto(producto)
    }


    // funcion de la seccion de pedidos
    const handleAgregarPedido = producto => {
        console.log(producto)
    }


    return (

        // en el value hago disponible states y funciones
        <SnackHubContext.Provider value={{categorias, 
                                            categoriaActual, 
                                            handleClickCategoria, 
                                            modal, 
                                            handleClickModal,
                                            producto,
                                            handleSetProducto,
                                            pedido,
                                            handleAgregarPedido
                                        }}>
            {children}
        </SnackHubContext.Provider>
    );

}

export {
    SnackHubProvider
}

export default SnackHubContext