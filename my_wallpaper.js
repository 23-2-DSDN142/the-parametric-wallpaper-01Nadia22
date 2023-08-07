/////////////////////////////////

//Wallpaper 9:

//your parameter variables go here!
var petalsize1 = 50;
var petalsize2 = 9;
var petal1y=70
var petal1x=50
var Flowercoresize = 30
//var flowercolorA = color(252, 223, 104);//yellow
//var flowercolorB = color(193, 104, 252);//purple
//var flowercolorC = color(252, 104, 143);//pink
//var flowercolorD = color(255, 171, 82,15);//orange
//var Flowercorecolor = color(252, 250, 235,150);

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);

  pWallpaper.resolution(FIT_TO_SCREEN);

  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 320;
  pWallpaper.grid_settings.cell_height = 300;
  pWallpaper.grid_settings.row_offset  = 160;
}

function wallpaper_background() {
  background(255, 248, 232);
}

function my_symbol() {
  var flowercolorA = color(252, 223, 104,150);//yellow
  var flowercolorB = color(193, 104, 252,150);//purple
  var flowercolorC = color(252, 104, 143,120);//pink
  var flowercolorD = color(255, 171, 82,15);//orange
  var Flowercorecolor = color(252, 250, 235,150);
 
  let petal1x = 50;
if (petal1x > 50) {
  noStroke();
  fill(flowercolorD)
  circle(petal1x+312, petal1y+74, Flowercoresize+10);
} else {
  noStroke();
  fill(flowercolorD)
  circle(petal1x+152, petal1y+214, Flowercoresize+200);
}

  strokeWeight(2)//high leaf
  stroke(flowercolorC);
  fill(255, 248, 232)
  curve(115, 226, 103, 74, 193, 51, 205, 265);
  curve(115, -126, 103, 74, 193, 51, 205, -165);
  curve(-5, -26, 103, 74, 193, 51, 195, 105);
  line(150,40,140,71);
  line(140,43,130,74);
  line(170,38,160,63);

  strokeWeight(2)//low leaf
  stroke(flowercolorC);
  fill(255, 248, 232)
  curve(175, 526, 153, 234, 53, 201, -95, 195);
  curve(15, -76, 153, 234, 53, 201, 105, -155);
  curve(15, 26, 153, 234, 53, 201, 105, 105);
  line(92,201,100,232);
  line(116,201,126,242);
  line(84,201,92,229);

  fill(flowercolorA);//yellow flower
  noStroke();
  circle(petal1x, petal1y, petalsize1);//Petal
  circle(petal1x+20, petal1y-20, petalsize1);//Peta2
  circle(petal1x+42, petal1y-5, petalsize1);//Peta3
  circle(petal1x+37, petal1y+21, petalsize1);//Peta4
  circle(petal1x+10, petal1y+23, petalsize1);//Peta5
  fill(Flowercorecolor);
  circle(petal1x+22, petal1y+4, Flowercoresize);//cores

  fill(flowercolorB);//purple flower
  noStroke();
  circle(petal1x+160, petal1y+100, petalsize1);//Petal
  circle(petal1x+180, petal1y+80, petalsize1);//Peta2
  circle(petal1x+202, petal1y+95, petalsize1);//Peta3
  circle(petal1x+197, petal1y+121, petalsize1);//Peta4
  circle(petal1x+170, petal1y+123, petalsize1);//Peta5
  fill(Flowercorecolor);
  circle(petal1x+182, petal1y+104, Flowercoresize);//cores
 
}