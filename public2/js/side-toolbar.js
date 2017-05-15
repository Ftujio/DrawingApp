let element = document.getElementsByClassName("color");
var color = "black";

setToolBGColor2();

for(let i = 0; i < toolNum; i++){
	element[i].parentNode.style.backgroundColor = "#f2f2f2";
	if(i == (toolNum - 1)){
		element[i + 1].parentNode.style.backgroundColor = "#d9d9d9";
	}
}

function setToolBGColor2(){
	for(let i = 0; i < element.length; i++){
		element[i].parentNode.style.backgroundColor = "#f2f2f2";
	}
}

for(let i = 0; i < element.length; i++){
	element[i].style.backgroundColor = element[i].id;
	element[i].addEventListener("click", function(e){
		color = element[i].id;
		console.log(color);
		setToolBGColor2();
		element[i].parentNode.style.backgroundColor = "#d9d9d9";
	});
}
