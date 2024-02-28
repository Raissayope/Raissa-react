import { Header } from './conponentes/Header'
import './App.css'
import { Contador } from './conponentes/contador'
import { Lista } from './conponentes/Lista/Iindex'
import { Footer } from './conponentes/Footer'
import { Banner } from './conponentes/Banner'


function App() {
  return (
    <>
     <Header title="Projeto React" subTitulo="sub titulo" />

      <main className="container"> 
        <h1>Conteudo do Projeto React</h1>

        <div>
          <a href="#">vai para contato</a>
        </div>

        <Contador/>

       <Lista />

       <Banner />

      </main>

      <Footer />
    </>
  )
}

export default App
