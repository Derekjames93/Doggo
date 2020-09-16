const newRequest = new XMLHttpRequest;

newRequest.onreadystatechange = function(){
    console.log(this);
    if(this.readyState === 4){
        console.log('Getting a bit better')
        console.log(this.responseText);

        const title = document.createElement('h1');
        title.textContent = this.responseText;
        document.body.appendChild(title);
    }
}
newRequest.open('GET', './Elwynnforest.txt');
newRequest.send();


// fetch('/Elwynnforest.txt').then(function(response){
//     return response.text();
// })
//     .then(function(text){
//         const title = document.createElement('h1')
//             title.textContent = text;
//             document.body.appendChild(title)
//     })