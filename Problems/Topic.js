//

let MainDiv = document.querySelector('div');
let secDiv = document.createElement('div');
let thirdDiv = document.createElement('div');
MainDiv.appendChild(secDiv);

let imgBox = document.createElement('img');
imgBox.src = '';
secDiv.appendChild(imgBox);
imgBox.style.bordder = '3px solid black';

let textBox = document.createElement('p');
textBox.innerHTML = '';
secDiv.appendChild(textBox);
textBox.style.fontSize = '20px';

let textBox2 = document.createElement('p');
textBox2.innerHTML = '';
secDiv.appendChild(textBox2);
textBox2.style.fontSize = '20px';

let textBox3 = document.createElement('p');
textBox3.innerHTML = '';
secDiv.appendChild(textBox3);
textBox3.style.fontSize = '20px';
