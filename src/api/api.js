export function formatResponse(json) {
  const author = json[0].title
  const link = json[0].link

  // The quotesondesign api returns the quote content within <p> tags
  // Here's a hacky way to format it:
  const rawContent = json[0].content.replace(/\n/, '') //Strip line feed
  let temporaryElement = document.createElement("p")
  temporaryElement.innerHTML = rawContent
  const text = temporaryElement.innerText

  return {
    author,
    text,
    link
  }
}

export function getQuote() {
  return fetch(
      'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1')
    .then(response => response.json())
    .then(json => formatResponse(json))
}
