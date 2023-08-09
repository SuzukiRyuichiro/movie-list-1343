import Mustache from "mustachejs";

const url = "http://www.omdbapi.com/?i=tt3896198&apikey=2b73eb94&s=harry";
const results = document.querySelector("#results");
const template = document.querySelector("#movieCardTemplate").innerHTML;

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const moviesData = { movies: data.Search };
    const movieCards = Mustache.render(template, moviesData);
    results.insertAdjacentHTML("beforeend", movieCards);
  });
