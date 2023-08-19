import {fetchTemp} from './card.js';

// get dom elements
let dataRes = document.getElementById("content");
let loading = document.getElementById("loading-state");
let button = document.querySelector("#Search");
let input = document.getElementById("input");

button.addEventListener("click", async() => {

//fetching data from the api
    try {
        const url = `https://api.github.com/users/DevOluwatoyin`;

        // Show loading message
        loading.style.display = "block";
        dataRes.style.display = "none";

        const response = await fetch(url);

        // Check if the response status is ok
        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        console.log(data);

        // Hide loading message and show content
        loading.style.display = "none";
        dataRes.style.display = "block";

        // Update UI with fetched data
        const profileDiv = fetchTemp(data);
        dataRes.appendChild(profileDiv);
    }
    catch(error) {
        console.log(error);
    }
});