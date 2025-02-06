import { useState, useEffect } from 'react';
import './index.css';

function App() {
	const [isFlipped, setIsFlipped] = useState(false);

	// Delay for better transition
	useEffect(() => {
		const timer = setTimeout(() => setIsFlipped(true), 100); 
		return () => clearTimeout(timer);
	}, []);
	
	return (
		<div className="gradient-container reltative w-screen h-screen overflow-hidden flex flex-row justify-center items-center">
			<div className={`left-panel w-1/2 md:h-full h-1/3 ${ isFlipped ? "animate-flip-gradient" : "" }`}></div>
			<div className={`right-panel w-1/2 md:h-full h-1/3 ${ isFlipped ? "animate-flip-gradient" : "" }`}></div>
    	</div>
	)
}

export default App;