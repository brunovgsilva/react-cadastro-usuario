import React from 'react'

import Main from '../templates/Main'

import './Home.css'

export default props =>
    <Main icon="home" title="Inicio" subtitle="SubTitulo" >
        <div className="display-4">Bem Vindo !</div>
        <hr />
        <p className="mb-0">Sistema de Cadastro</p>
    </Main>
