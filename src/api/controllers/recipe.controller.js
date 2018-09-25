import Joi from "joi";
import recipe from '../models/recipe.model';

export default {
    findAll(req,res,next) {
        recipe.find().then(recipes=> res.json(recipes))
        .catch(err=>res.status(500).json(err));
    },

    create(req,res) {
        
        const joiSchema = Joi.object().keys({
            item: Joi.string().required(),
            type: Joi.string().optional(),
            cousine: Joi.string().optional(),
            rate: Joi.number().optional(),
            ingredients: Joi.string().required()
        });
        const {error, value} = Joi.validate(req.body, joiSchema);
        if (error && error.details) {
            return res.json(400).json(error);
        }

    recipe.create(value)
            .then(recipe=> res.json(recipe))
            .catch(err=> res.status(500).json(err));
    },

    findOne(req,res) {
        let {id} = req.params;
        recipe.findById(id).then(recipe=>{
            if (!recipe){
                return res.status(404).json({err:'Could not find recipe'});
            }
            return res.json(recipe);
        })
        .catch(err=>res.status(500).json(err));
    },

    delete(req,res) {
        let {id} = req.params;
        recipe.findByIdAndDelete(id).then(recipe=>{
            if (!recipe){
                return res.status(404).json({err:'Could not find recipe'});
            }
            return res.json(recipe);
        })
        .catch(err=>res.status(500).json(err));
    },
    
    update(req,res) {
        let {id} = req.params;
        const joiSchema = Joi.object().keys({
            item: Joi.string().required(),
            type: Joi.string().optional(),
            cousine: Joi.string().optional(),
            rate: Joi.number().optional(),
            ingredients: Joi.string().required()
        });
        const {error, value} = Joi.validate(req.body, joiSchema);
        if (error && error.details) {
            return res.json(400).json(error);
        }
        recipe.findByIdAndUpdate({_id:id}, value,{new:true})
            .then(recipe => res.json(recipe))
            .catch(err => res.status(500).json(err));
    },
   
    
};