# FE-assessment_Viloria

This project demonstrates a smooth, animated conic gradient flip effect using React and Tailwind CSS.  It's a simple and visually appealing way to create a dynamic transition between two states.

## Demo

[Link to your live demo (if available)]

## Screenshots

[Include screenshots or a GIF of the animation here]

## Technologies Used

*   **React:** A JavaScript library for building user interfaces.
*   **Tailwind CSS:** A utility-first CSS framework for rapidly styling web applications.

## Implementation Approach

The animation is achieved by manipulating the `conic-gradient` background property within CSS keyframes.  The core concept is to change the *starting position* of the colors in the gradient during the animation.  This creates the visual effect of the colors "spreading" or "flipping."

Here's a breakdown of the implementation:

1.  **Initial State:** The initial `conic-gradient` is set so that the desired color (e.g., white) is at the top of the element.

2.  **Keyframes:** The `@keyframes` rule defines the animation steps.  At each keyframe, the `conic-gradient` is adjusted.  The primary change is the `deg` values, which control the angle and position of the colors.  By progressively changing these degree values, we create the smooth transition.  Crucially, the *order* of the colors in the `conic-gradient` is reversed at the end of the animation to achieve the "flip."

3.  **Animation Application:** The `animate-flip-gradient` class is applied to the elements that should have the animation.  This class links the element to the defined `@keyframes` animation.  The `animation` property sets the duration, timing function, and other animation properties.

4.  **Responsiveness:** Tailwind CSS utility classes (e.g., `flex`, `w-1/2`, `md:flex-row`) are used to make the layout responsive.  The layout adapts to different screen sizes by changing the flex direction and widths of the elements.

5.  **Preventing Overlap:**  Padding and `box-sizing: border-box;` are used to prevent the rotated elements from overlapping each other. This ensures a clean and contained animation within the allocated space.

6.  **Hardware Acceleration:** `backface-visibility: hidden` and `transform-style: preserve-3d` are added to the CSS to encourage hardware acceleration, which significantly improves animation smoothness.  `will-change: background` is used cautiously, only if needed for performance optimization.

## Code Structure

src/
├── App.js         // Main React component
├── App.css        // Component-specific styles (if any)
└── index.css      // Global styles, Tailwind directives, root styles, and animation styles.
public/
└── index.html    // Main HTML file
package.json       // Project dependencies
tailwind.config.js // Tailwind configuration

## How to Run

1.  Clone the repository: `git clone [repository URL]`
2.  Install dependencies: `npm install` or `yarn install`
3.  Start the development server: `npm start` or `yarn start`

## Customization

*   **Animation Speed:** Adjust the `animation-duration` property in the `.animate-flip-gradient` class to change the animation speed.
*   **Colors:** Modify the color values in the `conic-gradient` definitions to change the colors of the animation.
*   **Keyframes:**  Refine the `@keyframes` rules further to adjust the animation's progression and create more complex effects.  Adding more keyframes can improve smoothness.
*   **Responsiveness:**  Customize the Tailwind CSS utility classes to adapt the layout to different screen sizes as needed.
*   **Gradient Center:** The `at` keyword in the `conic-gradient` can be used to change the center of the gradient.