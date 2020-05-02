/* VAR OBJETOS DENTRO DE UMA ARRAY */
//NUNCA ESQUEÇA DA VIRGULA!
const alunos = [
    {
        nome:'Pedro',
        nota:10
    },{
        nome:'Mayk',
        nota:5
    },{
        nome:'Julio',
        nota:2
    }
]

const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
console.log(`A Média dos Alunos é de ${media}`)

/* USANDO APENAS A ARRAY */
const array = ['Pedro' , 'Mayk' , 'Julio']

console.log(array)