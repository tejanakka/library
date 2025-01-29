let searchInputEl = document.getElementById("searchInput");
let searchResultsEl = document.getElementById("searchResults");
let someEl = document.getElementById("some");

function finalCreateAndAppend(item) {
    let {
        imageLink,
        author
    } = item;
    let containerEl = document.createElement("div");
    searchResultsEl.appendChild(containerEl);
    containerEl.classList.add("col-6","p-2","text-center");

    let imageEl = document.createElement("img");
    imageEl.src = imageLink;
    imageEl.classList.add("image", "mb-2");
    containerEl.appendChild(imageEl);

    let paraEl = document.createElement("p");
    paraEl.textContent = author;
    paraEl.classList.add("mt-1", "paras");
    containerEl.appendChild(paraEl);
}

function createAndAppenf(arr) {
    for (let item of arr) {
        finalCreateAndAppend(item);
    }
}
searchInputEl.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        let url = "https://apis.ccbp.in/book-store?title=" + event.target.value;
        let options = {
            method: "GET"
        }
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                if (jsonData.search_results.length === 0) {
                    someEl.textContent = "No Result Found";
                } else {
                    someEl.textContent = "Popular Books";
                    createAndAppenf(jsonData.search_results);
                }
            })
    }
})
