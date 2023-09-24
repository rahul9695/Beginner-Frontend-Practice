# Preview Link

https://rahul9695.github.io/Intermediate-Frontend-Projects/HTML-CSS/Card-Animations/index.html

## Overview
- This project will help you in learning and understadning the animations concepts of Cascading Style Sheet. You will learn properties like :hover, transition, transform, rotateY(), perspective(), Opacity etc..

## HTML Explanation

- The HTML code represents a web page with a title and a container for images.
- It uses HTML5 with a specified language of English.
- The `<head>` section is where metadata and the page title are defined.
- The page title is set to "Card Animation || CSS-Animations-Learning."
- The page links an external CSS file using `<link rel="stylesheet">`.
- The CSS file is referenced as "styles.css."
- The `<body>` section contains the content of the web page.
- Inside the `<body>`, there is a `<div>` element with the class "card-container."
- Within the "card-container," there are three `<img>` elements with different image sources and alt text.
- These images are used as card images.
- The images are loaded from external URLs.

## CSS Explanation

- The `*` selector is used to apply styles to all elements on the page. In this case:
  - `margin: 0;` removes all margins.
  - `padding: 0;` removes all padding.
  - `box-sizing: border-box;` makes sure that an element's padding and border are included in its total width and height.

- The `body` selector applies styles to the `<body>` element:
  - `background-color: black;` sets the background color of the entire page to black.
  - `min-height: 100vh;` ensures that the body takes up at least the full viewport height.
  - `display: grid;` uses CSS Grid for layout.
  - `place-content: center;` centers the content both horizontally and vertically within the grid container.

- The `.card-container` selector styles the container `<div>` with the class "card-container":
  - `display: flex;` makes the container a flex container, allowing its children to be flex items.
  - `justify-content: space-between;` evenly spaces the flex items along the horizontal axis, pushing them to the edges.

- The `.card-container img` selector styles the images within the "card-container":
  - `max-width: 350px;` limits the maximum width of the images to 350 pixels.
  - `transform-origin: center;` sets the transformation origin to the center of the images.
  - `transform: perspective(800px) rotateY(20deg);` applies a 3D rotation effect to the images, making them appear tilted.
  - `transition: 0.5s;` adds a smooth transition effect with a duration of 0.5 seconds.
  - `box-shadow: 0px 0px 8px grey;` adds a subtle shadow to the images.
  - `border-radius: 5px;` rounds the corners of the images.
  - `opacity: 1;` sets the initial opacity of the images to fully visible.

- The `.card-container:hover img` selector styles the images within the "card-container" when the container is hovered:
  - `opacity: 0.35;` reduces the opacity of the images to 0.35, making them semi-transparent.

- The `.card-container img:hover` selector styles the images themselves when they are individually hovered:
  - `transform: none;` resets the transformation, removing the tilt effect.
  - `opacity: 1;` restores full opacity, making the images fully visible again.

These styles create a visually appealing card animation where the images tilt and become semi-transparent when the container is hovered, and return to their original state when individually hovered.
