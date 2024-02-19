console.log("Helo world")


const herop = document.querySelector('.hero2 p');
const texts = herop.innerText; 

if(texts.length > 23) {
    let newText = texts.substring(0,23);
    newText += " ...";
    herop.innerText = newText;
}
console.log(texts.length)