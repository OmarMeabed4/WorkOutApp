const WorkoutDetails = ({workout}) => {
    return ( 
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load Kg: </strong>{workout.load}</p>
            <p><strong>number of reps: </strong>{workout.reps}</p>
            <p>{workout.createdAt}</p>
        </div>
     );
}
 
export default WorkoutDetails;