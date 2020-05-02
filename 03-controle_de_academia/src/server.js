const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')

const server = express()

server.set('view engine' , 'njk')
server.use(express.static('public'))

nunjucks.configure('view' , {
	express:server,
	autoescape:false,
	noCache:true
})

server.use(express.urlencoded({ extend:true }))//CONSEGUIR 'RODAR' AS INFOS DO FORM
server.use(routes)

server.listen(1313 , function(){
    console.log('Server is Running')
})