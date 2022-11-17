const Inmate = require('../models/inmate.js');

module.exports = {
  createInmate: (inmate) => {
    return Inmate.create(inmate);
  },

  findInmate: (inmateId) => {
    let query = {
      inmateId: inmateId,
    };
    return Inmate.find(query);
  },

  findInmateAndUpdate: (inmate) => {
    let query = {
      inmateId: inmate.inmateId,
    };
    return Inmate.findOneAndUpdate(query, inmate);
  },

  deleteInmate: (inmate) => {
    return Inmate.deleteOne(inmate);
  }
}
