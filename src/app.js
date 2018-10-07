import express from 'express';
import mongoose, { mongo } from 'mongoose';

import {router} from './config/routes';

mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost/recipeDb4');
mongoose.connect("mongodb+srv://Irakli:mO8kaSItCYmwOMGr@cluster0-rwizn.mongodb.net/test?retryWrites=true")
    .then (()=> {
        console.log('conencted to Mongo Atlas')
})
.catch(()=> {
    console.log('Connection Faield to Mongo Atlas');
})


const app = express();
const PORT = 3001;
//mO8kaSItCYmwOMGr

app.use(express.json());
app.use(express.urlencoded());
app.use('/api', router);

//Error Handling

app.use((req,res,next)=>{
    const error = new Error('Not Found');
    error.message = 'Invalid route';
    error.status=404;
    next(error);
})

app.use((error,req,res,next)=> {
    res.status(error.status || 500);
    return res.json({
        error: {
            message: error.message,
        },
    });
})

// app.get('/invoices', (req,res)=> {
//     res.json(invoices);
// });


app.listen(PORT, ()=>{
    console.log(`Server is running at PORT ${PORT}`);
})