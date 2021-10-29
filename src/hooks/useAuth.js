import { useContext } from "react"
import { Context } from "../context/AuthProvider"

const useAuth = () =>{
    return useContext(Context);
}

export default useAuth;