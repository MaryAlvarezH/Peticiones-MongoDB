const express=require('express') // con esto traigo toda la biblioteca en una constante 
const bodyParser=require('body-parser')//biblioteca que nos ayuda a traer el body
const app=express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // a mi objeto request le agrega el body
//crearemos un mini servidor para emplearlo en nuestra computadora como localhost 

//hacer un get app puede crear lo que sea
app.get('/',(request, response)=>{ //request es lo que viene de (cliente) internet hacia mi /// response lo que yo le envio al cliente
    response.send({mensaje:'Esta es mi primera API holllaaaa que tal', despedida:'Bye....'}) // PODEMOS CONTESTAR UN HTML UN JSON 
}); //1. la ruta 2. un callback del request y el response

app.get('/saludo',(request,response)=>{
    response.send({mensaje:"Hola"})

});

//params 

app.get('/user/:uid',(req,res)=>{ //uid es como si fuera una variable con el nombre que tu quieras
   // const uid=req.params.uid es lo mismo solo que menos resumido
    const {uid}=req.params
    res.send({id:uid})
});

//query busqueda no vienen tan definidos como los params
app.get('/busqueda',(req,res)=>{
    //console.log(req.query)
    const {q,color}=req.query
    res.send({busqueda:q, color:color})
});

//EJERCICIO CON RUTAS
app.get('/user/:uid/:nombre',(req,res)=>{ 
     const {uid,nombre}=req.params
     res.send({id:uid, nombre:nombre})
 });
 //http://localhost:3000/user/1/Maria

 //EJERCICIO CON QUERY
 app.get('/user',(req,res)=>{ 
     const {uid,nombre}=req.query
     res.send({id:uid, nombre:nombre})
 });
 //http://localhost:3000/user?uid=1&nombre=Maria

//PETICIONES POST
app.post('/create/user',(req,res)=>{
    const{name, lastname}=req.body
    res.status(201).send({id:1, name, lastname})
});

//http://localhost:3000/busqueda?q=perritos&color=cafe

//pedir dos variables en el body y contestar la suma de ellos
app.post('/calculo',(req,res)=>{
    const{num1, num2}=req.body

    var sum=num1+num2
    res.send({num1,num2, sum: num1+num2})
    
    
});

app.listen(3000, ()=>{ //esto siempre se escribe hasta abajo ya que es cuando se levanta un server
    console.log('server corriendo en el puerto 3000')
});//1. En que puerto, 2. un callback //3000 8000 8080 8085
//para matar el servidor es con ctrl 