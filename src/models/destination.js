const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Destination = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        author: {
            type: Object,
            required: true,
        }
    },{
        timestamps: true
    }
);

module.exports = mongoose.model('Destination', Destination);