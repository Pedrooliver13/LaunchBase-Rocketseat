const cards = document.querySelectorAll('.card')

for(const card of cards){
    card.addEventListener('click', function(){
        const videoId = card.getAttribute('id') 
        
        window.location = `/aulass?id=${ videoId }`
    })
}

/* MENU ATIVO */
const curretPage = location.pathname
const activeMenu = document.querySelectorAll('.links a')

for(const item of activeMenu){
    if(curretPage.includes( item.getAttribute('href') )){
        item.classList.add('active')

    }
}