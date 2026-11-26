
//ADD names of group members at top of sketch 
//Bharat Shah
//Please have each group member DUPLICATE THIS SKETCH and have it saved in your accounts
//Everyone will be submitting their versions individually 
//There are ~24 bugs + version control 
//please add a comment to what was fixed or adjusted for each one. Note that you may need to delete stuff. 
let nyan;
let noNyan;
///I am not sure what nyanBg is, I assume it is a variable, so I will add 'let'--Bharat
 let nyanBg; 
let variable; 
//adding sprinkles, which come to  think of it is not really used 
let sprinkles;
let circles = [];

//redefining this as colors as otherwise it is a mess
let colors = [
 [255, 0, 0],     // red 
  [255, 165, 0],   // orange 
  [255, 255, 0],   // yellow
  [0, 255, 0],     // green
  [0, 0, 255],     // blue
  [148, 0, 211],   // purple
  [150, 150, 150], // grey 
  [100, 100, 100], // darker grey 
  [255, 182, 193], // pink
  //I'll have to look at the colors more closely, but off the bat Idk what values hot pink would have, so I am adding a placeholder 100
  [255,100 , 180], // hot pink 
  [255, 228, 181], // beige 
  [0, 0, 0],       // black 
  [255, 255, 255]  // white 
];

let playbackRate = 1.0;


async function setup() {
  createCanvas(400, 400);
//background(noNyan);
  //the file is nyanCat.mp3, not NyanCat.mp3, correcting --Bharat
   nyan = await loadSound('medias/nyanCat.mp3');
  //semicolion missing, some edittors do not care but I will add it anyway- Bharat, also noNyan is used before it is defined, I am moving backlground there, also NyanCatless is nyancatless
  noNyan = await loadImage('medias/nyancatless.gif');
  noNyan.play();
  background(noNyan);
  //sprinkles = await loadImage('sprinkles.jpg'); 
 //I am guessing you want the gif to run in the background
}
//draw is closed too early, I think, 

function draw() {
  ///added this so the gif works kinda
   image(noNyan,0,0,400,400);

  noNyan.play();

//first of all, circles is used when it is empty, and mispelled   
  // Draw all circles
  for (let circle of circles) { 
    fill(circle.colors); 
    //elipse id mispelled
    ellipse(circle.x, circle.y, 50, 50); 
  }
  

  if (mouseIsPressed===true) {
    let c = random(colors);
    // I am guessung newCircle is an object, so backspacing between ney and cirle, also, mouseX id now being lowercased
    let newCircle = { 
      x: mouseX, 
      y: mouseY,
      //changing perenthisis to brackets
      colors: color(c[0], c[1], c[2]) 
    };
    circles.push(newCircle);
  }
  //removing close
  //adding a bracket here so colors and audio(I think) work as intended
///adding nyan.loop here otherwise, well, it does not quite work on the mousepressedfunction, if you hold it down for too long, it stops 
  //noNyan.start();
    //image(noNyan,0,0,400,400);

  nyan.loop();
}

function mousePressed() {
 //noNyan.start();
  
  let c = random(colors);
  let newCircle = {
    x: mouseX,
    y: mouseY,
    color: color(c[0], c[1], c[2])
  };
  circles.push(newCircle);
  ///nyan is mispelled as nayn, correcting
  ///also had to add nyan.start
  nyan.start();
  nyan.setVolume(0.5); 
  //ahgain, playbakRate was mispelled, it was declared as playbackRate, cirrecting  
  //noNyan.start();
  //noNyan.loop();
  nyan.rate(playbackRate); 
   nyan.loop();
  //update
}
function mouseReleased(){
  //I thought oausing it instead of outright stopping it was intended, hence the change
  nyan.pause();
  noNyan.pause();
//I am not sure if this is meant, I will close this
//I am taking a wild guess and assume you want to clear the cicles when the mouse releases, so I am adding that 
  //background(noNyan);
  ///we only want the array to get so big, I am not sure if this counts, but I want to eliminate all but the last idk 100 circles so we don't have a memory nightmare 
  //print(circles.length); 
  if(circles.length>=100)
    circles.splice(0,circles.length-100);
}

function keyPressed() {
  print("we entered the body");
  //triple equalrequired and removal of semicolon
  //ok, the constants, Down_ARROW, UP_ARROW, ETC are not working, need to andjust the mess to actual numbers
  if (keyCode === 38) { 
    //playbackrate us wrongly spelled
    playbackRate += 0.1; 
    //print(playbackRate);
    nyan.rate(playbackRate);
    print("issues updating?");
    //else needs else uf, allso all caps needed
  } else if(keyCode === 40) {
    //change max to math.max
    print("we entered down");
    playbackRate = max(0.1, playbackRate - 0.2); 
    nyan.rate(playbackRate);
  } else if (keyCode === 37) { 
    playbackRate = 1; //I am guessing you want to reverse it, or something, m , otherwise why multiply it by one, so changing
    nyan.rate(playbackRate); 
  }
print(keyCode);
  print(playbackRate);
  //this shows the playbackrate is not being updated
}

//removing dangling curly's
