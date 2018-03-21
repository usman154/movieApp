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
    },
    rating : {
        type : Number,
        required : true
    }
})
module.exports = mongoose.model('Movie', moviesModel)