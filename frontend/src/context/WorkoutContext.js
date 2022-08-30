import { createContext, useReducer } from "react";


//create a new context
export const WorkoutContext = createContext()

//defining the reducer function which has 2 araguments
//state: is the previeous state, action contains the type of action and action payload the reciever from the dispatch function
// ex dispatch({type: "CreateWorkout", {payload1:bpbp, payload2:asdasd} })
const workoutReducer = (state, action) => {
    switch(action.type){
        case "SET_WORKOUTS":
            return {workouts: action.payload}
        case "CREATE_WORKOUT":
            return {
                workouts: [action.payload, ...state.workouts]
            }
        case "DELETE_WORKOUT":
            return{
                workouts: state.workouts.filter((w) => w._id !== action.payload._id)
            }
        default:
            return state
    }
}

/*create this provider component to help us wrap the app under(WorkoutContext.Provider)
by using it on index.js to wrap the app component*/

export const WorkoutContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(workoutReducer, {
        workout: null
    })
    return(
        // wrapping the whoole application under this provider
        <WorkoutContext.Provider value={{...state, dispatch}}>
            {children}
        </WorkoutContext.Provider>

    )
}

