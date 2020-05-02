const express = require('express');
const routes = express.Router()
const Instructors = require('./instructors');
const Members = require('')

routes.get('/' , function(req, res){
    return  res.redirect('/instructors')
});
routes.get('/instructors' , Instructors.index);
routes.get('/instructors/create' , Instructors.create);
routes.post("/instructors" , Instructors.post);
routes.get('/instructors/:id' , Instructors.show);
routes.get('/instructors/:id/edit' , Instructors.edit );
routes.put('/instructors', Instructors.put );
routes.delete('/instructors' , Instructors.delete );
 
/* MEMBERS */
routes.get('/members' , )
module.exports = routes