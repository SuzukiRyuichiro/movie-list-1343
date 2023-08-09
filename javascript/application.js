import Mustache from "mustachejs";

const url = "http://www.omdbapi.com/?i=tt3896198&apikey=2b73eb94&s=harry";
const results = document.querySelector("#results");
const template = document.querySelector("#movieCardTemplate");

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const movies = data.Search;
    console.log(movies);
    movies.forEach((movie) => {
      // generate html card for each movies
      // # Solution 1
      // const card = `<div class='col-3'>
      //                 <div class="card">
      //                   <img src="${movie.Poster}" class="card-img-top" alt="${movie.Title}" />
      //                   <div class="card-body">
      //                     <h6 class="card-title">${movie.Title}</h6>
      //                     <p class="card-text">${movie.Year}</p>
      //                     <a href="https://www.imdb.com/title/${movie.imdbID}" class="btn btn-primary" target="_blank">Go on IMDB</a>
      //                   </div>
      //                 </div>
      //               </div>`;
      // insert them into the #results div
      // results.insertAdjacentHTML("afterbegin", card);
      // Solution 2 (clone the template)
      // const clone = template.content.cloneNode(true);
      // // modify the content of that clone
      // clone.querySelector("img").src = movie.Poster;
      // clone.querySelector("h6.card-title").innerText = movie.Title;
      // clone.querySelector("p.card-text").innerText = movie.Year;
      // clone.querySelector(
      //   "a"
      // ).href = `https://www.imdb.com/title/${movie.imdbID}`;
      // // insert that into the #results
      // results.appendChild(clone);
      // Solution 3 (mustaches)
      // Get the template
      // Use mustache to interpolate the title, year, etc
      const card = Mustache.render(template.innerHTML, movie);
      // Insert that generated card into the #results
      results.insertAdjacentHTML("beforeend", card);
    });
  });
