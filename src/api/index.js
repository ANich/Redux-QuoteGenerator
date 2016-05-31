function formatResponse(json) {
  // The quotesondesign api returns the quote content within <p> tags
  // Here's a hacky way to format it:
  let temporaryElement = document.createElement("p")
  temporaryElement.innerHTML = json[0].content
  return temporaryElement.innerText
}

export function getQuote() {
  return fetch(
      'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1')
    .then(response => response.json())
    .then(json => formatResponse(json))
}
