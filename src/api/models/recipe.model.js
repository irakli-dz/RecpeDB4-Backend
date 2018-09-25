import mongoose from 'mongoose';

const { Schema } = mongoose;
const RecipeSchema = new Schema({
  item: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  cousine: {
    type: String,
    required: true,
  },
  
  rate: {
    type: Number,
  },
  ingredients: {
    type: [],
  },
});
export default mongoose.model('Recipe', RecipeSchema);