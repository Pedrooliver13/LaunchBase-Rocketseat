 //LÓGICA DE IDADE'
module.exports = {
    age(time){
			const today = new Date()
			const birthDate = new Date(time)

			let age = today.getFullYear() - birthDate.getFullYear()//IDADE BRUTA
			const month = today.getMonth() - birthDate.getMonth()

			if(month < 0 || month == 0 && today.getDate() < birthDate.getDate()){
				age = age - 1
			}//condição para caso ainda não fez aniversário

			return age
    },
    date(timestap){
        const data = new Date( timestap )
        const year  = data.getUTCFullYear()
        const month = `0${data.getUTCMonth()}`.slice(-2)
        const day = `0${data.getUTCDate()}`.slice(-2) 

        return{
            iso:`${year}-${month}-${day}`,
            birthDate:`${day}/${month}/${year}`
        } 
            
    }


}//exports
