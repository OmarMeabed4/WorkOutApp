const WorkoutModel = require("../models/workoutModel")
const mongoose = require("mongoose")


const getAllWorkouts = async (req, res) => {
    const user_id = req.user._id
    const allWorkouts = await WorkoutModel.find({user_id}).sort({createdAt: -1})
    res.status(200).json(allWorkouts)
}

const getSingleWorkout = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : "thias id is invalid"})
    }

    const workout = await WorkoutModel.findById(id)

    if (!workout){
        return res.status(404).json({error : "couldnt find a workout with this id"})
    }
    res.status(200).json(workout)
}

const createWorkout = async (req, res)=> {
    const {title, reps, load} = req.body
    let emptyFields = []
    

    try {
        const user_id = req.user._id
        const workout = await WorkoutModel.create({title, reps, load, user_id})
        res.status(200).json(workout)
    } catch (error) {
        if(!title){
            emptyFields.push("title")
        }
        if(!reps){
            emptyFields.push("reps")
        }
        if(!load){
            emptyFields.push("load")
        }
        if(emptyFields.length > 0){
            res.status(400).json({error:"please fill all the fields mf", emptyFields})
        }
        //res.status(400).json({error: error.message})
    }

}

const deleteWorkout = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : "thias id is invalid"})
    }

    const workout = await WorkoutModel.findOneAndDelete({_id:id})

    if (!workout){
        return res.status(400).json({error : "couldnt find a workout with this id"})
    }
    res.status(200).json(workout)
}

const updateWorkout = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : "thias id is invalid"})
    }

    const workout = await WorkoutModel.findOneAndUpdate({_id: id}, {...req.body})

    if (!workout) {
        return res.status(400).json({error: 'No such workout'})
    }
    
    res.status(200).json(workout)
}



module.exports = {
    getAllWorkouts,
    getSingleWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}