const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('Trash', new Schema({
    title: String,
    text: String,
    pin: Boolean
},
{
    timestamps: true,
}
));