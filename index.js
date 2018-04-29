const express=require('express')
const bodyParser=require('body-parser')
const app=express()
const Alumno=require('./mongooseClient')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/api/v1/user/create',(req,res)=>{
    const {name, last_name, age}=req.body
    let newAlumno=Alumno({//vamos a crear un objeto de Alumno
        // name:name, //el primero es el del modelo y el segundo es el de const
        // last_nam:last_name,
        // age:age o bien, de manera resumida
        name,
        last_name,
        age
    });

    //mandarlo a mongo para que lo almacene
    //para decir si se guardo bien o si hubo un error
    newAlumno.save((error,alumno)=>{ //en mongoose siempre va primero ell error y despues los parametros
         //pregunta si hay un error y si existie envia una excepcion
         //si queremos usar archivos como imagenes debemos de usar una base de datos (adicional) de archivos en donde solo se mandan url cloudinary
        res.status(201).send(alumno)
    }); 
}); 

//Todos los usuarios 
app.get('/api/v1/user/',(req,res)=>{
    Alumno.find().exec().then(alumnos=>{res.send(alumnos)})
        .catch((err)=>{res.status(404).send(err)
        }) 
});

//Traer un usuario por su id
app.get('/api/v1/user/:uid',(req,res)=>{
    const{uid}=req.params
    Alumno.findById(uid).exec().then(alumno=>{
        res.send(alumno)
    }).catch(err=>{res.status(404).send(err)
    })
});

app.listen(3000,()=>{
    console.log('servidor corriendo en puerto 3000')
});