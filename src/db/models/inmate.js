const mongoose = require('mongoose');

const inmateSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  inmateId: String,
  bio: String,
  offense: String,
  funFacts: String,
  location: String,
  photo: String,
});

const Inmate = mongoose.model('Inmate', inmateSchema);

module.exports = Inmate;