const express = require('express')
const routes = express.Router()

const Instructors = require('./src/app/controllers/instructors')
const members = require('./src/app/controllers/members')


/* INSTRUCTORS */
routes.get('/' , function(req, res){
    return res.redirect('/instructors')
})

routes.get('/instructors' , Instructors.index )
routes.get('/instructors/create' , Instructors.create )
routes.get('/instructors/:id' , Instructors.show )
routes.get('/instructors/:id/edit' , Instructors.edit)
routes.put('/instructors' , Instructors.put )
routes.delete('/instructors' , Instructors.delete )
routes.post('/instructors' , Instructors.post )

/* MEMBERS */
routes.get('/members' , members.index )
routes.get('/members/create' , members.create )
routes.get('/members/:id' , members.show )
routes.get('/members/:id/edit' , members.edit)
routes.put('/members' , members.put )
routes.delete('/members' , members.delete )
routes.post('/members' , members.post )


module.exports = routes