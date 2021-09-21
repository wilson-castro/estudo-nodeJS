const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
  const funcionarios = [...response.data]
  const arrayFuncionarios = funcionarios.concat(funcionarios)

  const getFuncionariosChineses = funcionario => funcionario.pais == 'China'
  const getMulheres = pessoa => pessoa.genero == 'F'
  const getMenorSalario = (acumulador, valorAtual) => {
    const menorSalario = Math.min(acumulador.salario, valorAtual.salario)
    return menorSalario == acumulador.salario ? acumulador : valorAtual
  }

  console.log(arrayFuncionarios
    .filter(getFuncionariosChineses)
    .filter(getMulheres)
    .reduce(getMenorSalario))

})

