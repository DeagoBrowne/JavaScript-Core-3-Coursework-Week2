function dogPhotoGenerator() {
    const api = 'https://dog.ceo/api/breeds/image/random';
    console.log(api);

    fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(err => console.log(err));
    
    const photo = document.querySelector('.photo');
    const button = document.querySelector('.button');


    button.addEventListener('click', () => {
        let image = document.createElement('img');
        image.src = 'https://dog.ceo/api/breeds/image/random';
        let li = document.createElement('li');
        li.appendChild(image);
        photo.appendChild(li);
        })
}

document.onload = dogPhotoGenerator();