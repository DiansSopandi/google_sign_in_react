import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';
import testRoutes from './routes/test.js';

// const express = require('express');

const  app = express();

app.use( cors());
app.use( bodyParser.json( { limit:"30mb", extended:true } ) );
app.use( bodyParser.urlencoded( { limit:"30mb", extended:true } ) );

app.use('/posts',postRoutes);
app.use('/users',userRoutes);
app.use('/test',testRoutes);


const CONNECTION_URL = 'your connection to mongoDB';

  
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server Running on http://localhost/${PORT}`) ))
    .catch( (error) => console.log('logErr  => '+error.message) );

// mongoose.set('useFindAndModify',false);

