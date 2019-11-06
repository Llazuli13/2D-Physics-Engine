/*jslint browser */


var gEngine = gEngine || {};
gEngine.Core = (function () {
var mAllObjects = [];
var mCanvas, mContext, mWidth = 800, mHeight = 450;
mCanvas = document.getElementById('canvas');
mContext = mCanvas.getContext('2d');
mCanvas.height = mHeight;
mCanvas.width = mWidth;


var initializeEngineCore = function () {
  runGameLoop();
};


var runGameLoop = function () {
  requestAnimationFrame(function() {
    runGameLoop();
  })
  updateUIEcho();
  draw();
};






var updateUIEcho = function () {
  document.getElementById("uiEchoString").innerHTML = 
"<p><b>Selected Object:</b>:</p>" +
      "<ul style=\"margin:-10px\">" + 
      "<li>Id: " + gObjectNum + "</li>" +
      "<li>Center: " + mAllObjects[gObjectNum].mCenter.x. 
toPrecision(3) + "," + 
      mAllObjects[gObjectNum].mCenter.y.toPrecision(3) + "</li>" +
      "</ul> <hr>" + "<p><b>Control</b>: of selected object</p>" +
      "<ul style=\"margin:-10px\">" + 
      "<li><b>Num</b> or <b>Up/Down Arrow</b>: SelectObject</li>" +
      "</ul> <hr>" + 
      "<b>F/G</b>: Spawn [Rectangle/Circle] at random location" + "<hr>";
};

//iterates through and invokes the corresponding draw functions
//for each of the shape objects in the list.
//the currently selected object will be drawn in red, the rest blue.
var draw = function () {
  mContext.clearRect(0, 0, mWidth, mHeight);
  var i;
  for (i = 0; i < mAllObjects.length; i++) {
      mContext.strokeStyle = 'blue';
      if (i === gObjectNum)
          mContext.strokeStyle = 'red';
      mAllObjects[i].draw(mContext);
  }
};
var mPublic = {
initializeEngineCore: initializeEngineCore,
mAllObjects: mAllObjects,
mWidth: mWidth,
mHeight: mHeight,
mContext: mContext
};
return mPublic;
}());




