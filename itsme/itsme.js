function setup() {
createCanvas(600, 600);

}
function draw() {
background(136, 179, 151);


// Hair Back
fill(54, 54, 54);
ellipse( 300, 270, 350, 350);
noStroke()
ellipse( 170, 290, 200, 200);
ellipse( 200, 180, 200, 200);
ellipse( 300, 140, 200, 200);
ellipse( 400, 180, 200, 200);
ellipse( 450, 280, 200, 200);

//body
fill(45, 65, 94);
ellipse( 300, 650, 180, 500);

// Face
fill(148, 99, 99);
ellipse( 300, 270, 250, 250);


// Hair Front
fill(54, 54, 54);
ellipse( 230, 150, 200, 100);
ellipse( 200, 240, 100, 100);
ellipse( 400, 240, 100, 100);
ellipse( 400, 150, 150, 100);

//Mouth
fill(54, 54, 54);
ellipse( 300, 360, 150, 2);

//Glasses Bridge
fill(54, 54, 54);
ellipse( 300, 270, 150, 2);

// Glasses
fill(196, 237, 255);
ellipse( 237, 270, 130, 130);
fill(196, 237, 255);
ellipse( 370, 270, 130, 130);

//Hands
fill(148, 99, 99);
ellipse( 90, 500, 100, 100);
ellipse( 510, 500, 100, 100);
}
