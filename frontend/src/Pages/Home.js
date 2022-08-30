import {useEffect} from "react"

//components imports 
import WorkoutDetails from "../Components/WorkoutDetails"
import WorkoutForm from "../Components/WorkoutForm"
import { useWorkoutContext } from "../Hooks/useWorkoutContext"

const Home = () => {

    const {workouts, dispatch} = useWorkoutContext()

    useEffect(()=>{
        const fetchWorkouts = async ()=>{
            const response = await fetch("/api/workouts/")
            const json = await response.json()

            if(response.ok){
                dispatch({type: "SET_WORKOUTS", payload: json})
            }
        }
        fetchWorkouts()
    },[])

    return ( 
        <div className="home">
            <div className="worlouts">
                {workouts && workouts.map((workout)=>(
                    <WorkoutDetails key= {workout._id} workout={workout}/>
                ))}
            </div>
            <WorkoutForm/>
        </div>
     );
}
 
export default Home;