import { useContext } from "react";
import CardTrilha from "../components/CardTrilha";
import { TrilhasContext } from "../context/TrilhasContext";
function PaginaListaTrilhas() {
 const { trilhas, isLoading } = useContext(TrilhasContext);

 return (
  <div className="container">
   <h1 className="titulo">Explore trilhas incríveis</h1>

   {isLoading && <p>Carregando trilhas...</p>}

   {!isLoading &&
    Array.isArray(trilhas) &&
    trilhas.map((trilha, index) => (
     <CardTrilha dadosTrilha={trilha} key={index} />
    ))}
  </div>
 );
}

export default PaginaListaTrilhas;
