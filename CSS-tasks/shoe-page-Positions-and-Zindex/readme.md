# Demo Link
https://rahul9695.github.io/Beginner-Frontend-Practice/CSS-tasks/shoe-page-Positions-and-Zindex/index.html

# UI Screeenshot
![Untitled-2023-08-18-2214](https://github.com/rahul9695/Beginner-Frontend-Practice/assets/120627949/838ab487-c3dc-47d2-9987-43610c4d5579)

# Explanation
| Selector                 | Property-Value Pairs                                          | Explanation                                              |
| ------------------------ | ------------------------------------------------------------- | -------------------------------------------------------- |
| `*`                      | `margin`: 0;<br>`padding`: 0;<br>`box-sizing`: border-box;   | Resets the margin and padding for all elements and uses `box-sizing` to include padding and border in the element's total width and height. |
| `body`                   | `background-color`: lightgrey;                                | Sets the background color of the entire webpage body to light grey. |
| `.container`             | `width`: 100%;<br>`height`: 100vh;<br>`position`: relative;   | Styles the container element to occupy the full viewport width and height with relative positioning. |
| `.container::after`      | `content`: "";<br>`position`: absolute;<br>`inset`: 0;<br>`transform`: skewY(10deg);<br>`background`: linear-gradient(...);<br>`z-index`: -1;<br>`box-shadow`: 0px 0px 10px black; | Creates a pseudo-element after `.container` with absolute positioning, a skewed background gradient, and a box shadow to add a visual effect. |
| `.shoe`                  | `width`: 85%;<br>`height`: 75%;<br>`padding`: 2%;<br>`margin`: auto;<br>`margin-top`: 7.5%;<br>`box-shadow`: 0px 0px 10px black;<br>`background`: linear-gradient(...); | Styles `.shoe` elements with specific dimensions, padding, margin, box shadow, and a linear gradient background. |
| `.description`           | `max-width`: 40%;<br>`color`: rgb(0, 0, 0);                   | Sets the maximum width and text color for elements with class `.description`. |
| `.description > h1`      | `font-size`: xx-large;<br>`margin-bottom`: 30px;             | Styles `h1` elements inside `.description` with an extra-large font size and margin. |
| `.description > p`       | `font-size`: large;<br>`margin-bottom`: 50px;<br>`line-height`: 20px;<br>`font-size`: 1.1em; | Styles `p` elements inside `.description` with a large font size, margin, line height, and a font size override. |
| `.shoe-1`                | `position`: absolute;<br>`right`: 8%;<br>`top`: 27%;<br>`width`: 600px;<br>`height`: 320px; | Styles elements with class `.shoe-1` with absolute positioning and specific dimensions. |
| `.shoe-1:hover`          | `width`: 850px;<br>`height`: 450px;<br>`top`: 20%;            | Styles elements with class `.shoe-1` when hovered with larger dimensions and adjusted top position. |
| `.rotate`                | `-webkit-transform`: scaleX(-1);<br>`-moz-transform`: scaleX(-1);<br>`-o-transform`: scaleX(-1);<br>`transform`: scaleX(-1); | Applies a transformation to elements with class `.rotate` to horizontally flip them. |
