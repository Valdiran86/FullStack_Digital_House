//Criando um servidor com Express
const express = require('express');

const path = require('path')

const server= express()

server.get('/',(req,res)=> {
    res.sendFile(path.join(__dirname,'/index.html'))
})


server.listen(3000, ()=>console.log("servidor rodando na porta 3000"))