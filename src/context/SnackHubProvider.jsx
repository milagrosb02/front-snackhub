import { createContext ,useState } from "react"
import { categorias as categoriasDB } from "../data/categorias"


const SnackHubContext = createContext();

const SnackHubProvider = ({children}) => {

    const [categorias, setCategorias] = useState(categoriasDB);
    const [categoriaActual, setCategoriaActual] = useState(categorias[0]);


    // funcion para cargar categoria
    const handleClickCategoria = id => {
        const categoria = categorias.filter(categoria => categoria.id === id)[0]

        setCategoriaActual(categoria)
    }


    return (

        // en el value hago disponible states y funciones
        <SnackHubContext.Provider value={{categorias, categoriaActual, handleClickCategoria}}>
            {children}
        </SnackHubContext.Provider>
    );

}

export {
    SnackHubProvider
}

export default SnackHubContext