const app = document.getElementById('root');
const logo = document.createElement('img');
logo.src = 'logo.png';
const container = document.createElement('div');
container.setAttribute('class', 'container');
app.appendChild(logo);
app.appendChild(container);


// Fetch method
fetch('https://ghibliapi.herokuapp.com/films')
	.then(response => { return response.json(); })
	.then(data => {
		data.forEach(movie => {
		let card = document.createElement('div');
		card.setAttribute('class', 'card');
		container.appendChild(card);

		let h1 = document.createElement('h1');
		h1.textContent = movie.title;
		card.appendChild(h1);

		let p = document.createElement('p');
		let description = movie.description.substring(0, 300);
		p.textContent = `${description}...`;
		card.appendChild(p);
	})
})

// Both methods are same but fetch method is easy to read and return promise

// XMLHttpRequest() method
/*var request = new XMLHttpRequest();
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
request.onload = function (){
	var data = JSON.parse(this.response);
	data.forEach(movie => {
		let card = document.createElement('div');
		card.setAttribute('class', 'card');
		container.appendChild(card);

		let h1 = document.createElement('h1');
		h1.textContent = movie.title;
		card.appendChild(h1);

		let p = document.createElement('p');
		let description = movie.description.substring(0, 300);
		p.textContent = `${description}...`;
		card.appendChild(p);

	})
}
request.send();*/


//using local Storage
function liMaker(text){
	const li = document.createElement('li');
	li.textContent = text;
	ul.appendChild(li);
}

const divEle = document.createElement('div');
const h1 = document.createElement('h1');
const h2 = document.createElement('h2');
const form = document.createElement('form');
const input = document.createElement('input');
const ul = document.createElement('ul');
const button = document.createElement('button');

input.setAttribute('id', 'item');
input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'new');
input.setAttribute('required', '');
divEle.setAttribute('class', 'small-container');

h1.textContent = 'Movie lists are here';
h2.textContent = 'Movie List';
button.textContent = 'Clear All';

document.body.appendChild(divEle);
divEle.appendChild(h1);
divEle.appendChild(form);
form.appendChild(input);
divEle.appendChild(h2);
divEle.appendChild(ul);
divEle.appendChild(button);

let itemsArray = localStorage.getItem('items')
	? JSON.parse(localStorage.getItem('items'))
	: [];

const data = JSON.parse(localStorage.getItem('items'));

form.addEventListener('submit', function (e){
	e.preventDefault();
	itemsArray.push(input.value);
	localStorage.setItem('items', JSON.stringify(itemsArray));
	liMaker(input.value);
	input.value = '';
});

data.forEach(item => liMaker(item));

button.addEventListener('click', function (e){
	localStorage.clear();
	while(ul.firstChild){
		ul.removeChild(ul.firstChild);
	}
})






































