//your JS code here. If required.
const audio = document.getElementById('audio');
const buttons = document.querySelectorAll('.btn')

buttons.forEach(button=>{
	button.addEventListener('click', ()=>{
		const sound = button.innerText;
		audio.src=`sounds/${sound}`;
		audio.play();
	})
})