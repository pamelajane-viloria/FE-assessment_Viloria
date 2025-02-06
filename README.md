# FE-assessment_Viloria

This project demonstrates an animated conic gradient animation effect using ReactJS with Vite and Tailwind CSS. It's a simple approach to the given animation design from Figma

## Demo

https://fe-assessment-viloria.vercel.app/


## Technologies Used

*   **React:** A JavaScript library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.
*   **Tailwind CSS:** A utility-first CSS framework for rapidly building custom user interfaces.

## Implementation Approach

In order to achieve the animation from Figma, it is a must to manipulate the `conic-gradient` background propert to create a thin looking line that has light and shadow on the top and bottom respectively. 

Here's a breakdown of the implementation:

1.  **Initial State:** The initial `conic-gradient` is set so that the desired colors and adjust the angles of each in order to simulate the "light" and "shadow" of the element.  

2.  **Keyframes:** The `@keyframes` is the step by step animation that replicates a flipping animation. Each keyframe, the `conic-gradient` is adjusted.  The change consists of updating the `deg` values, which control the angle and position of the colors.  

3.  **Animation Application:** The `animate-flip-gradient` class is applied to the elements that is involved in the animation. The `animation` property sets the duration, timing function, and other animation properties.

4.  **Responsiveness:** Tailwind CSS utility classes (e.g., `flex`, `w-1/2`, `md:flex-row`) are used to make the layout responsive. Media queries were also used to manipulate the position of the `conic-gradient`. 

## How to Run

1.  Clone the repository: `git clone [repository URL]`
2.  Install dependencies: `npm install` or `yarn install`
3.  Start the development server: `npm start` or `yarn start`