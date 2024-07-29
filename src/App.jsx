import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Message from "./components/Message";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <Banner></Banner>
        <About></About>
        <Experience></Experience>
        <Message></Message>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
