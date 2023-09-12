## Preview Link

https://rahul9695.github.io/Beginner-Frontend-Practice/CSS-tasks/Flexbox-photo-gallery-app/index.html

# Photo Gallery using CSS Flexbox

## Overview

This project is a simple and responsive photo gallery built using HTML and CSS, specifically utilizing CSS Flexbox for layout. It provides an elegant way to display a collection of images in a grid-like format. Whether you're showcasing your photography skills, creating a portfolio, or just need a visually appealing way to present images, this gallery can be easily customized to suit your needs.

## Key Features

- **Responsive Design:** The gallery adapts to various screen sizes, making it accessible on both desktop and mobile devices.

- **Flexbox Layout:** CSS Flexbox is used to create a flexible and evenly spaced grid of images.

- **Easy Customization:** You can personalize the gallery by adding your own images and adjusting the CSS styles to match your preferred aesthetic.

## Code Explanation

| Tag/Element           | Description                                     |
|-----------------------|-------------------------------------------------|
| `<!DOCTYPE html>`     | Declares the document as HTML5.                 |
| `<html>`              | The root element of the HTML document.          |
| `<head>`              | Contains metadata and links to external resources for the document. |
| `<meta charset="utf-8">` | Defines the character encoding for the document as UTF-8. |
| `<meta name="viewport">` | Sets the viewport properties for responsive design. |
| `<title>` | Specifies the title of the web page, displayed in the browser tab. |
| `<link rel="stylesheet">` | Links an external CSS file to style the HTML content. |
| `<body>` | Represents the content of the web page. |
| `<header>` | Defines a header section typically containing a title or logo. |
| `<h1>` | Defines the main heading within the header. |
| `<div>` | A container element used to group and style content. |
| `<img>` | Embeds images with the source and alternate text. |

| CSS Property | Description |
|--------------|-------------|
| `*` | Targets all elements and sets the box-sizing property to "border-box." |
| `body` | Styles the body element, setting margin, font-family, and background color. |
| `.header` | Styles the header element with text alignment, padding, and background color. |
| `.gallery` | Styles the gallery container using Flexbox for layout, alignment, and spacing. |
| `.gallery img` | Styles the images within the gallery, controlling size, fit, and border radius. |
| `.gallery::after` | Pseudo-element used to maintain a specified width for alignment purposes. |
