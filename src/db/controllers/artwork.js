const Artwork = require('../models/artwork.js');

module.exports = {
  createArtwork: (artwork) => {
    console.log('artwork', artwork);
    return Artwork.create(artwork);
  },

  findArtwork: (inmateId) => {
    let query = {
      inmateId: inmateId,
    };
    return Artwork.find(query);
  },

  findArtworkAndUpdate: (inmateId, artwork) => {
    let query = {
      inmateId: inmateId,
    };
    return Artwork.findOneAndUpdate(query, artwork);
  },

  deleteArtwork: (artwork) => {
    return Artwork.deleteOne(artwork);
  }
}