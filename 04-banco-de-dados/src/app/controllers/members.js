const Members = require('../models/members')
const {
    age,
    date
} = require('../../lib/utils')

module.exports = {
    index(req, res) {
        let {
            filter,
            page,
            limit
        } = req.query

        page = page || 1
        limit = limit || 2

        let offset = limit * (page - 1)

        const params = {
            filter,
            page,
            limit,
            offset,
            callback(members) {
                const pagination = {
                    page,
                    total: Math.ceil(members[0].total / limit)
                }
                return res.render('members/index', {
                    members,
                    filter,
                    pagination
                })
            }
        }

        Members.paginate(params)
    },
    show(req, res) {
        Members.find(req.params.id, (members) => {
            members.age = age(members.birth)
            members.create_at = Intl.DateTimeFormat('BR').format(members.create_at)

            return res.render('members/show', {
                members
            })
        })
    },
    create(req, res) {
        Members.instructorsSelectOptions((options) => {
            return res.render('members/create', {
                instructors: options
            })

        })
    },
    post(req, res) {
        const keys = Object.keys(req.body)

        for (const key of keys) {
            if (req.body[key] == '') return res.send('Por Favor preencha todos os campos')
        }

        Members.create(req.body, () => {
            return res.redirect('/members')
        })
    },
    edit(req, res) {
        Members.find(req.params.id, (members) => {
            members.birth = date(members.birth).iso
            Members.instructorsSelectOptions((options) => {
                return res.render('members/edit', {
                    members,
                    instructors: options
                })

            })

        })
    },
    put(req, res) {
        Members.update(req.body, () => {
            return res.redirect(`members/${ req.body.id }`)

        })
    },
    delete(req, res) {
        Members.delete(req.body, () => {
            return res.redirect('/members')
        })
    },
}