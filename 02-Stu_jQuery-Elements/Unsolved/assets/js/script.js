// TODO: Select the existing DOM element, <div id="root">, and assign to a new variable
const rootElement = document.getElementById("root");

// Hint: Visit the documentation https://api.jquery.com/

// TODO: Create a `<p>` element that will store an author's name and assign that created element to a new variable
const authorElement = document.createElement("p");

// TODO: Add the following text to the newly created `<p>` element: "~ Carol Dweck"
authorElement.textContent = "~ Carol Dweck";

// TODO: Add the class `plain` to the author element
authorElement.classList.add("plain");

// TODO: Create a new `<h1>` element that will store an author's quote and assign it to new variable
const quoteElement = document.createElement("h1");

// TODO: Add the following quote text to the quote element, "Love Challenges, Be Intrigued by Mistakes, Enjoy Effort, and Keep Learning."
quoteElement.textContent =
    "Love Challenges, Be Intrigued by Mistakes, Enjoy Effort, and Keep Learning.";


// TODO: Apply the class `fancy` to the quote element
quoteElement.classList.add("fancy");

// TODO: Append the author element to the quote element
quoteElement.appendChild(authorElement);

// TODO: Append the quote element to the HTML element with an ID of `root` in `index.html`
rootElement.appendChild(quoteElement);
