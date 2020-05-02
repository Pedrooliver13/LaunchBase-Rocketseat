const alunosTurmaA = [
    {
        nome:'Pedro',
        nota:10
    },{
        nome:'Mayk',
        nota:3
    },{
        nome:'Julio',
        nota:10
    }
]
const alunosTurmaB = [
    {
        nome:'Diego',
        nota:8
    },{
        nome:'Jackson',
        nota:0
    },{
        nome:'Luis',
        nota:4
    }
]

function calcularMedia(alunos){
    soma = 0
    for(var i = 0;i < alunos.length ; i++){
        soma = soma + alunos[i].nota

    }
    var media = soma / alunos.length
    return media
}
calcularMedia(alunosTurmaA)



function enviarMensagem(media){
    if(media > 5){
        console.log(`A Média é ${media} . Parabéns!`)
        
    }else{
        console.log(`Você Está Abaixo da Média.`)
        
    }
}

enviarMensagem(calcularMedia(alunosTurmaA))