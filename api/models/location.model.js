const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema(
    {
        Id: {
            type: String,
            required: true,
        },
        Name: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }  
);


module.exports = mongoose.model('location', locationSchema);
