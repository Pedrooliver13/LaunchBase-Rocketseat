const currentPages = location.pathname
const activeMenu = document.querySelectorAll('header .links a')

for (let item of activeMenu) {
    if (currentPages.includes(item.getAttribute('href'))) {
        item.classList.add('active')
    }
}

function paginate(selectedPage, totalPages) {
    let page = [],
        oldPage


    for (currentPage = 1; currentPage <= totalPages; currentPage++) {
        const FirstAndLastPages = currentPage == 1 || currentPage == totalPages
        const pageAfterSelectedPages = currentPage <= selectedPage + 2
        const pageBeforeSelectedPages = currentPage >= selectedPage - 2

        if (FirstAndLastPages || pageAfterSelectedPages && pageBeforeSelectedPages) {
            if (oldPage && currentPage - oldPage > 2) {
                page.push('...')
            }
            if (oldPage && currentPage - oldPage == 2) {
                page.push(oldPage + 1)
            }


            page.push(currentPage)
            oldPage = currentPage
        }

    }
    return page
}
/* ADICIONANDO DINAMICAMENTE NO HTML COM JAVASCRIPT */
function createPagination(pagination) {
    
    const page = +pagination.dataset.page
    const total = +pagination.dataset.total

    const pages = paginate(page, total)

    let elements = ""

    for (let page of pages) {
        if(String(page).includes('...')){
            elements += `<span>${page}</span>`
        }else{
            elements += `<a href="?page=${page}">${page}</a>`

        }
    }
    pagination.innerHTML = elements
}

let pagination = document.querySelector(".pagination")

if(pagination){
    createPagination(pagination)
}