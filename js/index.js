const form = document.querySelector('form')
let alunos = localStorage.getItem('alunos')

if(alunos){
    alunos = JSON.parse(alunos)
}else{
    alunos = []
}

form.addEventListener('submit', function(e){
    
    e.preventDefault()

    let novoAluno = new Object()
    novoAluno.nome = this.nome.value
    novoAluno.cpf = this.cpf.value
    novoAluno.matricula = this.matricula.value
    novoAluno.sala = this.sala.value


    alunos.push(novoAluno)
    this.reset()

    localStorage.setItem('alunos', JSON.stringify(alunos))

})

