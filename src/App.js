import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MattressReviews from "./components/MattressReviews";
import CouchReviews from "./components/CouchReviews";
import HomePage from "./components/HomePage";
import TopBar from "./components/layout/TopBar";

function App() {
	return (
		<Router>
			<TopBar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route
					path="/best-mattresses-on-amazon"
					element={<MattressReviews />}
				/>

				<Route path="/best-couches-on-amazon" element={<CouchReviews />} />
			</Routes>
		</Router>
	);
}

export default App;
