function setup()
{
	createCanvas(600,600);

}

function draw()
{
	background(51);
}

function snake()
{
	this.name="snake";
}

var snake = new snake();
alert(snake.name);