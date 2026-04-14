//Modulo http

import http from 'node:http'
import fsp from `node:fs/promises`
import path from `node: path`
//creamos una instancia de servidor
const app= http.createServer((peticion, respuesta)=>{
    if(peticion.method ===`GET`){
         console.log(peticion.method) //<--- viene del cliente
    if(peticion.url=== `/`){
        //antes del end todo. despues nada
        respuesta.statusCode =200

        return respuesta.end(
        `ruta raiz /`
    )//<-----
    }
     if(peticion.url=== `/usuarios`){
        //antes del end todo. despues nada
        respuesta.statusCode=200

        return respuesta.end(
        `ruta usuarios /usuarios`
    )//<-----
    }


    }
     if(peticion.url=== `/usuarios`){
        //antes del end todo. despues nada
        respuesta.statusCode=200

        return respuesta.end(
        `ruta usuarios /usuarios`
    )//<-----
    }

    respuesta.statusCode =404
    return respuesta.end(`no se encontro la ruta`)
})

if (peticion.method ===`post`){
    if (peticion.url ===`/`){
        const ruta =`./contenido.txt`
         await fsp.writeFile(ruta, `contenido falso`)
        return respuesta.end(`recurso creado`)
    }
}
///-------------------------------
//fallback
respuesta.statusCode =404
return respuesta.end(`no se encontro la ruta`)
//abrimos puerto

app.listen(3000, ()=>{
    console.log(`servidor escuchando en http//localhost:3000`)
})