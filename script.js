const request = new XMLHttpRequest();

// request.onreadystatechange = function () {
//     console.log(this);
//     if(this.readyState === 4){
//         console.log('request is complete')
//         console.log(this.responseText);

//         const title = document.createElement('h1')
//         title.textContent = this.responseText;
//         document.body.appendChild(title);
//     }
// }
// request.open('GET', './sample.txt');
// request.send();
const doggo = document.querySelector('#clickme');

doggo.addEventListener('click', function (event) {
    event.preventDefault()

    doggo.textContent = 'Generating Doggo'
    fetch('https://dog.ceo/api/breeds/image/random').then(function (response) {
        return response.json();
    })
        .then(function (data) {
            console.log(data)
            let img = document.getElementById('img')
            if (!img) {
                img = document.createElement('img');
                img.setAttribute('id', 'img')
                document.body.appendChild(img);

            }
            img.setAttribute('src', data.message);



            doggo.textContent = 'Submit'


        })

})


const selectID = document.getElementById('djdog')
selectID.addEventListener('change', function () {
    fetch(`https://dog.ceo/api/breed/${this.value}/images/random`).then(function (response) {
        return response.json();
    })
        .then(function (data) {

            console.log(data)
            let img = document.getElementById('img')
            if (!img) {
                img = document.createElement('img');
                img.setAttribute('id', 'img')
                document.body.appendChild(img);

            }
            img.setAttribute('src', data.message);



            doggo.textContent = 'Submit'

        })

})




fetch('https://dog.ceo/api/breeds/list').then(function (response) {
    return response.json();
})

    .then(function (data) {
        const selectDog = document.getElementById('djdog')
        let mainLoop = ""
        for (let index = 0; index < data.message.length; index++) {
            let dogLoop = data.message[index]
            mainLoop += `<option value="${dogLoop}">${dogLoop}</option>`
            console.log(dogLoop)
            selectDog.innerHTML = mainLoop
        }


    })