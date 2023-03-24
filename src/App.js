import { AiOutlineSearch } from 'react-icons/ai'
import '../src/styles.css'

function App() {
  return (
    <>
      <div className="container">
        <h1 className="title">Buscar CEP!</h1>

        <div className="containerInput">
          <input type="text" placeholder="Digite seu cep..." />

          <button className="buttonSearch">
            <AiOutlineSearch size={25} color="#000" />
          </button>
        </div>

        <main className="main">
          <h2>CEP: 098715000</h2>

          <span>Rua: teste da silveira</span>
          <span>Complemento teste</span>
          <span>Tristan</span>
          <span>Lut Golhien</span>
        </main>
      </div>
    </>
  )
}

export default App
