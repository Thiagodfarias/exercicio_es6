const alunos = [
    { nome: 'Alice', nota: 7 },
    { nome: 'Roberto', nota: 5 },
    { nome: 'Carol', nota: 8 },
    { nome: 'David', nota: 6 },
    { nome: 'Viviane', nota: 9 }
];

const alunosAprovados = alunos.filter(aluno => aluno.nota >= 6);

console.log(alunosAprovados);