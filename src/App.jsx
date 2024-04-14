import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { TrilhasContextProvider } from "./context/TrilhasContext";
import "./App.css";

function App() {
 return (
  <TrilhasContextProvider>
   <Header />
   <Outlet />
  </TrilhasContextProvider>
 );
}

export default App;
