
export { Copa }

const url = 'https://estagio.geopostenergy.com/WorldCup/GetAllTeams'



class Copa {
  // 1º Consume Api
  getSelecoes(url) {
    fetch(url, {
      method: 'GET',
      headers: {
        'git-user': 'Gsantos99'
      }
    })
      .then(response => response.json())
      .then(response => {
        console.log(response)
        console.log('Peguei as seleções ')
        
      })
      .catch(e => {
        console.log(e)
      })
  }

  //2º Separa os grupos

  getGrupos() {
    console.log('Peguei os grupos')
    

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
copa.getSelecoes(url);

