const paginas = require('./paginas')
export { Copa, starCopa }

// Seleção de botões da página 
const url = 'https://estagio.geopostenergy.com/WorldCup/GetAllTeams'
const starCopa = document.querySelector('.startCopa');

// Seleção dos grupos 
const grupoAresultado =  document.querySelector('.grupoAresultado');





class Copa {
  // 1º Consumo de Api
  getSelecoes(url) {
    fetch(url, {
      method: 'GET',
      headers: {
        'git-user': 'Gsantos99'
      }
    })
      .then(response => {
        return response.json()
      })
      .then(jsonData => {
        let data = jsonData
        return data
      })
      .then(data => {
        const selecoes = [...data['Result']]
        return this.getGrupos(selecoes)
      })
      .catch(e => {
        console.log(e)
      })
  }

  //2º Separar os grupos (aleatoriamente)

  getGrupos(selecoes) {

    // Checagem de chamada de function
    console.log('Estou no getGrupos')

    // Coloco os valores (objetos das seleções) em uma variável
    const nomeSelecao = Object.values(selecoes)
    
    // Selecione de maneira aleatória um elemento dentro do array de objetos 
    let selecaoAleatoria = () => { return this.getSelecaoAleatoria(nomeSelecao)}
   
   // Separar seleções em grupos
   console.log(selecaoAleatoria());

  // Grupos (arrays)

  let grupoA = [];
  let grupoB = [];
  let grupoC = [];
  let grupoD = [];


    
   for(let i = 0; i < nomeSelecao.length; i++) {
    if(grupoA.length >= 0 && grupoA.length < 4 ) {
     
      let selecao = document.createElement('li');
       selecao = selecaoAleatoria()
      //  console.log(selecao) 

    }
   }
   
   
   

  }

  

  getNumeroAleatorio(min, max) {
    let numero = Math.floor(Math.random() * (max - min) + min)
    return numero
  }

  getSelecaoAleatoria(array) {
    let indexAleatorio = Math.floor(Math.random() * array.length)
    let elementoAleatorio = array[indexAleatorio];
    return elementoAleatorio
  }

  // 3º Realizar partidas
  getPartida() {
    console.log('Fazer partidas')
  }

  // 4º Realizar as rodadas
  getRodadas() {
    console.log('Fazer as rodadas')
  }

  // 5º Contabilizar pontuações
  getPontuacao() {
    console.log('Realizar pontuação')
  }
}

let copa = new Copa()
copa.getSelecoes(url)
