# Preview Link

https://rahul9695.github.io/Beginner-Frontend-Practice/CSS-tasks/Grid-Structure/index.html

## HTML Explanation
<!DOCTYPE html>: This declaration defines the document type and version of HTML being used, which is HTML5 in this case.

<html lang="en">: The opening `<html>` tag represents the root element of the HTML document. The `lang` attribute is set to "en" to specify that the document is written in English.

<head>: The `<head>` section contains metadata about the document, such as character encoding, viewport settings, and links to external resources.

<meta charset="UTF-8">: This meta tag sets the character encoding of the document to UTF-8, which is a widely used character encoding for handling various character sets and symbols.

<meta name="viewport" content="width=device-width, initial-scale=1.0">: This meta tag sets the viewport settings for responsive web design. It ensures that the page is initially displayed at 100% zoom level on all devices with different screen widths.

<title>Grid-structure || CSS Learning</title>: This sets the title of the HTML document, which is typically displayed in the browser's title bar or tab.

<link rel="stylesheet" href="./styles.css">: This `<link>` element is used to link an external CSS stylesheet named "styles.css" to the HTML document. It applies styles defined in the linked CSS file to the HTML content.

<body>: The `<body>` tag encloses the main content of the web page.

<main>: The `<main>` element is used to define the main content section of the webpage. It's a semantic HTML5 element used for better document structure.

Within the `<main>` element, there is a `<div>` with the class "item g1" and another with the class "item g2." These are likely used for layout purposes and can be styled using CSS.

Inside the "item g1" `<div>`, there is a nested `<div>` with the class "nav" that seems to represent a navigation bar.

Inside the "nav" `<div>`, there are several child `<div>` elements, each containing a `<button>` element and one containing an `<img>` element.

The `<button>` elements likely represent navigation links, while the `<img>` element displays an image with an "M Logo." The image source URL has been truncated in the provided code.

The `<button>` elements are typically used for navigation or user interaction, and they can be customized and styled using CSS.

The `<img>` element displays an image, and its source URL points to a Twitter profile picture. The actual URL has been truncated in the provided code.

That's the basic structure of the HTML document. The omitted content of the image source URLs and any additional styling specified in the "styles.css" file may affect the appearance and functionality of the web page.


## CSS Explanation 

| CSS Code                                    | Explanation                                                                                     |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| `* { margin: 0; padding: 0; box-sizing: border-box; }` | This code resets margins, padding, and sets the box-sizing model to ensure consistent element sizing. |
| `main { display: grid; ... }`              | This styles the `<main>` container element with a grid layout, specifying columns, rows, height, and background. |
| `.item { ... }`                            | Styles elements with the class "item" by setting borders, margins, padding, and background color. |
| `.g1 { ... }`                              | Styles elements with the class "g1" within the grid, defining their grid area, alignment, and display properties. |
| `.nav { ... }`                             | Styles elements with the class "nav," specifying their display, width, and alignment.          |
| `.nav button { ... }`                      | Styles buttons within the "nav" class, setting background, text color, padding, and border radius. |
| `.g2`, `.g3`, `.g4`, `.g5`, `.g6`, `.g7`, `.g8`, `.g9`, `.g10` | Styles elements with these classes, specifying their grid area and position within the grid layout. |
