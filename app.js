const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const resultsContainer = document.getElementById("resultsContainer");

const fetchAlbums = async (query) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    const data = await response.json();

    const filteredData = data.filter((album) =>
      album.title.toLowerCase().includes(query.toLowerCase())
    );

    displayResults(filteredData);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const displayResults = (albums) => {
  resultsContainer.innerHTML = "";

  if (albums.length === 0) {
    resultsContainer.innerHTML = "<p>No products found</p>";
    return;
  }

  albums.forEach((album) => {
    const albumEl = document.createElement("div");
    albumEl.classList.add("album");
    albumEl.innerHTML = `
      <h3>${album.title}</h3>
      <p>${album.body}</p>
    `;
    resultsContainer.appendChild(albumEl);
  });
};

searchBtn.addEventListener("click", () => {
  const query = searchInput.value.trim();
  if (query) {
    fetchAlbums(query);
  } else {
    alert("Please enter a search query");
  }
});
