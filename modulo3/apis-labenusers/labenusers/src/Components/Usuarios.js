import React from 'react'
import from 'axios'
import from 'styled-components'
import './App.css'

class Usuarios extends React.Component {{{(
        alert('Usuário apagado!')
      })
      .catch(error => {
        alert('ERRO AO APAGAR USUARIO')
        alert('Não foi possível apagar esse usuário!')
      })
  }


  render() {
    return (
      <div className="list">
        <div>
          <ul>
            {this.state.cadastros.map((nomes, index) => {
              return (
                <li key={index}>
                  {nomes.name} {nomes.email}
                  <button onClick={() => this.deletaUsuario(nomes.id)}>
                    X
                  </button>
                  <img
                    src=""
                    onClick={() => this.deletaUsuario(nomes.id)}
                  />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default NovoUsuario