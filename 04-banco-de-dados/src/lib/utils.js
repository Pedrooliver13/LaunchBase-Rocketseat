module.exports = {
    age(timestap){
        const today = new Date()
        const birthDate = new Date(timestap)

        let age = today.getFullYear() - birthDate.getFullYear() //Idade Bruta

        const month = today.getMonth() - birthDate.getMonth() // 0 janeiro e 11 Dezembro

        if(month < 0 || month == 0 && today.getDate() <= birthDate.getDate() ){
            age = age - 1
        }

        return age
    },
    date(timestap){
        const data = new Date(timestap)

        const year = data.getUTCFullYear()

        const month = `0${ data.getUTCMonth() + 1 }`.slice(-2)

        const day = `0${ data.getUTCDate() }`.slice(-2)

        return {
            iso:`${ year }-${ month }-${ day }`,
            birthDate: `${ day }/${ month }/${ year }`
        }
    }

} 