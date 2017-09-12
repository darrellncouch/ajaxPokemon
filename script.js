var xhr = new XMLHttpRequest();



xhr.addEventListener('load', function() {

	if (xhr.status !== 200) {
		return;
	}
	var pokeName = document.createElement('h2');
	var img = document.createElement('img');
	var data = JSON.parse(xhr.responseText);
	let cont = document.createElement('div');
	let textContainer = document.createElement('div')
	cont.className = "pokemon"
	console.log(data);

	pokeName.innerHTML = data.name;
	textContainer.appendChild(pokeName);
	for ( let i = 0; i < data.types.length; i++){
		let pokeType = document.createElement('p');
		pokeType.innerHTML = data.types[i].type.name;
		textContainer.appendChild(pokeType);
	}

	img.setAttribute('src', data.sprites.front_shiny)
	cont.appendChild(textContainer);
	cont.appendChild(img);

	document.body.appendChild(cont);
});

xhr.open('GET', 'http://pokeapi.co/api/v2/pokemon/376/');


xhr.send();


// second one

var xhr2 = new XMLHttpRequest();



xhr2.addEventListener('load', function() {
	if (xhr2.status !== 200) {
		return;
	}
	var pokeName = document.createElement('h2');
	var img = document.createElement('img');
	var data = JSON.parse(xhr2.responseText);
	let cont = document.createElement('div');
	let textContainer = document.createElement('div');
	cont.className = "pokemon"

	pokeName.innerHTML = data.name;
	textContainer.appendChild(pokeName);
	for ( let i = 0; i < data.types.length; i++){
		let pokeType = document.createElement('p');
		pokeType.innerHTML = data.types[i].type.name;
		textContainer.appendChild(pokeType);
	}
	img.setAttribute('src', data.sprites.front_shiny);
	cont.appendChild(textContainer);

	cont.appendChild(img);

	document.body.appendChild(cont);
});

xhr2.open('GET', 'http://pokeapi.co/api/v2/pokemon/429/');


xhr2.send();


//Third one
var xhr3 = new XMLHttpRequest();



xhr3.addEventListener('load', function() {
	if (xhr3.status !== 200) {
		return;
	}
	var pokeName = document.createElement('h2');

	var img = document.createElement('img');
	var data = JSON.parse(xhr3.responseText);
	let cont = document.createElement('div');
	let textContainer = document.createElement('div');
	console.log(data);
	cont.className = "pokemon"
	pokeName.innerHTML = data.name;
	textContainer.appendChild(pokeName);
	for ( let i = 0; i < data.types.length; i++){
		let pokeType = document.createElement('p');
		pokeType.innerHTML = data.types[i].type.name;
		textContainer.appendChild(pokeType);
	}
	img.setAttribute('src', data.sprites.front_shiny);
	cont.appendChild(textContainer);
	cont.appendChild(img);


	document.body.appendChild(cont);

	setTimeout(()=>{
		let hideLoad = document.getElementById('load');
		hideLoad.style.display ="none";
	},500);
});

xhr3.open('GET', 'http://pokeapi.co/api/v2/pokemon/1/');


xhr3.send();
