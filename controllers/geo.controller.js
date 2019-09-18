const Geo = require('../models/geo.model');

// Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Hello Test controller!');
};

/* CREATE */
exports.geo_create = function (req, res, next) {
    var geo = new Geo(
        req.body
    );

    geo.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Feature created successfully')
    })
};

/* READ */
// return list of all features (geometry only)
exports.geo_list = function (req, res) {
    Geo.find({},{'geometry': 1}, function (err, geo) {
        if (err) return next(err);
        res.send(geo);
    })
};

// return item that matches name
exports.geo_name = function (req, res) {
    Geo.findOne({ name: req.params.name },{}, function (err, geo) {
        if (err) return next(err);
        res.send(geo);
    })
};

// return item that matches id
exports.geo_id = function (req, res) {
    Geo.findById(req.params.id, function (err, geo) {
        if (err) return next(err);
        res.send(geo);
    })
};

// return all names only
exports.geo_allnames = function (req, res) {
    Geo.find({},{'name': 1}, function (err, geo) {
        if (err) return next(err);
        res.json(geo);
    });
};

// return geometry only
exports.geo_all = function(req,res) {
    Geo.find({},{}, function(err, geo){
        if (err) return next(err);
        res.send(geo)
    });
};

/* UPDATE */
exports.geo_update = function (req, res, next) {
    Geo.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, geo) {
        if (err) return next(err);
        res.send('Geo updated.');
    });
};

/* DELETE */
exports.geo_delete = function (req, res) {
    Geo.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};