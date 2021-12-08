import React, { useState } from "react";
import List from "./List";
import Data from "./Data";

function App() {
	const [people, setPeople] = useState(Data);

	return (
		<main>
			<section className="container">
				<h3>{people.length} Birthday today</h3>
				<List props={people} />
				<button onClick={() => setPeople([])}>Clear All</button>
			</section>
		</main>
	);
}
export default App;
