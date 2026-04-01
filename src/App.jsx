import "./App.css";
import Digital from "./Components/Digital/Digital";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Pricing from "./Components/Pricing/Pricing";
import Rating from "./Components/Rating/Rating";
import Steps from "./Components/Steps/Steps";



const getData = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

const getPromise = getData();

function App() {
  return (
    <>
      <header>
        <nav>
          <Navbar></Navbar>
        </nav>
      </header>
      <main>
        <Hero></Hero>
        <Rating></Rating>
        <Digital getPromise={getPromise}></Digital>
        
        <Steps></Steps>
        <Pricing></Pricing>
        <Footer></Footer>
      </main>
    </>
  );
}

export default App;
