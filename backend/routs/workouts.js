const express = require("express")
const Workout = require("../models/workoutModel")

const router = express.Router()

router.get('/', (req, res)=> {
    res.json({
        message: "getttting respomnse"
    })
})

router.get('/:id', (req, res)=> {
    res.json({
        message: "getttting respomnse from id"
    })
})

router.post('/', async (req, res)=> {
    const {title, reps, load} = req.body

    try {
        const workout = await Workout.create({title, reps, load})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }


})

router.delete('/:id', (req, res)=> {
    res.json({
        message: "deleeetttting respomnse with id"
    })
})

router.patch('/:id', (req, res)=> {
    res.json({
        message: "updaaatttting respomnse"
    })
})

module.exports = router