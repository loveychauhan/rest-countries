
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import './header.css';
import { ThemeProvider } from "./contexts/ThemeContext";



export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <Outlet />
    </ ThemeProvider>
  )
}
