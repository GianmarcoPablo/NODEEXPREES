import express from 'express';
import router from './routes/index.js';
import db from "./config/db.js"

const app = express();

//conectar la base de datos
db.authenticate()
    .then(()=>console.log("Base de datos conectada"))
    .catch(error=>console.log(error))

const port = process.env.PORT || 3000;

//habilitar pug
app.set("view engine","pug");

//obtener el año actual
app.use((req,res,next)=>{
    const yer = new Date();
    res.locals.actualYear = yer.getFullYear();
    res.locals.nombreSitio = "Agencia de Viajes";
    next();
})

// Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({extended:true}))

//definir la carpeta publica
app.use(express.static("public"))

//Agregar Router
app.use("/",router); 

app.listen(port,()=>{ 
    console.log(`El servidor esta funcionando en el puerto ${port}`)
})