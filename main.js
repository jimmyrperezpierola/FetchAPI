var contenido = document.querySelector('#contenido');

function traer() {
    fetch('https://randomuser.me/api')
        .then(res => res.json())
        .then(data => {
            console.log(data.results['0']);
            contenido.innerHTML = `
            <img src="${data.results[0].picture.large}" width="100px" class="img-fluid rounded-circle">
            <p>Name: ${data.results[0].name.first} ${data.results[0].name.last}</p>            
            <p>Nationality: ${data.results[0].nat}</p>                        
            <p>Cell: ${data.results[0].cell}</p>                        
            <p>Email: ${data.results[0].email}</p>                        
            `;
        })
}
