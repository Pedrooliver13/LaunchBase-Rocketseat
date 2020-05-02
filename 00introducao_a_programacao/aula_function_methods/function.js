const alunosTurmaA = [//CRIEI UMA VARIAVEL QUE RECEBE UMA ARRAY COM TRES OBJETOS
    {
        nome:'Pedro',
        nota:10
    },{
        nome:'Mayk' , 
        nota:10
    },{
        nome:'Julio',
        nota:10
    }
]
/* VARIAVEIS COM ARRAYS E OBJETOS */
const alunosTurmaB = [
    {
        nome:'Cesar',
        nota:7
    },{
        nome:'Luis',
        nota:4
    },{
        nome:'Diego',
        nota:8
    }
]
/* PARA REUTILIZAR CÓDIGO USE FUNCTIONS */

function calcularMedia(alunos){//ESSE PARAMETRO É USADO PARA SER REUTILIZADO 
    return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3//ELE TA SENDO FEITO PARA SER REUTILIZADO
}

 calcularMedia(alunosTurmaA)//ELE VAI SUBSTITUIR O NOME DO PARAMETRO PELO QUE EU ESCREVI NO ENTRE PARENTESE()
const media2 = calcularMedia(alunosTurmaB)//ELE VAI SUBSTITUIR O NOME DO PARAMETRO PELO QUE EU ESCREVI NO ENTRE PARENTESE()

//FICANDO ASSIM
//(alunosTurmaA[0].nome + alunosTurmaA[1].nome + alunosTurmaA[2].nome) / 3
//(alunosTurmaB[0].nome + alunosTurmaB[1].nome + alunosTurmaB[2].nome) / 3
//E COMO ELE É UMA VARIAVEL, QUE DIZER QUE ELE TEM ELEMENTOS DENTRO DELE QUE VÃO SER APROVEITADOS

function enviarMensagem(media , turma){
    if(media > 5){
        console.log(`${media} Parabéns Você Está Acima da Média ${turma}`)
    }else{
        console.log('Você está Fora da Média !')
    }
}
enviarMensagem(calcularMedia(alunosTurmaA))
enviarMensagem(media2 , 'turmas')