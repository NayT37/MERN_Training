/* Model for the CRUD operations */

const mongoose = require('mongoose');
const { Schema } = mongoose;

const TaskSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true }
});

//mongoose create a mode with (name, schema);
module.exports = mongoose.model("Task", TaskSchema);