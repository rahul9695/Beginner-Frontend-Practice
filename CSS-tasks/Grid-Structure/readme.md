# Preview Link

https://rahul9695.github.io/Beginner-Frontend-Practice/CSS-tasks/Grid-Structure/index.html

# HTML Code Explanation

This is an HTML code snippet that represents the structure of a web page. It includes various HTML elements and attributes to define the content and layout of the page.

## Document Structure

- `<!DOCTYPE html>`: This declaration specifies the document type and version of HTML being used (HTML5 in this case).
- `<html lang="en">`: The root element of the HTML document, which specifies the language of the content (English).
- `<head>`: This section contains metadata about the web page, such as character encoding and the page title.
  - `<meta charset="UTF-8">`: Sets the character encoding of the document to UTF-8.
  - `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: Defines the viewport settings for responsive web design.
  - `<title>Grid-structure || CSS Learning</title>`: Sets the title of the web page displayed in the browser tab.
  - `<link rel="stylesheet" href="./styles.css">`: Links an external CSS stylesheet to style the web page.

## Body Content

- `<body>`: The main content of the web page is contained within the `<body>` element.
  - `<main>`: Represents the main content area of the page.
    - `<div class="item g1">`: A container div with the class "item g1."
      - `<div class="nav">`: A navigation container div.
        - Several `<div>` elements containing buttons and an image for navigation:
          - `<button>Home</button>`
          - `<button>About</button>`
          - `<img src="https://pbs.twimg.com/profile_images/2404391202/u5yv9wehu0hxbaywsj1k_400x400.png" width="80px" height="80px" alt="M Logo">`
          - `<button>Menu</button>`
          - `<button>Contact</button>`
    - `<div class="item g2">`: Another container div with the class "item g2."
      - An `<img>` element with a base64-encoded image source.
  
The provided HTML code represents a basic web page structure with navigation buttons and an image. The page is styled using an external CSS stylesheet ("styles.css") to control its appearance and layout.


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
