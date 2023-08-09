const url = "http://www.omdbapi.com/?i=tt3896198&apikey=2b73eb94&s=harry";
const results = document.querySelector("#results");
const template = document.querySelector("#movieCardTemplate");

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const movies = data.Search;
    movies.forEach((movie) => {
      // # Solution 1
      const card = `<div class='col-3'>
                      <div class="card">
                        <img src="${movie.Poster}" class="card-img-top" alt="${movie.Title}" />
                        <div class="card-body">
                          <h6 class="card-title">${movie.Title}</h6>
                          <p class="card-text">${movie.Year}</p>
                          <a href="https://www.imdb.com/title/${movie.imdbID}" class="btn btn-primary" target="_blank">Go on IMDB</a>
                        </div>
                      </div>
                    </div>`;
      // insert them into the #results div
      results.insertAdjacentHTML("beforeend", card);
    });
  });
