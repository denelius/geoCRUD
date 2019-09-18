const express = require('express');
const router = express.Router();

// Require the controllers NOT YET CREATED!!
const geo_controller = require('../controllers/geo.controller');

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', geo_controller.test);

// routes/geo.route.js...
/* CREATE */
router.post('/create', geo_controller.geo_create);

/* READ */
router.get('/read_allgeo', geo_controller.geo_list);
// localhost:1234/geo/read_allgeo

router.get('/read_name/:name', geo_controller.geo_name);
// localhost:1234/geo/read_name/CREATETEST

router.get('/read_id/:id', geo_controller.geo_id);
// localhost:1234/geo/read_id/<id>

router.get('/read_allnames', geo_controller.geo_allnames);
// localhost:1234/geo/read_allnames

router.get('/read_all', geo_controller.geo_all);
// localhost:1234/geo/read_all

/* UPDATE */
router.put('/update/:id', geo_controller.geo_update);
// PUT localhost:1234/geo/update/5d7425d73fd67365e9c98c94
// BODY {"geometry":{"coordinates":[[-34.44379,-70.65775],[-34.199626,-71.106262],[-34.04576,-71.61748]]}}

/* DELETE */
router.delete('/delete/:id', geo_controller.geo_delete);
// localhost:1234/geo/delete/5d03b4614cf6af29d8312f98

module.exports = router;