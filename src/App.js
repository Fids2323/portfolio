import About from "./components/about";
import Contacts from "./components/contacts";
import Experience from "./components/experience";
import Home from "./components/home";
import NavBar from "./components/navBar";
import Portfolio from "./components/portfolio";
import SocialLinks from "./components/socialLinks";

function App() {
	return (
		<div>
			<NavBar />
			<Home />
			<About />
			<Portfolio />
			<Experience />
			<Contacts />
			<SocialLinks />
		</div>
	);
}

export default App;
