var hideLoad = document.getElementById('load');
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
	if (data.sprites.front_shiny != null){
	img.setAttribute('src', data.sprites.front_shiny);
	}else{
		img.setAttribute('src', data.sprites.front_default);
	}
	cont.appendChild(textContainer);
	cont.appendChild(img);


	document.body.appendChild(cont);

	let cards = document.getElementsByClassName('pokemon');


	setTimeout(()=>{

		hideLoad.style.display ="none";
	},1000);

function searchable(str){
	hideLoad.style.display = "inline-block";
	setTimeout(()=>{
	hideLoad.style.display ="none";
},2000);
		var searchedPokemon = "http://pokeapi.co/api/v2/pokemon/" + str + "/";
	console.log(searchedPokemon);

		xhr3.open('GET', searchedPokemon);


		xhr3.send();

}

 function random(){
	 let num = Math.floor(Math.random()* 721 + 1);
	 return num;
 }


var search = document.getElementById('search');
let btn = document.getElementById('btn');
let randBtn = document.getElementById("randBtn");
btn.addEventListener('click', ()=>{searchable(search.value)});
randBtn.addEventListener('click', ()=>{searchable(random())});
search.addEventListener('click', ()=>{search.setAttribute('value', '')});




});

xhr3.open('GET', 'http://pokeapi.co/api/v2/pokemon/pikachu/');


xhr3.send();
