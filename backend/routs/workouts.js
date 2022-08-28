const express = require("express")
const {
    getAllWorkouts,
    getSingleWorkout,
    createWorkout
} = require("../controlers/WorkoutsController")

const router = express.Router()

router.get('/', getAllWorkouts)

router.get('/:id', getSingleWorkout)

router.post('/', createWorkout)

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