const modalOverlay = document.querySelector('.modal_overlay')
const cards = document.querySelectorAll('.card')


for(let card of cards){
        card.addEventListener("click" , function(){
        const url_video = card.getAttribute('id') 
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('iframe').src =`https://www.youtube.com/embed/${url_video}`
    })
}

document.querySelector('.close-modal').addEventListener('click' , function(){
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('iframe').src = ''
})