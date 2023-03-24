const conexion = require('../database/db');

exports.save = (req,res) =>{
    const nombre = req.body.nombre;
    const telefono = req.body.telefono;
    const empresa = req.body.empresa;
    conexion.query('INSERT INTO clientes SET ?',{nombre:nombre, telefono:telefono, empresa:empresa}, (error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    })
}

exports.update = (req,res) => {
    const id = req.body.id;
    const nombre = req.body.nombre;
    const telefono = req.body.telefono;
    const empresa = req.body.empresa;
    conexion.query('UPDATE clientes SET ? WHERE id=?', [{nombre:nombre, telefono:telefono, empresa:empresa}, id], (error,results) =>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    })
}