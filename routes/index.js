var express = require('express');
var router = express.Router(); 


// This code done by me for GET method  upto module.exports bfr home

// const express = require('express');
const fs = require('fs');
const path = require('path');
// const router = express.Router();
const getStats = async (req, res, next) => {
  try {
    const data = fs.readFileSync(path.join(__dirname, './pets.json'));
    const stats = JSON.parse(data);
    const playerStats = stats.find(player => player.id === Number(req.params.id));
    if (!playerStats) {
      const err = new Error('Pet not found');
      err.status = 404;
      throw err;
    }
    res.json(playerStats); 
  } catch (e) {
    next(e);
  }
};

router
  // .route('/api/v1/stats/:id')
  .route('/pets/:id')
  .get(getStats)
  


// GET ALL DATA 
const getAll = async (req, res, next) => {
  try {
    const data = fs.readFileSync(path.join(__dirname, './pets.json'));
    const stats = JSON.parse(data);
    
    res.json(stats); 
  } catch (e) {
    next(e);
  }
};


router
  // .route('/api/v1/stats')
  .route('/pets')
  .get(getAll); 
  
// POST DATA
 const createStats = async (req, res, next) => {
  try {
    // const data = fs.readFileSync(statsFilePath);
    const data = fs.readFileSync(path.join(__dirname, './pets.json'));
    const stats = JSON.parse(data);
    const newStats = {
      id: req.body.id,
      name: req.body.name,
      type: req.body.type, 
      breed: req.body.breed,
      location: req.body.location,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
    };
    stats.push(newStats);
    fs.writeFileSync((path.join(__dirname, './pets.json')), 
    JSON.stringify(stats));
    // fs.writeFileSync(statsFilePath, JSON.stringify(stats));
    res.status(201).json(newStats.id);
    // res.status(201).json(newStats);
  } catch (e) 
  {
    next(e);
  }
};
router
  .route('/pets/add/new')
  .post(createStats);  
   


/* GET home page. */
 router.get('/', function(req, res, next) {
  res.render('index', { title: 'Expresss' });
});

  
module.exports = router; 


