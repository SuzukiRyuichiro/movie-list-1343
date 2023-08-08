import Mustache from "mustachejs";

const movieContainer = document.querySelector("#results");

fetch("http://www.omdbapi.com/?i=tt3896198&apikey=2b73eb94&s=harry")
  .then((response) => response.json())
  .then((data) => {
    // Solution 3: use a library
    const template = document.querySelector("#movieCardTemplate").innerHTML; // get the movie card HTML (as string)
    const movies = { movies: data.Search };
    movieContainer.insertAdjacentHTML(
      "beforeend",
      Mustache.render(template, movies)
    );

    // Solution 2: use Template, more JS
    // const template = document.querySelector("#movieCardTemplate");
    // data.Search.forEach((result) => {
    //   const clone = template.content.cloneNode(true);
    //   clone.querySelector("img").src = result.Poster;
    //   clone.querySelector("h6").textContent = result.Title;
    //   clone.querySelector("p").textContent = result.Year;
    //   clone.querySelector(
    //     "a"
    //   ).href = `https://www.imdb.com/title/${result.imdbID}`;
    //   movieContainer.appendChild(clone);
    // });

    // Solution 1: use what we know
    // data.Search.forEach((result) => {
    //   const movieCard = `<div class='col-3'>
    //     <div class="card">
    //       <img src="${result.Poster}" class="card-img-top" alt="${result.Title} poster">
    //       <div class="card-body">
    //         <h6 class="card-title">${result.Title}</h6>
    //         <p class="card-text">${result.Year}</p>
    //         <a href="https://www.imdb.com/title/${result.imdbID}" class="btn btn-primary" target="_blank">Go on IMDB</a>
    //       </div>
    //     </div>
    //   </div>`;
    //   movieContainer.insertAdjacentHTML("beforeend", movieCard); // Then, we insert it into the DOM
    // });
  });
