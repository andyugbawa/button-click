const button = document.querySelector('.btn')
const currentDiv = document.getElementById('content');




button.addEventListener('click',addButton);

function addButton(){
    const newDiv = document.createElement('div');
    const newList =document.createElement('li');
    newList.innerText='Buy Now'
    newList.classList.add('bash');
    document.body.appendChild(newDiv)
    newDiv.appendChild(newList);
    currentDiv.appendChild(newList);
    newList.style.color='white'
    newList.style.backgroundColor='green'
    



}