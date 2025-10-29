import pg from "pg";
//DB CREDENTIAL FROM .env FILE
const dbCredential=POSTGRES_DB_CREDENTIAL
// create new object for db access using pg 
const db= new pg.Client(dbCredential);
//connect the DB 
db.connect()
.then(()=>console.log("DB connected successfully "))
.catch(err=>console.error("Error in connecting DB : ",err))

export default db;