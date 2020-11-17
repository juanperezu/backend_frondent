const express=require('express');
const app=express();
const dbService=require('./routes/dbService'); // defino todos los middleware de los modulo
//const modulos=require('./routes/modulos');
//const colegios=require('./routes/colegios');

// Ajustess 
app.set('port', 5000);//puerto único  //firewall

// middleware
app.use(express.json());
// ajustess
// defino middleware
app.use('/',dbService);
//app.use('/api/modulos',modulos);
//app.use('/api/colegios',colegios);


app.listen(app.get('port'),()=>{
    console.log('listening on port' + app.get('port'));
});
