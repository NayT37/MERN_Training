const mongoose = require('mongoose');

const URI = "mongodb://localhost/mern-tasks";

//mongoose.connect("mongodb://forozco:forozco1@ds135534.mlab.35534/evercheck-test-3"); //Not working
mongoose.connect(URI)
    .then(db => console.log('DB is running'))
    .catch(error => console.error(error));

module.exports = mongoose;
