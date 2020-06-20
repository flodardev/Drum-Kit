document.querySelectorAll(".drum").forEach((element) =>
	element.addEventListener("click", () => {
		var buttonInnerText = element.innerText;
		playSound(buttonInnerText);
	}),
);

document.addEventListener("keydown", (event) => {
	playSound(event.key);
});

function playSound(key) {
	buttonAnimation(key);
	switch (key) {
		case "w":
			var audio = new Audio("/sounds/tom-1.mp3");
			audio.play();
			break;

		case "a":
			var audio = new Audio("/sounds/tom-2.mp3");
			audio.play();
			break;

		case "s":
			var audio = new Audio("/sounds/tom-3.mp3");
			audio.play();
			break;

		case "d":
			var audio = new Audio("/sounds/tom-4.mp3");
			audio.play();
			break;

		case "j":
			var audio = new Audio("/sounds/kick-bass.mp3");
			audio.play();
			break;

		case "k":
			var audio = new Audio("/sounds/snare.mp3");
			audio.play();
			break;

		case "l":
			var audio = new Audio("/sounds/crash.mp3");
			audio.play();
			break;

		default:
			alert("Please press the following keys only.");
			break;
	}
}

function buttonAnimation(currentKey) {
	var activeKey = document.querySelector("." + currentKey);
	activeKey.classList.add("pressed");
	setTimeout(() => {
		activeKey.classList.remove("pressed");
	}, 100);
}
