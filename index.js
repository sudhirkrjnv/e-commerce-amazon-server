import dotenv from 'dotenv';
dotenv.config();

console.log("HELLO");

import connectDB from './src/db/index.js';
import { app } from './app.js';

const port = process.env.PORT || 4000;

connectDB()
.then(()=>{
    app.listen( port, ()=>{ console.log('server at https:', port) } );
})
.catch((error)=>{
    console.log("MongoDB Connection failed !!!", error);
})


