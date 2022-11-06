const express = require('express');
const path = require('path');

let app = express();

app.get('/saldar', (req, res)=> res.send("Boa noite tudo bem com você!"))
app.get('/contato',(req, res)=> res.send(['contato 1','contato2','contato 3']));
app.get('/valor', (req, res)=> res.send([10,20,30,40,50,60]))
app.get('/pessoa', (req,res)=>res.send({nome: "Valdiran", idade: 36, sexo: "Masculino", profissao: "programador"}))
//criando um servidor com express
console.log('------------------------------------')

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/index.html'));
})

app.listen(3000, ()=>console.log('Servidor rodando na porta 3000'))
