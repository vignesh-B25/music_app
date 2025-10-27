
//BRINGING THE EXPRESS LIBRARY
import express from "express"
//dotevn config
import dotenv from "dotenv";
dotenv.config();

//creating instance of express application object 
// The app object exposes methods for defining routes, middleware, and server behavior.
// Think of it as your central server object where everything — routes, middleware, and server settings — connects together.​
const app=express();

//calling the port from the env file
const PORT= process.env.PORT;
// enable json payload parsing  middleware 
app.use(express.json());

//start the server and listen to request 
app.listen(PORT,()=>  {

console.log(`server is running on ${PORT}`)
});



