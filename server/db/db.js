const mysql =require('mysql');
const dotenv = require('dotenv');
let instance = null;
dotenv.config();

const mysqlConnection= mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT
   // multipleStatements:true
/*
host:'bprbeudfwg7eeipqbp9t-mysql.services.clever-cloud.com',
user:'urappmxol0gahuzf',
password:'piXeRzrY5CoTJ351xaU4',
database:'bprbeudfwg7eeipqbp9t',

*/

});
mysqlConnection.connect(function(err){
if(err){
    console.error(err);
    return;
}else{

    console.log('base de datos conectada');
}

})
module.exports = mysqlConnection;