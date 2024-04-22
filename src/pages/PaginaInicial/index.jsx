import * as Styled from "./home.style";
import { Button } from "@mui/material";
import ImagemTrilha from "../../assets/image.png";
import { useNavigate } from "react-router-dom";

function PaginaInicial() {
 const navigate = useNavigate();

 function goToListaTrilhas() {
  navigate("/lista-trilhas");
 }

 function goToCadastroTrilha() {
  navigate("/cadastro-trilha");
 }
 return (
  <Styled.PageContainer>
   <Styled.CardImageInicial>
    <Styled.CardContainer>
     <Styled.Titulo>Que tal aproveitar um tempo com a natureza?</Styled.Titulo>
     <Styled.ParagrafoInicio>
      Junte-se à comunidade de entusiastas ao ar livre, compartilhe suas
      aventuras e inspire-se com as experiências de outros aventureiros.
      Prepare-se para explorar novos horizontes e se conectar com a natureza
      através do Adventure Trails!
     </Styled.ParagrafoInicio>
     <Button
      variant="contained"
      color="primary"
      onClick={() => goToListaTrilhas()}>
      Explorar trilhas
     </Button>
    </Styled.CardContainer>
   </Styled.CardImageInicial>
   <Styled.CardExplorar>
    <Styled.CardExplorarTitulo>
     Explore trilhas incríveis
    </Styled.CardExplorarTitulo>
    <Styled.CardExplorarParagrafo>
     O Adventure Trails FD é seu portal para explorar e compartilhar as melhores
     trilhas para trekking e ciclismo ao redor do mundo. Descubra rotas
     deslumbrantes, desde caminhos tranquilos por florestas exuberantes até
     trilhas desafiadoras em montanhas majestosas. Encontre informações
     detalhadas sobre cada trilha, incluindo distância, dificuldade, pontos de
     interesse naturais e dicas úteis para uma experiência eco-friendly.
    </Styled.CardExplorarParagrafo>
    <Styled.ButtonWrapper>
     <Button
      variant="contained"
      color="primary"
      onClick={() => goToListaTrilhas()}>
      Explorar trilhas
     </Button>
    </Styled.ButtonWrapper>
   </Styled.CardExplorar>
   <Styled.CardCadastrarTrilha>
    <Styled.TituloWrapper>
     <Styled.CardCadastrarTrilhaTitulo>
      Compartilhe fotos, dicas e localização das suas trilhas favoritas
     </Styled.CardCadastrarTrilhaTitulo>
     <Button
      variant="contained"
      color="primary"
      onClick={() => goToCadastroTrilha()}>
      Cadastrar nova trilha
     </Button>
    </Styled.TituloWrapper>
    <Styled.ImageCardCadastrarTrilha
     src={ImagemTrilha}
     alt="Imagem de uma trilha com uma estrada estreita com varias arvores no caminho"
    />
   </Styled.CardCadastrarTrilha>
  </Styled.PageContainer>
 );
}

export default PaginaInicial;
