const fs = require('fs')
const data = require('./data.json')
const { age, date } = require('./utils.js')


exports.index = function(req, res){
    const instructors = data.Instructors


    return res.render('instructors/index' , { instructors })
}
//FUNÇÃO PARA OS FORMULÁRIOS

//MOSTRAR
exports.show = function(req, res){
    const { id } = req.params

    const foundInstructor = data.Instructors.find( function(instructor){
        return id == instructor.id

    })

    if(!foundInstructor) return res.send('Instructor is Not Found')

    const instructor = {
        ...foundInstructor,
        age: age( foundInstructor.birth ),
        services: foundInstructor.services.split(','),
        create_at: new Intl.DateTimeFormat('pt-BR').format( foundInstructor.create_at )
    }

    return res.render('instructors/show' , { instructor })
}
//criar
exports.create = (req, res) => {
    return res.render('instructors/create')
}
//post
exports.post = function(req, res){
    const keys = Object.keys(req.body)

    for(const key of keys ){
        if(req.body[key] == '') return res.send('Por Favor preencha todos os campos')
    } 

    let { avatar_url , name , birth , sex , services } = req.body

    const id = data.Instructors.length + 1 
    const create_at = Date.now()
    birth = Date.parse(birth)
    
    data.Instructors.push({
        id,
        avatar_url,
        name,
        birth,
        sex,
        services,
        create_at
    })

    fs.writeFile('data.json' , JSON.stringify(data , null, 2) , function(err){
        if(err) return res.send('Write error!')
    })
    
    return res.redirect('/instructors')
}
//EDITAR
exports.edit = function(req, res){
    const { id } = req.params

    const foundInstructor = data.Instructors.find( function(instructor){
        return id == instructor.id

    })

    if(!foundInstructor) return res.send('Instructors is not found')

    const instructors = {
        ...foundInstructor,
        birth: date( foundInstructor.birth )

    }

    return res.render('instructors/edit' , { instructors })
}
//ATUALIZAR
exports.put = function(req, res){
    const { id } = req.body // req.body pois ele está usando o formulário

    let positionArray = 0

    const foundInstructor = data.Instructors.find( function(instructor , foundPostion){ // foundPostion = ele acha a posição no array
        
        if( id == instructor.id ){
            positionArray = foundPostion

            return true
        }
    })

    if(!foundInstructor) return res.send("Instructors is not found")

    
    const  instructor = {
        ...foundInstructor,
        ...req.body,
        birth: Date.parse(req.body.birth),
        id: Number( req.body.id )
    }
    
    data.Instructors[ positionArray ] = instructor//pegando a posição no array

    fs.writeFile('data.json' , JSON.stringify(data, null , 2) , function(err){
        if(err) return res.send('Write error!')

    })
    
    return res.redirect(`instructors/${ id }`)
}
//DELETE
exports.delete = function(req, res) {
    const { id } = req.body

    const filterInstructor = data.Instructors.filter(function(instructor){
        return instructor.id != id
    })

    data.Instructors = filterInstructor

    fs.writeFile('data.json' , JSON.stringify(data , null , 2) , function(err){
        if(err) return res.send('ERRO')

        return res.redirect('/instructors')
    })
}