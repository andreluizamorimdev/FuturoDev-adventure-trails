import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { TrilhasContextProvider } from "./context/TrilhasContext";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material";
import Footer from "./components/Footer";

const theme = createTheme({
 palette: {
  primary: {
   main: "#0a8721"
  },
  secondary: {
   main: "#D8E3D2"
  }
 }
});

function App() {
 return (
  <TrilhasContextProvider>
   <ThemeProvider theme={theme}>
    <Header />
    <Outlet />
    <Footer />
   </ThemeProvider>
  </TrilhasContextProvider>
 );
}

export default App;
