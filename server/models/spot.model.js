const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Mongoose Schema
let SpotSchema = new Schema({
    postedBy: {type: String, required: true},
    description: {type: String, required: true},
    streetOne: {type: String, required: true},
    streetTwo: {type: String, required: false},
    city: {type: String, required: true},
    zipCode: {type: Number, required: false},
    state: {type: String, required: true},
    country: {type: String, required: true},
    spotRating: {type: Number, required: false},
    skillLevel: {type: Number, required: false},
    imgUrl: {type: String, required: false}
});

const Spot = mongoose.model('Spot', SpotSchema, 'spots');