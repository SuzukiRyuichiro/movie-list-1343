import Mustache from "mustachejs";

const url = "http://www.omdbapi.com/?i=tt3896198&apikey=2b73eb94&s=harry";
const results = document.querySelector("#results");
const template = document.querySelector("#movieCardTemplate").innerHTML;

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const movies = data.Search;
    movies.forEach((movie) => {
      // Solution 3 (mustaches)
      // Use mustache to interpolate the title, year, etc
      const card = Mustache.render(template, movie);
      // Insert that generated card into the #results
      results.insertAdjacentHTML("beforeend", card);
    });
  });
