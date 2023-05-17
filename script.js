//your JS code here. If required.
// const btn = document.getElementById("enterBtn");

// btn.addEventListener("click",()=>
// 	document.getElementById("status").innerText = "";
// 	document.querySelector("h1").innerText = "Entered Metaverse";
// );
function display(){
	document.getElementById("status").innerText = "";
	document.querySelector("h1").innerText = "Entered Metaverse";
	
}

document.getElementById("enterBtn").addEventListener("click", display);
