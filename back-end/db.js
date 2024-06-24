import mysql from 'mysql'
//import dotenv from "dotenv";
//dotenv.config();

const host = 'localhost'
const user = 'root'
const password = 'root'
const database = 'sistema'

export const db = mysql.createConnection({
    host:host,
    user:user,
    password:password,
    database:database
    
})

