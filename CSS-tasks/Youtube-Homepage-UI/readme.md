## Preview Link
https://rahul9695.github.io/Beginner-Frontend-Practice/CSS-tasks/Youtube-Homepage-UI/index.html

# YouTube Homepage UI HTML and CSS

## HTML (index.html)

### Document Structure
- The HTML document begins with the usual document type declaration and defines the language as English.
- The `head` section contains metadata such as character set, viewport settings, and a title.
- External styles are linked via the `link` element to a `styles.css` file for styling.

### Header Section
- The `header` section represents the navigation bar at the top of the page.
- It includes a logo, a search input field, and various icons for navigation and user actions.

### Main Content Section
- The `main` section represents the main content area of the webpage, including the left sidebar and the right content area.
- It uses the `flex` display to ensure proper layout.

### Left Sidebar (main-left)
- The `aside` element represents the left sidebar.
- It includes categories for navigation and user personalization options.

### Right Content Area (main-right)
- The `div` with the class `main-right` represents the right content area.
- It contains a heading for recommended videos and a container for displaying video cards.

## CSS (styles.css)

### General Styles
- The CSS code imports three external CSS files (`header.css`, `main-left.css`, and `main-right.css`).
- The universal selector `*` applies a few reset styles, including setting `box-sizing` to `border-box`, and removing margin and padding from all elements.

### Header Styles
- The `header` element is styled with a white background, fixed position at the top, and a height of 70px.
- The `navbar` class represents the navigation bar within the header and is centered with a 96% width and space between its children.
- The `header-left` class styles the left side of the header, containing the logo and menu icon.
- The `search-container` class styles the search input container with a flex-grow property and border.
- The `search-container input` styles the search input itself.
- The `header-icons` class styles the right side of the header, containing various icons.

### Left Sidebar Styles
- The `main-left` class represents the left sidebar.
- It is styled as a column with a width of 18%, ensuring it remains visible while scrolling.
- Scrollbars are hidden for a cleaner appearance.

### Left Sidebar Categories
- The `left-category` class represents the container for categories and user personalization options.
- The `category-subset` class styles each individual category subset.
- On hover, these category subsets change background color and scale slightly to provide feedback to users.

### Right Content Area Styles
- The `main-right` class represents the right content area.
- It is styled with padding and a border at the top to separate it from the left sidebar and header.
- The `h2` tag within `main-right` styles the heading for recommended videos.
- The `.cards-box` class styles the container for video cards.

### Video Cards (Cards-box)
- Individual video cards within the `.cards-box` are styled with a width of 300px and flex layout.
- Video images within each card are set to 100% width.
- The `.card-details` class styles the container for video details, including the uploader's profile picture.
- Font sizes and colors are adjusted for text within the video card.

This code creates a basic YouTube homepage UI with a header, left sidebar, and right content area for displaying video recommendations. It uses CSS for styling and flex layout for responsive design.
