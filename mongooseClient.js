// aqui voy a crear objetos y el modelo 

const mongoose=require('mongoose')
mongoose.connect('mongodb://MaryAlvarezH:201105@ds259109.mlab.com:59109/cinta_roja'); // esta url apunta a la base de datos en mongo 

//evita que la bd sea tan dinamica creando modelos 
const Schema=mongoose.Schema, //esto ya es propio de Mongo
    ObjectId=Schema.ObjectId;

const alumnoSChema=new Schema({ // si se inserta algo que no esta en este esquema ni siquiera se tomara en cuenta
    alumno:ObjectId, //crearemos un objeto que sera el esquema de la base de datos que siempre se debe de respectar
    name: String,
    last_name: String,
    age:Number,
    email: String,
    city:String
});

var Alumno=mongoose.model('Alumno',alumnoSChema); // voy a hacer un modelo que se llame alumno y tendra el siguiente esquema

module.exports=Alumno; //tambien se pueden mandar funciones solo con el nombre de la funcion 