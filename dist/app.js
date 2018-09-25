'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _routes = require('./config/routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = global.Promise;
_mongoose2.default.connect('mongodb://localhost/recipeDb4');

var app = (0, _express2.default)();
var PORT = 3001;

app.use('/api', _routes.router);

app.get('/', function (req, res) {
    res.json({
        msg: 'Welcome to builder'
    });
});

// app.get('/invoices', (req,res)=> {
//     res.json(invoices);
// });


app.listen(PORT, function () {
    console.log('Server is running at PORT ' + PORT);
});
//# sourceMappingURL=app.js.map