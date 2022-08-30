import { WorkoutContext } from "../context/WorkoutContext";
import { useContext } from "react";


export const useWorkoutContext = () => {
//useContext(WorkoutContext) return the value that we passed in
// the WorkoutContext.js WorkoutContext.Provider whiche are (state) and (dispatch)
    const context = useContext(WorkoutContext) 

    if(!context){
        throw Error("Workout context must be use inside the Workoutcontext provider")
    }

    return context
}

