const searchform = document.getElementById("search-form")
const searchBox = document.getElementById("text-input")
const searchResult = document.getElementById("search-content")
const seeMorebtn = document.getElementById("see-more-btn");

const accesskey ="rHxNs-usMq8tW5Qru1IFTmGijdXIiSPV2G5FW6DDbqs"
let page  = 1;
let keyword = "";

async function searchImages (){
    keyword = searchBox.value;
    const url =`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    if(page ===1){
        searchResult.innerHTML = "";
    }

    const results = data.results;

    results.map((result)=>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement('a');
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    });
    seeMorebtn.style.display= "block";
}
searchform.addEventListener('submit',(e)=>{
    e.preventDefault();
    page = 1;
    searchImages();
})

seeMorebtn.addEventListener("click",()=>{
    page++;
    searchImages();
})
