import { useState, useEffect } from 'react'
import './App.css'
import './index.css';
import { motion } from "motion/react"

function App() {
	const [isFlipped, setIsFlipped] = useState(false);

	useEffect(() => {
	  setTimeout(() => setIsFlipped(true), 100); // Delay for smooth animation
	}, []);
	
	return (

		<div className="w-screen h-screen overflow-hidden flex ">
			<div className={`left w-1/2 ${ isFlipped ? "animate-flip-gradient" : "" }`}></div>
			<div className={`right w-1/2 ${ isFlipped ? "animate-flip-gradient" : "" }`}></div>
    	</div>
	)
}

export default App
