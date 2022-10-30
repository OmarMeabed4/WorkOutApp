import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";


export const useAuthContext = () => {
//useContext(AuthContext) return the value that we passed in
// the AuthContext.js WorkoutContext.Provider whiche are (state) and (dispatch)
    const context = useContext(AuthContext) 

    if(!context){
        throw Error("Workout context must be use inside the Authcontext provider")
    }

    return context
}

