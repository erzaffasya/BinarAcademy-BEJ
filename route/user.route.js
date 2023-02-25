const router = require('express').Router()
const user = require('../controller/user.controller')
const { body, validationResult } = require('express-validator')

// in this file we separate router to from the main /user address to smaller one such as
const userClass = new user()
router.get('/', (req, res, next) => {

    userClass.getAllUser()
        .then(data => {
            console.log
            return res.status(200).json({
                data
            })
        })
        .catch(err => {
            return res.status(400).json({
                data: err
            })

        })

})
router.get('/search', (req, res, next) => {
    console.log(req.query)
    userClass.search(req.query.full_name)
        .then(data => {
            return res.status(200).json({
                data
            })
        })
        .catch(err => {
            return res.status(400).json({
                data: err
            })

        })
})

router.get('/:id', (req, res, next) => {
    userClass.getById(req.params.id)
        .then(data => {
            return res.status(200).json({
                data
            })
        })
        .catch(err => {
            return res.status(400).json({
                data: err
            })

        })
})

router.post('/', (req, res, next) => {
    // return req.body;
    userClass.insertData(req.body)
        .then(data => {
            return res.status(200).json({
                data
            })
        })
        .catch(err => {
            return res.status(400).json({
                data: err
            })

        })
})

router.put('/:id', (req, res, next) => {
    userClass.update(req.params.id, req.body)
        .then(data => {
            return res.status(200).json({
                data
            })
        })
        .catch(err => {
            return res.status(400).json({
                data: err
            })

        })
})

router.delete('/:id', (req, res, next) => {
    userClass.deleteData(req.params.id)
        .then(data => {
            return res.status(200).json({
                data
            })
        })
        .catch(err => {
            return res.status(400).json({
                data: err
            })

        })
})

module.exports = router