
import express from 'express';
import recipeController from '../api/controllers/recipe.controller';
export const router = express.Router();

//Invoices
router.get('/recipes', recipeController.findAll);
router.get('/recipes/:id', recipeController.findOne);
router.delete('/recipes/:id', recipeController.delete);
router.put('/recipes/:id', recipeController.update);
router.post('/recipes', recipeController.create);