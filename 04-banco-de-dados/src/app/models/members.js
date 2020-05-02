const db = require('../../config/db')
const { date } = require('../../lib/utils')

module.exports = {
    all(callback) {
        db.query(`SELECT * FROM members`, (err, results) => {
            if (err) throw `Database is ${err}`

            callback(results.rows)
        })
    },
    create(data, callback) {
        const query = `
        INSERT INTO members (
            name,
            avatar_url,
            email,
            sex,
            birth,
            blood,
            weight,
            height,
            create_at,
            instructors_id
        )VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
        RETURNING id
        `
        const values = [
            data.name,
            data.avatar_url,
            data.email,
            data.sex,
            date(data.birth).iso,
            data.blood,
            data.weight,
            data.height,
            date(Date.now().iso),
            data.instructor,
        ]

        db.query(query, values, (err, results) => {
            if (err) throw `Database is ${err}`

            callback(results.rows[0])
        })
    },
    find(id, callback) {
        db.query(`
        SELECT members.*, instructors.name AS instructors_name
        FROM members
        LEFT JOIN instructors ON (instructors.id = instructors_id) 
        WHERE members.id = $1`, [id], (err, results) => {
            if (err) throw `Database is ${err}`

            callback(results.rows[0])
        })
    },
    findBy(filter ,callback){
        db.query(`
        SELECT *
        FROM members
        WHERE members.name ILIKE '%${filter}%'
        ` , (err ,results)=>{
            if(err) throw `Database is ${err}`

            callback(results.rows)
        })
    },
    update(data, callback) {
        const query = `
        UPDATE members SET
            name=($1),
            avatar_url=($2),
            email=($3),
            sex=($4),
            birth=($5),
            blood=($6),
            weight=($7),
            height=($8),
            instructors_id=($9)
        WHERE id = $10
        `
        const values = [
            data.name,
            data.avatar_url,
            data.email,
            data.sex,
            date(data.birth).iso,
            data.blood,
            data.weight,
            data.height,
            data.instructor,
            data.id
        ]

        db.query(query , values , (err, results)=>{
            if(err) throw `Database is ${err}`

            callback()
        })
    },
    delete(id , callback){
        db.query(`DELETE members WHERE id = $1` , [id] , (err , results)=>{
            if(err) throw `Database is ${err}`

            callback()
        })
    },
    paginate(params){
        let { filter , limit , offset , callback } = params 

        let query = "",
            filterQuery= "",
            totalQuery=`(
                SELECT count(*)
                FROM members
            ) AS total`

        if(filter){
            filterQuery = `
            WHERE members.name ILIKE '%${filter}%'
            `
            totalQuery = `( 
            SELECT count(*)
            FROM members
            ${filterQuery}
            )AS total`
            
           
        }
        query = `
        SELECT members.*,${totalQuery}
        FROM members
        ${filterQuery}
        LIMIT $1 OFFSET $2
        `
        
        db.query(query , [limit , offset] , (err, results)=>{
            if(err) throw `Database is ${err}`

            callback(results.rows)
        })
    },
    instructorsSelectOptions(callback){
        db.query(`SELECT name,id FROM instructors` , (err ,results)=>{
            if(err) throw `Database is ${err}`

            callback(results.rows)
        })
    }
}