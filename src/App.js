import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MattressReviews } from "./components/MattressReviews";
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
			</Routes>
		</Router>
	);
}

export default App;
