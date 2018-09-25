'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var RecipeSchema = new Schema({
  item: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  cousine: {
    type: String,
    required: true
  },

  rate: {
    type: Number
  },
  ingredients: {
    type: []
  }
});
exports.default = _mongoose2.default.model('Recipe', RecipeSchema);
//# sourceMappingURL=recipe.model.js.map