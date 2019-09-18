const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let GeoSchema = new Schema({
  type: String,
  name: String,
  style: {
    color: String,
    weight: Number,
    opacity: Number
  },
  geometry: {
    type: {
      type: String,
      enum: ['LineString'],
      required: true
    },
    coordinates: {
      type: Array,
      index: '2d'
    }
  },
  properties: {
    direction: String,
    power: Number
  }
});

// Export the model
module.exports = mongoose.model('Geo', GeoSchema);