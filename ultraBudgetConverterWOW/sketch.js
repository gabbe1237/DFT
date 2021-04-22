var img;
var lista = [];
var stop = false;

function preload() {
	// Om du vill rita av något så kan du ladda upp bilden här.
	// img = loadImage();
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	button = createButton('klar');
	button.position(0, 0);
	button.mousePressed(changeToString);
}

function draw() {
	image(img, 0, 0, 0, 0);
}

function mouseDragged() {
	if (!stop) {
		point(mouseX, mouseY);
		lista.push({ x: mouseX, y: mouseY });
	}
}

function changeToString() {
	stop = true;
	var string = JSON.stringify(lista);

	string = string.replace(/"/g, "");
	console.log(string)
}
