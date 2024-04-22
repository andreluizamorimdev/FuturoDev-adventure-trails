import { styled } from "@mui/system";

export const PageContainer = styled("div")({
 display: "flex",
 flexDirection: "column",
 alignItems: "center",
 justifyContent: "center"
});

export const CardImageInicial = styled("div")({
 width: "100%",
 height: "80vh",
 display: "flex",
 flexDirection: "column",
 justifyContent: "center",
 alignItems: "center",
 background: "url('/image-trilha.svg')",
 backgroundSize: "cover",
 backgroundPosition: "center",
 backgroundRepeat: "no-repeat",
 color: "#fff",

 ":before": {
  content: '""',
  position: "absolute",
  top: 80,
  left: 0,
  right: 0,
  bottom: 104,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: 1
 }
});

export const Titulo = styled("h1")({
 display: "flex",
 justifyContent: "center",
 alignItems: "center",
 textWrap: "wrap",
 textAlign: "center",
 maxWidth: "35rem",

 position: "relative",
 zIndex: 2
});

export const ParagrafoInicio = styled("p")({
 display: "flex",
 justifyContent: "center",
 alignItems: "center",
 textWrap: "wrap",
 textAlign: "center",
 maxWidth: "35rem",

 position: "relative",
 zIndex: 2
});

export const CardContainer = styled("div")({
 display: "flex",
 flexDirection: "column",
 alignItems: "center",
 justifyContent: "center",
 padding: "2rem",
 gap: "1rem",
 zIndex: 2
});

export const CardExplorar = styled("div")({
 display: "flex",
 flexDirection: "column",
 alignItems: "flex-start",
 padding: "4rem",
 gap: "2rem"
});

export const CardExplorarTitulo = styled("h2")({
 fontSize: "2rem"
});

export const CardExplorarParagrafo = styled("p")({
 display: "flex",
 alignItems: "flex-start",
 textWrap: "wrap"
});

export const ButtonWrapper = styled("div")({
 alignSelf: "center"
});

export const CardCadastrarTrilha = styled("div")({
 display: "flex",
 flexDirection: "row",
 justifyContent: "space-araound",
 gap: "20rem",
 marginBottom: "3rem"
});

export const TituloWrapper = styled("div")({
 display: "flex",
 flexDirection: "column",
 alignItems: "flex-start",
 justifyContent: "space-between"
});

export const CardCadastrarTrilhaTitulo = styled("h2")({
 fontSize: "2rem",
 textWrap: "wrap",
 maxInlineSize: "25rem"
});

export const ImageCardCadastrarTrilha = styled("img")({
 width: "40rem",
 height: "auto"
});
