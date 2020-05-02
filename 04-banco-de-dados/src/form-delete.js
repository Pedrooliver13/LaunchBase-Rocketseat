const formDelete = document.querySelector("#form-delete")

formDelete.addEventListener("submit" , (event) =>{
    const confirmantion = confirm('Deseja deletar?')

    if(!confirmantion) return event.preventDefault()
})