const { default: mongoose } = require('mongoose');
const moongoose = require ('mongoose');

const Schema = moongoose.Schema;

const bookingSchema = new Schema({
    event:{
        type: Schema.Types.ObjectId,
        ref:'Event'
    },
    user:{
        type: Schema.Types.ObjectId,
        ref:'User'
    },
    //Permit to get Created at and Updated at
},{timestamps:true})

module.exports = mongoose.model('Booking', bookingSchema)