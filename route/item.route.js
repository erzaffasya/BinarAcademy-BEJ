const router = require('express').Router()
const item = require('../controller/item.controller')
const { body, validationResult } = require('express-validator')

// in this file we separate router to from the main /user address to smaller one such as
const itemClass = new item()
router.get('/', (req, res, next) => {

    itemClass.getAllItem()
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
    itemClass.search(req.query.name)
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
    itemClass.getById(req.params.id)
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
    itemClass.insertData(req.body)
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
    itemClass.update(req.params.id, req.body)
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
    itemClass.deleteData(req.params.id)
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