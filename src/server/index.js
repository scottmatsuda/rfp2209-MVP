const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const artControllers = require('../db/controllers/artwork.js');
const inmateControllers = require('../db/controllers/inmate.js');
const db = require('../db/index.js');

const app = express();
const PORT = 3000;
app.use(cors())

// parse application/json
app.use(bodyParser.json())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// serve static files
app.use(express.static('/inmate-etsy-vite/src/assets'));

app.post('/bio', (req, res) => {
  let bio = req.body;
  inmateControllers.createInmate(bio)
    .then((results) => {
      console.log('results from successful post request to the database', results);
      res.sendStatus(201)
    })
    .catch((error) => {
      console.log('error creating inmate: ', error);
    })
});

app.get('/bio', (req, res) => {
  let id = req.params.inmateId;
  console.log({id});
  inmateControllers.findInmate(id)
    .then((inmate) => {
      console.log({inmate})
      res.send(inmate).status(200)
    })
    .catch((error) => {
      console.log('error getting inmate: ', error);
    })
});

app.put('/bio/:inmateId', (req, res) => {
  inmateControllers.findInmateAndUpdate(req.body)
    .then(res.sendStatus(201))
    .catch((error) => {
      console.log('error updating inmate: ', error);
    })
});

app.delete('/bio/:inmateId', (req, res) => {
  inmateControllers.deleteInmate(req.body)
    .then(res.sendStatus(200))
    .catch((error) => {
      console.log('error deleting inmate: ', error);
    })
});

app.post('/artwork', (req, res) => {
  let art = req.body;
  artControllers.createArtwork(art)
    .then(res.sendStatus(201))
    .catch((error) => {
      console.log('error posting artwork: ', error);
    })
});

app.get('/artwork', (req, res) => {
  artControllers.findArtwork(req.params.inmateId)
  .then((artwork) => {
    console.log({artwork})
    res.send(artwork).status(200)
  })
  .catch((error) => {
      console.log('error getting artwork: ', error);
    })
});

app.put('/artwork/:inmateId', (req, res) => {
  artControllers.findArtworkAndUpdate(req.params.inmateId, req.body)
  .then(res.sendStatus(201))
  .catch((error) => {
    console.log('error updating artwork: ', error);
  })
});

app.delete('/artwork/:inmateId', (req, res) => {
  artControllers.deleteArtwork(req.body)
    .then(res.sendStatus(200))
    .catch((error) => {
      console.log('error deleting artwork: ', error);
    })
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });