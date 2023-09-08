# Demo Link

https://rahul9695.github.io/Beginner-Frontend-Practice/CSS-tasks/coffee-house-homepage/index.html

# Explanation

| Selector             | Property-Value Pairs                                          | Explanation                                              |
| -------------------- | ------------------------------------------------------------- | -------------------------------------------------------- |
| `*`                  | `margin`: 0;<br>`padding`: 0;<br>`box-sizing`: border-box;   | Resets the margin and padding for all elements and uses `box-sizing` to include padding and border in the element's total width and height. |
| `body`               | `background-color`: rgb(165, 42, 42, 0.2);                    | Sets the background color of the entire webpage body to a semi-transparent red-brown color. |
| `nav`                | `background`: url(...);<br>`background-position`: center;<br>`background-repeat`: no-repeat;<br>`background-size`: cover;<br>`height`: 300px;<br>`width`: 100%;<br>`box-shadow`: 0px 0px 8px black;<br>`margin-bottom`: 40px; | Styles the navigation bar with a background image, centered positioning, no-repeat, cover size, shadow, and margin. |
| `nav > input`        | `position`: sticky;<br>`top`: 60px;<br>`left`: 15%;<br>`width`: 70%;<br>`height`: 60px;<br>`border-radius`: 10px;<br>`background-color`: rgb(99, 18, 18, 1);<br>`color`: white;<br>`border`: none;<br>`padding`: 10px; | Styles the input field within the navigation bar with sticky positioning, rounded corners, and a dark red background. |
| `::placeholder`      | `color`: lightgrey;<br>`padding-left`: 1%;                   | Styles the placeholder text with light grey color and left padding. |
| `.coffee-menu`       | `display`: flex;<br>`justify-content`: space-evenly;<br>`align-items`: center;<br>`overflow`: visible; | Styles a container with flex display to arrange child elements with equal space between them and centered alignment. |
| `.coffee-menu > div` | `display`: flex;<br>`flex-direction`: column;<br>`align-items`: center;<br>`justify-content`: center;<br>`color`: rgba(0, 0, 0, 0.8); | Styles `div` elements inside `.coffee-menu` with flex layout, centered alignment, and slightly transparent text color. |
| `.img`               | `height`: 150px;<br>`width`: 150px;                         | Styles elements with class `.img` with specific dimensions. |
| `img`                | `width`: 100%;<br>`height`: 100%;<br>`border-radius`: 50%;<br>`box-shadow`: 0px 8px 8px black; | Styles `img` elements with maximum dimensions, rounded corners, and a shadow. |
| `img:hover`          | `transform`: scale(1.05);<br>`box-shadow`: 0px 8px 15px black; | Styles `img` elements when hovered with a slight scale-up and increased shadow. |
| `.coffee-menu > div > h4` | `margin`: 15px;                                           | Styles `h4` elements within `.coffee-menu` with margin. |
| `.des`               | `width`: 90%;<br>`margin`: auto;<br>`margin-block`: 50px;<br>`background-color`: rgb(165, 42, 42, 0.3);<br>`padding`: 30px;<br>`border-radius`: 5px;<br>`box-shadow`: 0px 0px 8px brown; | Styles elements with class `.des` with specific width, margin, padding, background color, border radius, and shadow. |
| `.des > p, .des > ol`| `line-height`: 20px;<br>`color`: brown;                    | Styles paragraphs and ordered lists within `.des` with line height and brown text color. |
| `ol > li`            | `padding`: 5px; 
