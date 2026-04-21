//expressre -->framework de 35 para crear servidores
import express from "express"

const PUERTO = 3000


const app = express()
//verbo y ruta configurada -->get
app.get(`/`,(req, res)=>{
    res.status(200)
    res.redirect(`https://es.wikipedia.org/wiki/Club_Atl%C3%A9tico_Talleres_%28C%C3%B3rdoba%29`)
})

//verbo y ruta configurada -->get /usuarios
app.get(`/`,(req, res)=>{
    res.status(200)
    res.set("content-type", "text/plain")
    res.send(`<h1>hola expressjs en /usuarios<h1>`)
})

//verbo y ruta configurada -->get /usuarios
app.post(`/`,(req, res)=>{
    res.status(201)
    res.end(`hola post usuarios`)
})



app.listen(PUERTO), () =>{
    console.log(`servidor corriendo en http://localhost:${PUERTO}`)
}
