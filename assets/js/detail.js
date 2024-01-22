let details = document.querySelector('.details')
let id = new URLSearchParams(window.location.search).get("id")
fetch(`http://localhost:3000/services/${id}`)
    .then(res => res.json())
    .then(data => {
        details.innerHTML = `
        <div class="banner-image"><img src="${data.image}" alt=""></div>
        <h2>${data.title}</h2>
        <p>${data.description}</p>
    `
    })