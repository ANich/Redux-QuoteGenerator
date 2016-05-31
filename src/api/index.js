function formatResponse(json) {
  return json[0].content
}

export function getQuote() {
  return fetch(
      'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1')
    .then(response => response.json())
    .then(json => formatResponse(json))
}
