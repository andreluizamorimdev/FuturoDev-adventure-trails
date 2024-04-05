import CardTrilha from "./components/CardTrilha";
import useFetch from "./hooks/useFetch";
import "./App.css";
import Header from "./components/Header";

function App() {

  const [listaTrilhas, loadingTrilhas] = useFetch("/listaTrilhas.json");

  return (
    <>
      <Header />
      <div className="container">
        <h1 className="titulo">Explore trilhas incríveis</h1>

        {loadingTrilhas && <p>Carregando trilhas...</p>}

        {!loadingTrilhas && listaTrilhas !== null && listaTrilhas.map((trilha, index) => (
          <CardTrilha dadosTrilha={trilha} key={index} />
        ))

        }

      </div>
    </>

  )
}

export default App
