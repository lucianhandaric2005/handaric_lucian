// Cache yhe DOM
var buton = document.getElementById("button")
var body = document.getElementById("body")
var nume = document.getElementById("nume")
var prenume = document.getElementById("prenume")
var img = document.getElementById("imagine")
var asteptari = document.getElementById("asteptari")
var ann= document.getElementById("an")

const d = new Date()
var year= d.getFullYear()

buton.addEventListener("click", altaviata)

ann.addEventListener("mouseover", displayAge)

function displayAge()
{
	ann.innerHTML = year-ann.innerHTML
}

function altaviata()
{
	nume.innerHTML="Functie: Seful la bani"
	prenume.innerHTML="Loc: Iacobeni City"
	asteptari.innerHTML="Experiente: <ol><li>Work and travel</li><li>    Proiect cercetare</li></ol>"
	img.src = "luci.jpg"
	body.style.backgroundColor="white"
	body.style.color= "blue"
	img.style.opacity="70%"
	img.style.borderWidth = "25px"
	img.style.height="600px"
	img.style.width=="100px"
	
	
	
	//grosimea imaginii
	
}
