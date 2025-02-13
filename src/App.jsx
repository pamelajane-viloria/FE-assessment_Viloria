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
			<div className={`left-panel w-full 2xl:h-[640px] xl:h-[400px] lg:h-[260px] md:h-[200px] h-[110px] ${ isFlipped ? "animate-flip-gradient" : "" }`}></div>
			<div className={`right-panel w-full 2xl:h-[640px] xl:h-[400px] lg:h-[260px] md:h-[200px] h-[110px] ${ isFlipped ? "animate-flip-gradient" : "" }`}></div>
    	</div>
	)
}

export default App;