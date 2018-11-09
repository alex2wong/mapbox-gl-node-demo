var mbgl = require('./index');
var fs = require('fs');
var path = require('path');
var style = require('./test/fixtures/style.json');
var sharp = require('sharp');

var pnts = [];

var options = {
    request: function(req, callback) {
      fs.readFile(path.join(__dirname, './test', req.url), function(err, data) {
        callback(err, { data: data });
      });
    },
    ratio: 1
  };


var map = new mbgl.Map(options);
map.load(style);
// map.load({
//     "version": 8,
//     "sources": {
//         "geojson": {
//             "type": "geojson",
//             "data": {
//                 "type": "Point",
//                 "coordinates": [
//                     18.05489,
//                     59.32744
//                 ]
//             }
//         }
//     },
//     "layers": [
//         {
//             "id": "circle",
//             "type": "circle",
//             "source": "geojson",
//             "paint": {
//                 "circle-color": "blue"
//             }
//         }
//     ]
// });

map.render({zoom: 0, pitch: 50, bearing: 30}, function(err, buffer) {
    if (err) throw err;

    map.release();

    var image = sharp(buffer, {
        raw: {
            width: 512,
            height: 512,
            channels: 4
        }
    });

    // Convert raw image buffer to PNG
    image.toFile('circle.png', function(err) {
        if (err) throw err;
    });
});
