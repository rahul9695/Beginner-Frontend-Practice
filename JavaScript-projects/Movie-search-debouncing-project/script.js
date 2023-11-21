const inputSearch = document.getElementById('inputSearch');
const moviesContainer = document.getElementById('movies-container');
const initialDisplay = document.getElementById('inital-suggestion');
const pagination = document.getElementById('pagination');
const previousBtn = document.getElementById('previousBtn');
const currentPageNumber = document.getElementById('currentPageNumber');
const nextBtn = document.getElementById('nextBtn');
const API_KEY = 'e94faa5f'; 
const BASE_URL = 'https://www.omdbapi.com/';

pagination.style.display = "none";

let timerId = null;
let currentPage = 1;
let totalResults = 0;

async function fetchDataFromAPI (searchValue, pageNumber) {
    try {
        const response = await fetch(`${BASE_URL}?&apikey=${API_KEY}&s=${searchValue}&page=${pageNumber}`);
        const data = await response.json();
        // console.log(data);
        return data;
    } catch (error) {
        initialDisplay.innerText = "Error while fetching the data";
        console.log("error : ",error);
    }
}

function displayMovies (movies) {
    movies.forEach((movie)=>{
        const divTag = document.createElement('div');
        const imgTag = document.createElement('img');
        const h3Tag = document.createElement('h3');
        const pTag = document.createElement('p');

        imgTag.setAttribute('src', movie.Poster);
        h3Tag.textContent = movie.Title;
        pTag.textContent = `Year : ${movie.Year}`
        divTag.append(imgTag, h3Tag, pTag);
        moviesContainer.append(divTag);
    });
}

async function goToPreviousPage() {
    if(currentPage > 1){
        currentPage-=1;
        const data = await fetchDataFromAPI(inputSearch.value, currentPage);
        moviesContainer.innerHTML = "";
        displayMovies(data.Search);
        displayPagination(currentPage, totalResults);
    }
}

async function goToNextPage () {
        currentPage+=1;
        const data = await fetchDataFromAPI(inputSearch.value, currentPage);
        moviesContainer.innerHTML = "";
        displayMovies(data.Search);
        displayPagination(currentPage, totalResults);
}


function displayPagination (currentPage, totalResults) {
        pagination.style.display = "flex";
        previousBtn.addEventListener('click', goToPreviousPage);
        nextBtn.addEventListener('click', goToNextPage);
        currentPageNumber.innerText = `Page ${currentPage} of ${totalResults}`;

        if(currentPage === 1){
            previousBtn.disabled = true;
        }else if (currentPage === totalResults) {
            nextBtn.disabled = true;
        }else {
            previousBtn.disabled = false;
            nextBtn.disabled = false;
        }
}

inputSearch.addEventListener("input", (e) => {

    if(timerId !== null){
        clearInterval(timerId);
    }

    timerId = setTimeout(async ()=>{
        moviesContainer.innerHTML = "";
        initialDisplay.style.display = "block";
        initialDisplay.textContent = "Loading..."
        
        const data = await fetchDataFromAPI(e.target.value, currentPage);
        // console.log(data);
        totalResults = Math.ceil(data.totalResults / 10);
        // console.log(totalPages);

        if(data.Response === 'False'){
            initialDisplay.textContent = "No match found, Use more specific keyword";
        } else {
            currentPage = 1;
            initialDisplay.style.display = "none";
            moviesContainer.innerHTML = "";
            const movies = data.Search;
            // console.log(movies);
            displayMovies(movies);
            displayPagination(currentPage, totalResults);
        }
    }, 800)
});

