// SLIDER CONFIGURATION

const profiles = {
	profile0: [
		"Imagem 0",
		"Nome 0",
		"Função 0",
	],
	profile1: [
		"Imagem 1",
		"Nome 1",
		"Função 1",
	],
	profile2: [
		"Imagem 2",
		"Nome 2",
		"Função 2",
	],
	profile3: [
		"Imagem 3",
		"Nome 3",
		"Função 3",
	],
	profile4: [
		"Imagem 4",
		"Nome 4",
		"Função 4",
	],
};

var profileName = document.getElementById("profileName");
var profileFunc = document.getElementById("profileFunc");

var profileIndex = 0;
var profilesLength = Object.keys(profiles).length;	// equals to 5

function plusProfiles(n) {
	changeProfiles(profileIndex += n);
}

function changeProfiles(n) {
	// profileIndex não pode ser menor que 0
	if (n >= profilesLength) { profileIndex = 0; }
	
	// profileIndex não pode ser maior que 4
	if (n < 0) { profileIndex = profilesLength - 1; }
	
	profileName.innerHTML = profiles["profile".concat(profileIndex)][1];
	profileFunc.innerHTML = profiles["profile".concat(profileIndex)][2];
}

changeProfiles(profileIndex);