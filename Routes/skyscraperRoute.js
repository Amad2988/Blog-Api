const express = require('express')
const skyscraperModel = require('../Models/skyscraperSchema')

const router = express.Router()

router.get('/', async (req, res) => {
    try{
        const skyscraper = await skyscraperModel.find()
        res.status(200).json(skyscraper)
    } catch(error){
        console.log(error)
    }
})

router.post('/', async (req, res) => {
    const skyscraperData = req.body

    try{
        const skyscraper = await skyscraperModel.create(skyscraperData)
        res.status(201).json(skyscraper)
    } catch (error) {
        console.log(error)
        res.status(400).json('Bad Request')
    }
})

router.get('/:id', async (req, res) => {
    const id = req.params.id
    try{
        const skyscraper = await skyscraperModel.findById(id)
        res.status(200).json(skyscraper)
    } catch (error){
        console.log(error)
    }
})

router.put('/:id', async (req, res) => {
    const id = req.params.id
    const newSkyScraperData = req.body
    try{
        const skyscraper = await skyscraperModel.findByIdAndUpdate(id, newSkyScraperData, {new: true})
        res.status(202).json(skyscraper)
    } catch (error) {
        console.log(error)
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id
    try{
        const skyscraper = await skyscraperModel.findByIdAndDelete(id)
        res.status(200).json({msg: 'Skyscraper Demolished'})
    } catch (error) {
        console.log(error);
    }
})

module.exports = router