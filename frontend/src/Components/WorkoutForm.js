import { useState } from "react";
import { useWorkoutContext } from "../Hooks/useWorkoutContext";

const WorkoutForm = () => {

    const [title, setTitle] = useState("")
    const [reps, setReps] = useState("")
    const [load, setLoad] = useState("")
    const [err, setErr] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])
    const { dispatch} = useWorkoutContext()


    const handleSubmit = async (e) => {
        
        e.preventDefault()
        const workout = {title, load, reps}
        const response = await fetch(
            "/api/workouts/",
            {
                method: "POST",
                body: JSON.stringify(workout),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        
        const json = await response.json()
        
        if(!response.ok){
            setEmptyFields(json.emptyFields)
            setErr(json.error)
        }

        if(response.ok){
            setTitle("")
            setLoad("")
            setReps("")
            setErr(null)
            dispatch({type: "CREATE_WORKOUT", payload: json})
        }
    }

    return ( 
        <form className="createWorkoutForm" onSubmit={handleSubmit}>

            <h3>Add a new workout</h3>

            <label>Exersise title</label>
            <input 
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value = {title}
                className = {emptyFields.includes("title") ? "error": ""}
             />

            <label>Load in (Kg)</label>
            <input 
                type="number"
                onChange={(e) => setLoad(e.target.value)}
                value = {load}
                className = {emptyFields.includes("load") ? "error": ""}
             />

            <label>Exersise title</label>
            <input 
                type="number"
                onChange={(e) => setReps(e.target.value)}
                value = {reps}
                className = {emptyFields.includes("reps") ? "error": ""}
             />
            <button>Add workout</button>
            {err && <div className="error">{err}</div>}

        </form>
     );
}
 
export default WorkoutForm;