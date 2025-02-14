import { motion } from "motion/react"
import './index.css';

function App() {
	
	return (
		<div className="gradient-container w-screen h-screen  flex flex-row justify-center items-center">
			<motion.div
				initial={{ 'background': 'conic-gradient(from 90deg at 40% 70%, #fff, #000)' }}
				animate={{ 'background': 'conic-gradient(from 90deg at 40% 70%, #000, #fff)' }}
				transition={{ duration: 0.5, delay: .7 }}
				className="w-full h-full"
			>
			</motion.div>
			<motion.div
				initial={{ 'background': 'conic-gradient(from 270deg at 60% 70%, #000, #fff)' }}
				animate={{ 'background': 'conic-gradient(from 270deg at 60% 70%, #fff, #000)' }}
				transition={{ duration: 0.5, delay: .7 }}
				className="w-full h-full"
			>
			</motion.div>
    	</div>
	)
}

export default App;