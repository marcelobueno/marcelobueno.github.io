import Home from "./components/home/home";
import Action from "./components/action/action";
import About from "./components/about/about";
import Informations from "./components/informations/informations";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer"; 

function App() {
  return (
	  <section>
		<Home />
		<Action />
		<About />
		<Informations />
		<Contact />
		<Footer />
	  </section>
  );
}

export default App;
