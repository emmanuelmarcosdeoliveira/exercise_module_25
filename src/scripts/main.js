const alunos = ["Emmanuel"];
const meusAlunos = alunos.map(function (nomeAlunos) {
  return {
    nome: nomeAlunos,
    nota: 7,
  };
});

meusAlunos.push({
  nome: "Everton",
  nota: 4,
});

meusAlunos.push({
  nome: "João",
  nota: 9,
});

meusAlunos.push({
  nome: "Elisangela",
  nota: 5,
});
console.log(meusAlunos);

function filtrAlunos(minhasNotas) {
  return minhasNotas.nota >= 6;
}

const notasAcimadeSeis = meusAlunos.filter(filtrAlunos);
console.log(notasAcimadeSeis);
