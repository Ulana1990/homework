//4
const list = document.querySelector('.list');
const newLi = document.createElement( 'li');
newLi.innerText = 'Ford';
list.appendChild(newLi);
newLi.classList.add('listItem');
//3
const firsLi = document.querySelector('.list');
const  newUl = document.createElement('li');
newUl.innerText = 'Bugatti';
firsLi.prepend(newUl);
newUl.classList.add('listItem');

//1
const removeItem = list.querySelectorAll('li')[3];
list.removeChild(removeItem);

const removeIt = list.querySelectorAll('li')[4];
list.removeChild(removeIt);

//2
const newUno = document.querySelector('li');
newUno.classList.add('.listItem');
const elem = document.querySelector('ul');
elem.classList.add('.list');






//6
const image = document.createElement('img');
image.src  = "https://coolparty.com.ua/content/images/12/480x480l50nn0/shariki-motiviruushchie-ukr-71272977994505.jpg";
document.body.appendChild(image);


//7
const ol= document.querySelector('p');
ol.classList.remove('red',  'italic');
//8
const h = document.createElement('h1');
h.innerText = 'this is h1 tag';
document.body.append(h);
//9
h.style.color = "blue";
h.style.fontSize = "40px";




