import {useEffect} from "react"

//components imports 
import WorkoutDetails from "../Components/WorkoutDetails"
import WorkoutForm from "../Components/WorkoutForm"
import { useWorkoutContext } from "../Hooks/useWorkoutContext"
import { useAuthContext } from "../Hooks/useAuthContext"

const Home = () => {

    const {workouts, dispatch} = useWorkoutContext()
    const {user} = useAuthContext()

    useEffect(()=>{
        const fetchWorkouts = async ()=>{
            const response = await fetch("/api/workouts/",{
                headers:{
                    "Authorization":`Bearer ${user.token}`
                }
            })
            const json = await response.json()

            if(response.ok){
                dispatch({type: "SET_WORKOUTS", payload: json})
            }
        }
        if(user){
            fetchWorkouts()
        }
        
    },[dispatch,user])

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