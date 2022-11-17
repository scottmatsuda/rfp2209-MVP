const mongoose = require('mongoose');

const artworkSchema = mongoose.Schema({
  title: String,
  artist: String,
  inmateId: String,
  price: String,
  description: String,
  details: String,
  photos: [String]
});

const Artwork = mongoose.model('Artwork', artworkSchema);

module.exports = Artwork;