
//<script src="./index.js"></script>




console.log("hello world")

document.addEventListener("DOMContentLoaded",readyFn,false)


var arr=document.getElementsByClassName("too")

for Each(function(element)){

	element.addEventListener("click",clickButton)
}
s
//keydown, keyup, blur, focus, mouseenter, mouseleave
//innerHTML

function readyFn(){
	document.getElementById("butt1").addEventListener("click",clickButton)
}




//attributes, classList(add,remove,toggle,contains,replace), className,id, innerHTML

//getElementsByClassName(class){

//}
// github phe. 
//getElementsByTagName(tag){

//}


function clickButton(){
//	alert("dont")
    if (document.getElementById("butt1").classList.contains("redbut")){
		this.classList.replace("redbut","greenbut")
	} else {
		this.classList.replace("greenbut","redbut")
	}
}

