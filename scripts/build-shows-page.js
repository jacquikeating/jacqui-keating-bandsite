// IMPORT ----------------------------------------------------------
import api from './band-site-api.js';


// ELEMENT REFERENCES ----------------------------------------------
const showsContainer = document.querySelector(".shows__container");


// FUNCTIONS -------------------------------------------------------
function renderShow(show) {
    const showEl = document.createElement("article");
    showEl.classList.add("show");
    showsContainer.appendChild(showEl);

    const showDateSubheading = document.createElement("p");
    showDateSubheading.classList.add("show__subheading");
    showDateSubheading.textContent = "Date";
    showEl.appendChild(showDateSubheading);

    const showDateText = document.createElement("p");
    showDateText.classList.add("show__body-copy", "show__body-copy--bold");
    const timestampToDate = new Date(show.date).toDateString();

    showDateText.textContent = timestampToDate;
    showEl.appendChild(showDateText);

    const showVenueSubheading = document.createElement("p");
    showVenueSubheading.classList.add("show__subheading");
    showVenueSubheading.textContent = "Venue";
    showEl.appendChild(showVenueSubheading);

    const showVenueText = document.createElement("p");
    showVenueText.classList.add("show__body-copy");
    showVenueText.textContent = show.place;
    showEl.appendChild(showVenueText);

    const showLocationSubheading = document.createElement("p");
    showLocationSubheading.classList.add("show__subheading");
    showLocationSubheading.textContent = "Location";
    showEl.appendChild(showLocationSubheading);

    const showLocationText = document.createElement("p");
    showLocationText.classList.add("show__body-copy");
    showLocationText.textContent = show.location;
    showEl.appendChild(showLocationText);
    
    const buyTicketsBtn = document.createElement("button");
    buyTicketsBtn.classList.add("show__buy-tickets-btn");
    buyTicketsBtn.textContent = 'Buy Tickets';
    showEl.appendChild(buyTicketsBtn);

    showEl.addEventListener("click", function() {
        const allShows = document.querySelectorAll(".show");
        allShows.forEach((show) => {
            show.classList.remove("show--selected");
        })
        showEl.classList.add("show--selected");
    })
}

async function renderAllShows() {
    let showsArr = await api.getShows();
    for (let i = 0; i < showsArr.length; i++) {
        renderShow(showsArr[i]);
    }
}


// FUNCTION(S) TO CALL ON LOAD -------------------------------------
renderAllShows();