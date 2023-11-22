import React from 'react'
import styles from './Register.module.css'
import { useState, useEffect } from 'react'

const Register = () => {

  const[displayName, setDisplayName] = useState("")
  const[email, setEmail] = useState("")
  const[senha, setSenha] = useState("")
  const[confirmeSenha, setConfirmeSenha] = useState("")
  const[erro, setError] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault();

    setError("")

    const user = {
      displayName,
      email,
      senha,
    }

    if(senha !== confirmeSenha){
      setError("As senhas não são iguais")
      return
    }
  }

  return (
    <div>
      <h1>Faça seu cadastro</h1>
      <h2>Informe os mesmos dados do momento da matrícula</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome</span>
          <input type="text" name="displayName" required placeholder="Nome" value={displayName} onChange={(e)=>setDisplayName(e.target.value)}/>
        </label>
        <label>
          <span>Email</span>
          <input type="email" name="email" required placeholder="Seu email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </label>
        <label>
          <span>Senha</span>
          <input type="password" name="senha" required placeholder="Insira uma senha" value={senha} onChange={(e)=>setSenha(e.target.value)}/>
        </label>
        <label>
          <span>Confirme sua Senha</span>
          <input type="password" name="confirmeSenha" required placeholder="Confirme sua senha" value={confirmeSenha} onChange={(e)=>setConfirmeSenha(e.target.value)}/>
        </label>
        <button className='btn'>Cadastrar</button>
      </form>
    </div>
  )
}

export default Register