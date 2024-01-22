let banner = document.querySelector('.banner')
let search = document.querySelector('#search')
let sort =document.querySelector('#sort')
let filteredArr = []
let copyArrr = []
function getDataJson() {
    fetch(`http://localhost:3000/services`)
        .then(response => response.json())
        .then(data => {
            copyArrr = data
            banner.innerHTML = ""
            filteredArr = filteredArr.length || search.value ? filteredArr : data
            filteredArr.forEach(element => {
                banner.innerHTML += `
                <div class="banner-box">
                <div class="banner-image"><img src="${element.image}" alt=""></div>
                <h2>${element.title}</h2>
                <p>${element.description}</p>
                <div class="banner-btn">
                    <button><a href="details.html?id=${element.id}">Details</a></button>
                </div>
                </div>
                `

            });


        })
}
getDataJson()
sort.addEventListener("change",(e)=>{
    let copyArrClone = [...copyArrr];
    if (e.target.value == 'az') {
        let sortAz = copyArrClone.sort((a, b) => a.title.localeCompare(b.title));
        filteredArr = sortAz;
        getDataJson();
    } else if (e.target.value == 'za') {
        let sortZa = copyArrClone.sort((a, b) => b.title.localeCompare(a.title));
        filteredArr = sortZa;
        getDataJson();
    } else {
        getDataJson();
    }
})