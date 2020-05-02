const instructors = [
    {
        nome: "Pedro",
        idade: 19
    },


    {
        nome: "Julio",
        idade: 19
    },
    {
        nome: "Luis",
        idade: 19
    },
    {
        nome: "César",
        idade: 19
    },
]

console.log(instructors[1].nome)

// ele vai esgotar os números do array que ele pode andar e vai mostrar o seguite
//por exemplo , tendo em mente que o array conta de 0(zero) para frente e que mandamons ele monstrar uma posição do array |
//vamos fazer ele dever um (-1), então quando ele começar a contar ele vai começar do -1  

//supondo um array com quantidade de 3 objetos(começando do zero é claro)
//então seria -1 , 0 , 1 , 2 , 3  //ele andaria as quatro posições e pararia no 3 que no caso é