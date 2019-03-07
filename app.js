document.addEventListener("keydown", (e)=>{
// console.log(e.keyCode);
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
const key = document.querySelector(`.boxNote[data-key="${e.keyCode}"]`);


if(!audio) return;

audio.currentTime=0;

audio.play();

key.classList.add("playing");
});


function removeTransition(val){
	if(val.propertyName !=="transform") return;
	this.classList.remove("playing");
	console.log(val.propertyName);
}
const endAnimation = document.querySelectorAll(".boxNote");
endAnimation.forEach(element => element.addEventListener("transitionend", removeTransition));

// document.addEventListener("click", (e)=>{
// console.log(e.keyCode);
// });