import CardTrilha from "./components/CardTrilha";
import useFetch from "./hooks/useFetch";
import "./App.css";
import Header from "./components/Header";
import { useEffect, useState } from "react";

function App() {
 const [dados, isLoading] = useFetch("/listaTrilhas.json");
 const [trilhas, setTrilhas] = useState([]);

 useEffect(() => {
  if (!!dados) {
   setTrilhas(dados.trilhas);
  }
 }, [dados]);

 return (
  <>
   <Header />
   <div className="container">
    <h1 className="titulo">Explore trilhas incríveis</h1>

    {Array.isArray(trilhas) &&
     trilhas.map((trilha, index) => (
      <CardTrilha dadosTrilha={trilha} key={index} />
     ))}
   </div>
  </>
 );
}

export default App;
