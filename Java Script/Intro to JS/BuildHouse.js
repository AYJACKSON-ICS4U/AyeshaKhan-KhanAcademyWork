//9/26/17
//Ayesha Khan

background(219, 255, 255);//sky

//ground
fill (47, 99, 52);
rect (0, 350, 400, 100);

//body
fill(255, 255, 255);
rect(60, 150, 280, 207);

for (var w = 308; w > 107; w -= 22)
{
for(var e = 56; e < 317; e +=48)
{
image(getImage("cute/StoneBlockTall"), e, w, 50,50);
}
}



//roof
fill(174, 180, 214);
triangle(200, 28, 350, 150, 50, 150);


var x = 304;
   for ( var y = 102; y > 13 ; y -= 20)
    {
         
         
         image(getImage("cute/RoofEast"), x ,y, 49,49);
         x -= 20;
    }
    
var q = 47;
   for ( var t = 102;t > 13 ; t -= 20)
    {
         
         
         image(getImage("cute/RoofWest"), q ,t, 49,49);
         q += 20;
    }
    
for (var i = 91; i < 271 ; i+= 10)
{
    
for (var j = 101; j > 60; j -=20)
{
image(getImage("cute/RoofSouth"), i ,j, 49,49);
}
    i+=20;
}

image(getImage("cute/RoofSouth"), 219,47, 49,49);
image(getImage("cute/RoofSouth"), 178,46, 49,49);
image(getImage("cute/RoofSouth"), 133,47, 49,49);
image(getImage("cute/RoofSouth"), 274,102, 49,49);
image(getImage("cute/RoofSouth"), 180,26, 49,49);
var l = 306;
for (var k = 100; k > 10; k -=20)
{
image(getImage("cute/RoofSouthEast"), l ,k, 49,49);
l -= 22;
}
    
var h = 45;
for (var q = 100; q > 10; q -=20)
{
image(getImage("cute/RoofSouthWest"), h ,q, 49,49);
h += 22;
}

image(getImage("cute/RoofSouthWest"), 155 ,7, 49,49);
image(getImage("cute/RoofSouthEast"), 203 ,7, 49,49);

//door

fill(120, 80, 19);
rect(180, 280, 40, 77);
//knob
fill(224, 215, 215);
ellipse( 189, 326,10,10);

//windows
strokeWeight(3);
stroke(117, 88, 55);
for(var v = 194; v< 248; v += 29)
{
for(var t = 96; t< 153; t+=29)
{
    fill(195, 234, 247);
    rect(t,v,29,29);
}
}

strokeWeight(3);
stroke(117, 88, 55);
for(var v = 194; v< 248; v += 29)
{
for(var t = 247; t< 304; t+=29)
{
    fill(195, 234, 247);
    rect(t,v,29,29);
}
}

//bushes

for(var r = 50; r<155; r +=24)
{
    image(getImage("cute/GrassBlock"), r, 338, 36, 30);
}

for(var r = 221; r<322; r +=24)
{
    image(getImage("cute/GrassBlock"), r, 338, 36, 30);
}


image(getImage("cute/TreeTall"), 9, 246, 100,152);
image(getImage("cute/TreeShort"), 61, 268, 100,132);
image(getImage("cute/TreeUgly"), 271, 279, 100,131);
