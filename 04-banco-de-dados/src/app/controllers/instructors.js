const {
    age,
    date
} = require('../../lib/utils')
const Instructors = require('../models/instructors')

module.exports = {
    index(req, res) {
        let { filter, page , limit } = req.query

        page = page || 1
        limit = limit || 2
        let offset = limit * (page - 1)

        const params  = {
            filter,
            page,
            limit,
            offset,
            callback(instructors){
                const pagination = {
                    page, 
                    total: Math.ceil(instructors[0].total / limit)
                }
                return res.render('instructors/index' , {
                    instructors,
                    filter,
                    pagination
                })
            }
        }

        Instructors.paginate(params)

        /* const {filter} = req.query

        if(filter) {
            Instructors.findBy(filter , (instructors)=>{
                return res.render('instructors/index' , { instructors , filter })
            })
        }else{
            Instructors.all((instructors) =>{
                return res.render('instructors/index' , { instructors })
            })
        } */

    },
    create(req, res) {
        return res.render('instructors/create')
    },
    show(req, res) {
        Instructors.find(req.params.id, (instructor) => { //enviando o id e pegando o argumento do parametro
            if (!instructor) return res.sen('instructors id not found')

            instructor.age = age(instructor.birth)
            instructor.services = instructor.services.split(',')
            instructor.create_at = Intl.DateTimeFormat('en').format(instructor.create_at)

            return res.render('instructors/show', {
                instructor
            })
        })
    },
    post(req, res) {
        const keys = Object.keys(req.body)

        for (const key of keys) {
            if (req.body[key] == "") return res.send('Please, fill all fields!')
        }

        Instructors.create(req.body, (instructor) => {
            return res.redirect(`/instructors/${ instructor.id }`)
        })
    },
    edit(req, res) {
        Instructors.find(req.params.id, (instructor) => {
            if (!instructor) return res.send('Instructors is not found')

            instructor.birth = date(instructor.birth).iso

            return res.render('instructors/edit', {
                instructors: instructor
            })
        })

    },
    put(req, res) {
        Instructors.update(req.body, () => {
            return res.redirect(`/instructors/${req.body.id}`)
        })
    },
    delete(req, res) {
        Instructors.delete(req.body.id, () => {
            return res.redirect('/instructors')
        })
    }
}