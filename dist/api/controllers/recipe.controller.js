'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _recipe = require('../models/recipe.model');

var _recipe2 = _interopRequireDefault(_recipe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    findAll: function findAll(req, res, next) {
        reipe.find().then(function (recipes) {
            return res.json(recipes);
        });
    },
    create: function create(req, res) {
        var _req$body = req.body,
            item = _req$body.item,
            type = _req$body.type,
            cousine = _req$body.cousine,
            rate = _req$body.rate,
            ingredients = _req$body.ingredients;

        if (!item) {
            return res.status(400).json({ err: 'item is required field' });
        }
        if (!type) {
            return res.status(400).json({ err: 'type is required field' });
        }
        if (!cousine) {
            return res.status(400).json({ err: 'cousine is required field' });
        }
        if (!rate) {
            return res.status(400).json({ err: 'rate is required field' });
        }
        if (!ingredients) {
            return res.status(400).json({ err: 'ingredients is required field' });
        }
        _recipe2.default.create({ item: item, type: type, cousine: cousine, rate: rate, ingredients: ingredients }).then(function (recipe) {
            return res.json(recipe);
        }).catch(function (err) {
            return res.status(500).json(err);
        });
    }
};
//# sourceMappingURL=recipe.controller.js.map