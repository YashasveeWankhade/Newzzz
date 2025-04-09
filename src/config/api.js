const API_DOMAIN = "https://newsapi.org/v2/top-headlines?country=";
const API_SEARCH_DOMAIN = "https://newsapi.org/v2/everything?q=";
const API_KEY = "27728d206a624c229887d696e8d0283f";  // New API key

export const endpointPath = (country, category) =>
  `${API_DOMAIN}${country}&language=en&category=${category}&apiKey=${API_KEY}`;

export const endpointSearch = (searchQuery) =>
  `${API_SEARCH_DOMAIN}${searchQuery}&language=en&apiKey=${API_KEY}`;
