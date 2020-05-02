const express = require("express")
const nunjucks = require("nunjucks")

const server = express()
const videos = require('./data')

server.set('view engine' , 'njk')
server.use(express.static('public'))

nunjucks.configure('view' , {
    express:server,
    autoescape:false,
    noCache:true
})

server.get('/', (err) => {
    return res.redirect('/sobre')
})

server.get("/sobre" , function(req , res){
    const about = {
        url:"https://avatars1.githubusercontent.com/u/56042296?s=400&u=85b45470a4ee3c3f41f6f2f76dfee5ed04dd710c&v=4",
        name:"Pedro Oliveira",
        role:"Programador - Front end",
        description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus officiis, sapiente eum . <br> Estudante da <a href="https://rocketseat.com" target="_blank">Rocketseat</a>',
        links:[
            {name:"GitHub" , url:"https://github.com/settings/profile"},
            {name:"Twitter" , url:"https://github.com/settings/profile"},
            {name:"Linkedin" , url:"https://github.com/settings/profile"},
        ]

    }
    
    return res.render("about" , { about })
})

server.get('/aulas' , function(req , res){
    return res.render('aulas' , { items:videos })


})

server.get('/aulass' , function(req, res){
   const id = req.query.id

   const foundVideo  = videos.find(function(video) {
       return video.id == id
   })

   if(!foundVideo) return res.send('Video is not found')

   const item = {
       ...foundVideo
   }
   
   return res.render('video' , { item })
})

server.listen(1313 , function(){
    console.log("Server is Running")
    
})