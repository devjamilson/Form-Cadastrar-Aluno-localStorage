const ulAluno = document.getElementById('aluno')
let alunos = localStorage.getItem('alunos')

if(alunos){
    alunos = JSON.parse(alunos)
}else{
    alunos = []
}

listar()

function listar(){
    ulAluno.innerHTML = ''
    alunos.forEach((item, key) => {
        console.log(item, key);

        linha = document.createElement('li');
        let btnExcluir = `<button class='btnE'>E</button>`;
        let btnAtualizar = `<button class='btnA'>A</button>`;

        linha.innerHTML = "<span>Nome: " + item.nome + "</span>"+"<span>Sala: " + item.sala +"</span>"+"<span>CPF: " + item.cpf +"</span>" +"<span>Matricula: " + item.matricula +"</span>";
        ulAluno.appendChild(linha)
    });
}
