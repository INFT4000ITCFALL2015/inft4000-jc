/**
 * Created by inet2005 on 12/10/15.
 */
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;


var AddressSchema = new Schema({

    building: String,
    coord: [Number, Number],
    street: String,
    zipcode: String

});

var GradesSchema = new Schema ({

    grade: String,
    score: Number,
    date: Date

});


var RestaurantSchema   = new Schema({

    address: [AddressSchema],
    borough: String,
    cuisine: String,
    name: String,
    grades: [GradesSchema]

});

module.exports = mongoose.model('Restaurant', RestaurantSchema);