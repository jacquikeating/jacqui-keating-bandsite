// ELEMENT REFERENCES ----------------------------------------------
const showsContainer = document.querySelector(".shows__container")

// GLOBAL VARIABLES ------------------------------------------------
let showsArr = [
    {
        date: 'Mon Sept 09 2024',
        venue: 'Ronald Lane',
        location: 'San Francisco, CA'
    },
    {
        date: 'Tue Sept 17 2024',
        venue: 'Pier 3 East',
        location: 'San Francisco, CA'
    },
    {
        date: 'Sat Oct 12 2024',
        venue: 'View Lounge',
        location: 'San Francisco, CA'
    },
    {
        date: 'Sat Nov 16 2024',
        venue: 'Hyatt Agency',
        location: 'San Francisco, CA'
    },
    {
        date: 'Fri Nov 29 2024',
        venue: 'Moscow Center',
        location: 'San Francisco, CA'
    },
    {
        date: 'Wed Dec 18 2024',
        venue: 'Press Club',
        location: 'San Francisco, CA'
    }
]

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
    showDateText.textContent = show.date;
    showEl.appendChild(showDateText);

    const showVenueSubheading = document.createElement("p");
    showVenueSubheading.classList.add("show__subheading");
    showVenueSubheading.textContent = "Venue";
    showEl.appendChild(showVenueSubheading);

    const showVenueText = document.createElement("p");
    showVenueText.classList.add("show__body-copy");
    showVenueText.textContent = show.venue;
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

}

function renderAllShows() {
    for (let i = 0; i < showsArr.length; i++) {
        renderShow(showsArr[i]);
    }
}


// FUNCTION(S) TO CALL ON LOAD -------------------------------------
renderAllShows();