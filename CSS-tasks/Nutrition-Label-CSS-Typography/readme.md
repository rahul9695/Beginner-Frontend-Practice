# Demo Link
https://rahul9695.github.io/Beginner-Frontend-Practice/CSS-tasks/Nutrition-Label-CSS-Typography/index.html

# Explanation

| Selector                 | Property-Value Pairs                                          | Explanation                                              |
| ------------------------ | ------------------------------------------------------------- | -------------------------------------------------------- |
| `*`                      | `box-sizing`: border-box;                                    | Applies `box-sizing` to all elements to include padding and border in the element's total width and height. |
| `html`                   | `font-size`: 16px;                                           | Sets the base font size for the HTML document to 16 pixels. |
| `body`                   | `font-family`: 'Open Sans', sans-serif;                       | Sets the font family for the entire body text.           |
| `.label`                 | `border`: 2px solid black;<br>`width`: 270px;<br>`margin`: 20px auto;<br>`padding`: 0 7px; | Styles elements with class `.label` with a border, width, margin, and padding. |
| `header h1`              | `text-align`: center;<br>`margin`: -4px 0;<br>`letter-spacing`: 0.15px; | Styles `h1` elements inside the `header` with centered text alignment, negative margin, and letter spacing. |
| `p`                      | `margin`: 0;<br>`display`: flex;<br>`justify-content`: space-between; | Styles `p` elements with no margin, flex display, and space-between justification. |
| `.divider`               | `border-bottom`: 1px solid #888989;<br>`margin`: 2px 0;      | Styles elements with class `.divider` with a bottom border and margin. |
| `.bold`                  | `font-weight`: 800;                                          | Sets a font weight of 800 (bold) for elements with class `.bold`. |
| `.large`                 | `height`: 10px;<br>`background-color`: black;<br>`border`: 0; | Styles elements with class `.large` with specific height, background color, and no border. |
| `.medium`                | `height`: 5px;<br>`background-color`: black;<br>`border`: 0;  | Styles elements with class `.medium` with specific height, background color, and no border. |
| `.small-text`            | `font-size`: 0.85rem;                                        | Sets a font size of 0.85 rem for elements with class `.small-text`. |
| `.calories-info`         | `display`: flex;<br>`justify-content`: space-between;<br>`align-items`: flex-end; | Styles elements with class `.calories-info` as flex containers with space-between justification and flex-end alignment for child elements. |
| `.calories-info h2`      | `margin`: 0;                                                 | Resets the margin for `h2` elements inside `.calories-info`. |
| `.left-container p`      | `margin`: -5px -2px;<br>`font-size`: 2em;<br>`font-weight`: 700; | Styles `p` elements inside `.left-container` with negative margin, large font size, and bold font weight. |
| `.calories-info span`    | `margin`: -7px -2px;<br>`font-size`: 2.4em;<br>`font-weight`: 700; | Styles `span` elements inside `.calories-info` with negative margin, larger font size, and bold font weight. |
| `.right`                 | `justify-content`: flex-end;                                 | Aligns elements with class `.right` to the flex-end.     |
| `.indent`                | `margin-left`: 1em;                                          | Applies left margin indentation of 1em to elements with class `.indent`. |
| `.double-indent`         | `margin-left`: 2em;                                          | Applies left margin indentation of 2em to elements with class `.double-indent`. |
| `.daily-value p:not(.no-divider)` | `border-bottom`: 1px solid #888989;                 | Styles `p` elements inside `.daily-value` with a bottom border, excluding those with class `.no-divider`. |
| `.note`                  | `font-size`: 0.6rem;<br>`margin`: 5px 0;<br>`padding`: 0 8px;<br>`text-indent`: -8px; | Styles elements with class `.note` with a smaller font size, margin, padding, and negative text indentation. |
