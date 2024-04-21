// Filename - App.js

// Importing modules
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("/rooms") 
			.then((res) => res.json())
			.then((data) => {
				setData(data);
			})
			.catch((error) => console.error('Error fetching room data:', error));
	}, []);

	return (
		<div className="w-[100%] h-[100vh] bg-main bg-cover bg-black/20">
			{/* {data.map((room) => (
				<div key={room.szobaszam}>
					<p>Szobaszám: {room.szobaszam}</p>
					<p>Ár: {room.ar}</p>
					<p>Típus: {room.tipus}</p>
					<p>Kilátás: {room.kilatas}</p>
				</div>
			))} */}
		</div>
	);
}

export default App;
