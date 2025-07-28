// The URL for the Article Search API at nytimes.com
const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
// STEP 1: Get your own API key and paste it below…
const key = 'ok9VpeiAkn4CwoNArWzD8nM0djMDyvz6';
let url;
// Grab references to all the DOM elements you'll need to access
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
const section = document.querySelector('section');
// STEP 2: Add a submit event listener for the search form, referencing the fetchResults function as the callback
submitBtn.addEventListener("click", fetchResults);

// ajHuiZdBc3J89usJJyWocrCGnSFPDfPW  (This is a teacher's API key)

// Functions
function fetchResults(event) {
    // console.log(event);
    // Use preventDefault() to stop the form submitting
    event.preventDefault();
    // STEP 3: Assemble the full URL, according to the API documentation at the New York Times
    // ${baseURL}?q=${searchTerm.value}&begin_date=${beginDate.value}&end_date${endDate.value}&api-key=${key}
    let url = `${baseURL}?q=${searchTerm.value}&api-key=${key}`;
    console.log(url);
    const formattedStartDate = startDate.value.replaceAll("-", "");
    const formattedEndDate = endDate.value.replaceAll("-", "");
    if (formattedStartDate.value !== "") {
        url = `${url}&begin_date=${formattedStartDate}`;
    }

    if (formattedEndDate.value !== "") {
        url = `${url}&end_date=${formattedEndDate}`;
    }
    // STEP 4: Use fetch() to pass the URL that we built as a request to the API service, then pass the JSON to the displayResults() function
    fetch(url).then((response) => {
        return response.json();
    }).then(json => displayResults(json));
    // fetch(url).then(response => {
    //     return displayResults(response.json());
    // }); -> これはawaitをreturn前に配置する必要がある
};

function displayResults(json) {
    // STEP 5: Log to the console the results from the API
    console.log(json);

    // Clear out the old results…
    while (section.firstChild) {
            section.removeChild(section.firstChild);
    };
    // STEP 6: Create the variable articles to capture the articles from the JSON object
    let articles = json.response.docs;

    if (articles.length === 0) {
        const para = document.createElement('p');
        para.textContent = 'No results returned.'
        section.appendChild(para);
    } else {
        for(let i = 0; i < articles.length; i++) {
            const article = document.createElement('article');
            const heading = document.createElement('h2');
            const link = document.createElement('a');
            const img = document.createElement('img');
            const para1 = document.createElement('p');

            const current = articles[i];
            console.log(current);
            // STEP 7a: Look at the console output from the API…
            link.href = current.web_url;
            link.textContent = current.headline.main;
            para1.textContent = current.snippet;
            // STEP 7b: Grab the content from the JSON for the hyperlink and the article teaser (snippet)
            
            console.log(current.multimedia);

            // if(current.multimedia.length > 0) {
            //     img.src = 'http://static01.nytimes.com/' + current.multimedia[0].url;
            //     img.alt = current.headline.main;
            // };
            if (current.multimedia && current.multimedia.default && current.multimedia.default.url) {
                img.src = current.multimedia.default.url;
                img.alt = current.headline.main;
                article.appendChild(img);
            }

            console.log(img);
            // STEP 8: Put each article together as an ARTICLE element and append it as a child of the SECTION element in the HTML
            article.appendChild(heading);
            heading.appendChild(link);
            article.appendChild(img);
            article.appendChild(para1);
            section.appendChild(article);
        };
    };
};

// This example adapted from "Third-party APIs" at https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Third_party_APIs
