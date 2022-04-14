function dogPhotoGenerator() {
    const api = 'https://dog.ceo/api/breeds/image/random';
    console.log(api);

    fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);

            let image = document.createElement('img');
            image.src = data.message;
            let li = document.createElement('li');
            li.appendChild(image);
            photo.appendChild(li);
            
        })
        .catch(err => console.log(err));
    
    const photo = document.querySelector('.photo');
    const button = document.querySelector('.button');


    button.addEventListener('click', dogPhotoGenerator)
}

document.onload = dogPhotoGenerator();