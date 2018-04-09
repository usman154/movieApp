var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var moviesModel = new Schema({
    name : {
        type : String,
        required: true
    },
    relasedDate : {
        type : Date,
        default: Date.now
    } 
})
module.exports = mongoose.model('Movie', moviesModel)