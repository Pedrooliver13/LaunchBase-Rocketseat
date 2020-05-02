const fs = require('fs')
const data = require('./data.json')
const { age , date } = require('./utils')

module.exports = {
    index(req , res) {
        return res.render('members/index' , { instructors: data });
    },
    create(req, res) {
        return res.render('members/create')
    },

    
}