/*jslint browser */
var gObjectNum = 0;


function userControl(event) {
  var keycode;
  var width = gEngine.Core.mWidth;
  var height = gEngine.Core.mHeight;
  var context = gEngine.Core.mContext;

  if (window.event) { //IE
    keycode = event.keyCode;
  }
  else if (event.which) { //Netscape/Firefox/Opera
    keycode = event.which;
  }
  
if (keycode === 70) {    // f
    var r1 = new Rectangle(new Vec2(Math.random()*width*0.8,  
    Math.random()*height*0.8), 
    Math.random() * 30+10,  
    Math.random() * 30+10);
}
if (keycode === 71) { //g
    var r1 = new Circle(new Vec2(Math.random()*width*0.8,  
    Math.random()*height*0.8), 
    Math.random() * 10 + 20);
}

  if (keycode >= 48 && keycode <= 57) {  //number
      if (keycode - 48 < gEngine.Core.mAllObjects.length)
          gObjectNum = keycode - 48;
  }
  if (keycode === 38) {   //up arrow
      if (gObjectNum > 0)
          gObjectNum--;
  }
  if (keycode === 40) {   // down arrow
      if (gObjectNum < gEngine.Core.mAllObjects.length-1)
          gObjectNum++;
  }
}
