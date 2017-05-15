let element = document.getElementsByClassName("color");
var color = "black";

setCurrentTool();

function setToolBGColor(){
	for(let i = 0; i < toolNum - 1; i++){
		element[i].parentNode.style.backgroundColor = "#f2f2f2";
	}
}

for(let i = 0; i < element.length; i++){
	element[i].style.backgroundColor = element[i].id;
	element[i].addEventListener("click", function(e){
		color = element[i].id;
		element[i].parentNode.style.backgroundColor = "#d9d9d9";
	});
}
