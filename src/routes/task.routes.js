/* CRUD urls to use with the front */
const express = require('express');
const router = express.Router();

const TaskModel = require('../models/task');

/* GET */
//All in DB
router.get('/', async (req, res) => {
    const todos = await TaskModel.find();
    res.json(todos);
});

//Just one
router.get('/:id', async (req, res) => {
    const task = await TaskModel.findById(req.params.id);
    res.json(task);
});

/* POST */
router.post('/', async (req, res) => {
    const { name, description } = req.body;
    const newTask = new TaskModel({
        name,
        description
    });
    console.log("My request is " + newTask); //Get data from request
    await newTask.save();
    res.json({
        status: 'Saved in DB'
    });
});


/* PUT */
router.put('/:id', async (req, res) => {
    const { name, description } = req.body;
    const newTask = { name, description };
    await TaskModel.findByIdAndUpdate(req.params.id, newTask);
    res.json({
        status: 'Updated'
    });
});

/* DELETE */
router.delete('/:id', async (req, res) => {
    await TaskModel.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Deleted'
    });
});

module.exports = router;