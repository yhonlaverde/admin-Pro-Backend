require('dotenv').config();
const expres = require('express');
const cors = require('cors')
const {dbConnection} = require('./database/config')


//crear servidor
const app = expres();

//configurar CORS
app.use(cors())
//base de datos 
dbConnection();
//UMyJyqKf3q7dJPVk
//mean_user


//rutas
app.get('/', (req,res) =>{
  
res.status(400).json({
    ok: true,
    msg: "Hola mundo"
})

});

app.listen(process.env.PORT, () =>{
    console.log('servidor esta corriendo')
} )


