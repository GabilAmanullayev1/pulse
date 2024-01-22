let img = document.querySelector('#img');
let title = document.querySelector('#name');
let description = document.querySelector('#desc');
let file = document.querySelector('#file');
let submit = document.querySelector('#submit');
let form = document.querySelector('form');
let table = document.querySelector('table');

file.addEventListener("input", (e) => {
    let file = e.target.files[0];
    if (file) {
        let reader = new FileReader();
    }
});

submit.addEventListener("click", (event) => {
    event.preventDefault();
    if (title.value && description.value) {
        let reader = new FileReader();
        let src = file.files[0];
        reader.onload = (e) => {
            let obj = {
                image: e.target.result,
                title: title.value,  
                description: description.value
            };
            axios.post("http://localhost:3000/services", obj)
                .then(res => {
                    window.location = "./index.html";
                });
        };
        reader.readAsDataURL(src);
    } else {
        alert("All fields must be filled!");
    }
});

fetch('http://localhost:3000/services')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(element => {
            table.innerHTML += `
            <tr>
            <td>${element.id}</td>
            <td>${element.title}</td>
            <td>${element.description}</td>
            <td><button onclick="deletex(${element.id})">Delete</button></td>
        </tr>
            `;
        });
    });
function deletex(id){
    axios.delete(`http://localhost:3000/services/${id}`)
}