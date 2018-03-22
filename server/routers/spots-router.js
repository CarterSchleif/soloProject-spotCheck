const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    skillLevel: {type: String, required: false},
    imgUrl: {type: String, required: false}
});

const Spot = mongoose.model('Spot', SpotSchema, 'spots');



router.post('/', (request, response) => {
    let newSpot = new Spot(request.body);
    console.log('Spot to save is', request.body);
    newSpot.save((error, savedSpot) => {
      if (error){
        console.log('error on add Spot:', error);
        response.sendStatus(500);
      } else {
        response.sendStatus(201);
      }
    })
  });

  router.get('/', (request, response) => {
    Spot.find({}, (error, gotSpots) => {
      if (error){
        console.log('error on get spots:', error);
        response.sendStatus(500);
      } else {
        response.send(gotSpots);
      }
    })
  });

  router.delete('/:id', (request, response) => {
    let id = request.params.id;
    console.log('THIS IS IT:', id);
    Spot.findByIdAndRemove(
      {"_id": id},
      (error, success) => {
        if(error){
          console.log('error in delete', error);
          response.sendStatus(500);
        } else {
          response.sendStatus(200);
        }
      })
  });

  router.put('/:id', (request, response) => {
    let id = request.params.id;
    console.log('THIS IS the ID in router.PuT', id);
    
    let updatedSpot = request.body;
    Spot.findByIdAndUpdate(
      {"_id": id},
      {$set: updatedSpot},
      (error, success) => {
        if(error){
          console.log('Error in router.put', error);
          response.sendStatus(500);          
        } else {
          response.sendStatus(200);
        }
      }
    )
  })



module.exports = router;