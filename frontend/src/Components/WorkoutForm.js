import { useState } from "react";

const WorkoutForm = () => {

    const [title, setTitle] = useState("")
    const [reps, setReps] = useState("")
    const [load, setLoad] = useState("")
    const [err, setErr] = useState(null)

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
            setErr(json.error)
        }

        if(response.ok){
            setTitle("")
            setLoad("")
            setReps("")
            setErr(null)
            console.log("woooooo a new workout added "+ json);
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
             />

            <label>Load in (Kg)</label>
            <input 
                type="number"
                onChange={(e) => setLoad(e.target.value)}
                value = {load}
             />

            <label>Exersise title</label>
            <input 
                type="number"
                onChange={(e) => setReps(e.target.value)}
                value = {reps}
             />
            <button>Add workout</button>
            {err && <div className="error">{err}</div>}

        </form>
     );
}
 
export default WorkoutForm;