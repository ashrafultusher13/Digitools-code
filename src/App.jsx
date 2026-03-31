import "./App.css";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Rating from "./Components/Rating/Rating";

function App() {
  return <>
  <header>
    <nav>
      <Navbar></Navbar>
    </nav>
  </header>
  <main>
    <Hero></Hero>
    <Rating></Rating>
  </main>
  </>;
}

export default App;
