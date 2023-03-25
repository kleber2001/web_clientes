const express = require('express')
const app = express();

//motor de plantilla
app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/', require('./router'));


app.listen(3000, () =>{
    console.log('Servidor corriendo exitosamente ');
});