const mysql = require('mysql');


const conexion = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root123',
    database: process.env.DB_NAME || 'dbclientes',
})

conexion.connect((error)=>{
    if (error){
        console.error('El error de conexión es: '+error);
        return
    }
    console.log('Conectado a la Base de Datos');
})

module.exports = conexion;