import React from 'react'
import CadastroDeUsuario from './CadastroDeUsuario'
import from './Usuarios'
import './App.css';
import from 'styled components'
import './App.css'

class App extends React.Component {
  state = {
class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.trocarDeTela}>Trocar de tela</button>
        <button className="troca-tela" onClick={this.trocarDeTela}>
          Trocar de tela
        </button>
        {this.state.telaExibir === 'Cadastro' ? (
          <CadastroDeUsuario />
        ) : (