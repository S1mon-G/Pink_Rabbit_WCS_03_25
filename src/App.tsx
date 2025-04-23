import { Outlet } from "react-router";

import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import "./App.css";

function App() {
	
	
	//* const [cocktailList, setCocktailList] = useState([]);

	async function getCocktails (){
	const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`");
	const data = await response.json();
	setCocktailList(data.cocktails)*//

	
}
	return (
		<>
			<Header />
			<Outlet />
			<Nav />
		</>
	);
}

export default App;
