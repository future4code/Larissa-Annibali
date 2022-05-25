import React from 'react'
import axios from 'axios'
import Usuarios from '../Usuarios'
import styled from 'styled-components'
import './App.css'

class NovoUsuario extends React.Component {
@@ -49,7 +50,7 @@ class NovoUsuario extends React.Component {

  render() {
    return (
      <div>
      <div className="cadastro">
        <input
          placeholder="Nome"
          type="text"