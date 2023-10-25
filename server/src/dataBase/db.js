const mysql = require('mysql2');
require('dotenv').config()

const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_DATABASE || 'irisbisuteria',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'rootroot'
});

db.connect(function(err){
    if(err){
        console.error(err);
    } else {
        console.log('🎆 Conexion a la base de datos 🎆')
    }
})

module.exports = db;