import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import '../src/styles.css'

import api from './services/api.js'

function App() {
  const [input, setInput] = useState('') //valor inicial.
  //    [state name, função para trocar o valor do estado]
  //Quando chama o input é para saber o valor atual do estado.
  //Quando chama a função setInput para passar o novo valor que foi alterado e salvar no estado.
  //Para isso acontecer, fiz uma conexão criando uma com a propriedade value na tag do input.
  //E criei um evento onChange(em mudança) no valor alterado, passando para o useState.

  const [cep, setCep] = useState({})

  async function btnSearch() {
    if (input === '') {
      alert('Preencha algum CEP')
      return
    }

    try {
      const response = await api.get(`${input}/json`)
      setCep(response.data)
      setInput('') //para que depois do alert o input fique vazio novamente(seu estado inicial).
    } catch {
      alert('Ops! CEP não encontrado, tente novamente.')
      setInput('') //para que depois do alert o input fique vazio novamente(seu estado inicial).
    }
  }

  return (
    <>
      <div className="container">
        <h1 className="title">Buscar CEP!</h1>

        <div className="containerInput">
          <input
            type="text"
            placeholder="Digite seu cep..."
            value={input}
            onChange={event => setInput(event.target.value)}
          />

          <button className="buttonSearch" onClick={btnSearch}>
            <AiOutlineSearch size={25} color="#000" />
          </button>
        </div>

        {/* Para A TAG  main ficar escondida e só aparecer quando o usuário digitar um Cep valido. */}
        {Object.keys(cep).length > 0 && (
          <main className="main">
            <h2>CEP: {cep.cep}</h2>

            <span>{cep.logradouro}</span>
            <span>{cep.bairro}</span>
            <span>Cidade: {cep.localidade}</span>
            <span>Estado: {cep.uf}</span>
          </main>
        )}
      </div>
    </>
  )
}

export default App
