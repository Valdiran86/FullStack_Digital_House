const http = require('http');
const express = require('express')

http.createServer((req, res)=> {
res.writeHead(200, {"Content-type": "text/html; Charset=utf-8"});
switch(req.url){
    case'/':
    res.end('servidor funcionando');
    break;
    case '/contato':
    res.end('contato');
    break;
    case '/e-mail':
    res.end('valdiran.cruz@hotmail.com.br');
    break;
    case '/endereco':
    res.end('Rua 17 de Janeiro')
    default:
    res.end('Sin resultados');
    break;


}
}).listen(8080,"localhost");