const humburger = document.getElementById('humburger');
const lien= document.getElementById('lien');
humburger.addEventListener('click',() => {
	lien.classList.toggle('active');
	/*toggle il affiche ou masque le menu*/
});