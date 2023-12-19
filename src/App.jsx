import { useState } from 'react'
import api from './api/api'
import img from './assets/caminhao-de-entrega.png'
import { Body, ContainerMain } from './components/BuscadorCEP/style'


const App = () => {
  const [input, setInput] = useState('')
  const [cep, setCep] = useState({})

  async function handleSearch() {
    if (input === '' || setCep.cep === '') {
      alert('Preencha algum cep!')
      alert(cep.cep)
      return
    }

    try {
      const response = await api.get(`${input}/json/`)
      setCep(response.data)
      setInput('')
    } catch (error) {
      alert('Ops, erro na app')
      setInput('')
      return
    }
  }
  return (
    <>
    <Body>
    <ContainerMain>
      <h1 className="title">Buscador CEP</h1>

      <img src={img} alt="" />

      <div className="containerInput">

        <input
          type="text"
          placeholder="Digite seu CEP"
          value={input}
          onChange={e => setInput(e.target.value)}
          maxLength="8"
        ></input>

        <button className='botão' onClick={handleSearch}>Pesquisar CEP
        </button>
      </div>
      <p className="avisoNumeros">Apenas Números</p>

      {Object.keys(cep).length > 0 && (
        <main className="main">
          <h2>CEP: {cep.cep}</h2>
          <span>{cep.logradouro}</span>
          <span>Bairro: {cep.bairro}</span>
          <span>Cidade: {cep.localidade}</span>
          <span>Estado: {cep.uf}</span>
        </main>
      )}
      </ContainerMain>
      </Body>
      </>
  )
}

export default App;
