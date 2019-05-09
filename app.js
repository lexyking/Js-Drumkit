const main = document.querySelector('main');

console.log(main)
// main.addEventListener('keydown', (e) => {
// 	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
// 	const key = document.querySelector(`.boxNote[data-key="${e.keyCode}"]`);
// 	if (!audio) return;

// 	audio.currentTime = 0;

// 	audio.play();

// 	key.classList.add('playing');

// 	console.log(e.keyCode)
// })


// document.addEventListener('keydown', e => {
// 	// console.log(e.keyCode);
// 	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
// 	const key = document.querySelector(`.boxNote[data-key="${e.keyCode}"]`);

// 	if (!audio) return;

// 	audio.currentTime = 0;

// 	audio.play();

// 	key.classList.add('playing');
// });

function removeTransition(val) {
	if (val.propertyName !== 'transform') return;
	this.classList.remove('playing');
	// console.log(val.propertyName);
}
const boxNotes = document.querySelectorAll('.boxNote');
boxNotes.forEach(element => element.addEventListener('transitionend', removeTransition));



boxNotes.forEach(boxNote => boxNote.addEventListener('click',
		() => {
			const audio = document.querySelector(`audio[data-key='${boxNote.getAttribute('data-key')}'`);
			audio.play();
			boxNote.classList.add('playing');
		})

);