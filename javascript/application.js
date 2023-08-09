import Mustache from "mustachejs";

const url = "http://www.omdbapi.com/?i=tt3896198&apikey=2b73eb94&s=harry";
const results = document.querySelector("#results");
const template = document.querySelector("#movieCardTemplate");

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const movies = data.Search;
    movies.forEach((movie) => {
      // Solution 2 (clone the template)
      const clone = template.content.cloneNode(true);
      // modify the content of that clone
      clone.querySelector("img").src = movie.Poster;
      clone.querySelector("h6.card-title").innerText = movie.Title;
      clone.querySelector("p.card-text").innerText = movie.Year;
      clone.querySelector(
        "a"
      ).href = `https://www.imdb.com/title/${movie.imdbID}`;
      // insert that into the #results
      results.appendChild(clone);
    });
  });
