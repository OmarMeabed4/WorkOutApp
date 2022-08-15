const express = require("express");

const router = express.Router();

router.get('/', (req, res)=> {
    res.json({
        message: "getttting respomnse"
    });
});

router.get('/:id', (req, res)=> {
    res.json({
        message: "getttting respomnse from id"
    });
});

router.post('/', (req, res)=> {
    res.json({
        message: "pooosstttting respomnse"
    });
});

router.delete('/:id', (req, res)=> {
    res.json({
        message: "deleeetttting respomnse with id"
    });
});

router.patch('/:id', (req, res)=> {
    res.json({
        message: "updaaatttting respomnse"
    });
});

module.exports = router;