console.log("Let's get this party started!");

document.addEventListener("DOMContentLoaded", getSearch);

function getSearch() {
  document.addEventListener("submit", async function (e) {
    e.preventDefault();
    let searchVal = document.getElementById("search").value;
    const response = await axios.get("https://api.giphy.com/v1/gifs/random", {
      params: {
        tag: searchVal,
        api_key: "9pasKAOzdD6Fu9Rwzvmdy6vIPAlFRq9X",
        limit: 1,
      },
    });
    console.log(response);
    addGif(response);
    document.getElementById("search").value = "";
  });
}

function addGif(response) {
  const container = document.getElementById("container");
  const newGif = document.createElement("img");
  newGif.setAttribute("src", response.data.data.images.original.url);
  container.append(newGif);
}

document.getElementById("remove").addEventListener("click", function () {
  $("img").remove();
});
