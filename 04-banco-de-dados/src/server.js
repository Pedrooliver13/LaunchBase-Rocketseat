const express = require('express')
const nunjucks = require('nunjucks')
const router = require('../routes')
const methodOverride = require('method-override')

const server = express()

server.set('view engine', 'njk')
server.use(express.static('public'))


nunjucks.configure('src/app/view', {
    express: server,
    autoescape: true,
    noCache: true
})

server.use(express.urlencoded({
    extended: true
})) //PARA ACEITAR O POST 
server.use(methodOverride('_method')) //PARA ACEITAR OUTRO MÉTODO(ELE TEM DE ESTAR ANTES DO ROUTES)
server.use(router)

server.listen(1313, function () {
    console.log('Server is Running')
})