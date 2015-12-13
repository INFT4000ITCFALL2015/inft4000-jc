/**
 * Created by inet2005 on 12/10/15.
 */
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var GradesSchema = new Schema ({

    grade: String,
    score: Number,
    date: Date

});

var CoordSchema = new Schema({
    x: Number,
    y: Number
});

var AddressSchema = new Schema({

    building: String,
    coord: [CoordSchema],
    street: String,
    zipcode: String

});

var RestaurantSchema   = new Schema({

    address: [AddressSchema],
    borough: String,
    cuisine: String,
    name: String,
    grades: [GradesSchema],
    restaurant_id: Number

});

module.exports = mongoose.model('Restaurant', RestaurantSchema);
