//OBJETIVO DA AULA :
//MARCA ALUNOS COMO REPROVADOS

var alunosTurmaA = [//ARRAY COM OBJETOS DENTRO
    {
        nome: 'Pedro',
        nota: 10
    }, {
        nome: 'Mayk',
        nota: 7
    }, {
        nome: 'Julio',
        nota: 2
    }
]

function marcarAlunosComoReprovado(aluno) {
    aluno.reprovado = false;
    if (aluno.nota < 5) {
        aluno.reprovado = true;
    }
}
function enviarMensagem(aluno) {
    if (aluno.reprovado) {
        console.log(`${aluno.nome} Reprovado!`)
    } else {
        console.log(`${aluno.nome} APROVADO ${aluno.nota}`)
    }
}
function filtraArray(alunos) {
    for (let aluno of alunos) {
        marcarAlunosComoReprovado(aluno)
        enviarMensagem(aluno)
    }
}

filtraArray(alunosTurmaA)