import { useContext } from "react";
import SnackHubContext from "../context/SnackHubProvider"


const useSnack = () =>{

    return useContext(SnackHubContext)
}


export default useSnack