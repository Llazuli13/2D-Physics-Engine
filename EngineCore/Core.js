/*jslint browser */


var gEngine = gEngine || {};
var mCurrentTime, mElapsedTime, mPreviousTime = Date.now(),
mLagTime = 0;
var kFPS = 60; 
var kFrameTime = 1/kFPS;
var mUpdateIntervalInSeconds = kFrameTime;
var kMPF = 1000 * kFrameTime; //milliseconds per frame.


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
  //compute how much time has elapsed since the last RunLoop
  mCurrentTime = Date.now();
  mElapsedTime = mCurrentTime - mPreviousTime;
  mPreviousTime = mCurrentTime;
  mLagTime += mElapsedTime;
  //Update the game the appropriate number of time.
  //Update only the milliseconds per frame.
  //If the lag is greater then update frames, update until the logic has caught up.
  while(mLagTime >= kMPF) {
    mLagTime -= kMPF;
    update();
  }
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
      mAllObjects[gObjectNum].mCenter.y.toPrecision(3) + "</li>"  + 
      "<li>Angle: " + mAllObjects[gObjectNum].mAngle.toPrecision(3) + "</li>"  +
      "</ul> <hr>" + "<p><b>Control</b>: of selected object</p>" +
      "<ul style=\"margin:-10px\">" + 
      "<li><b>Num</b> or <b>Up/Down Arrow</b>: SelectObject</li>" +
      "<li><b<WASD</b> + <b>QE</b>: Position [Move + Rotate] </li>" +
      "</ul> <hr>" + 
      "<b>F/G</b>: Spawn [Rectangle/Circle] at random location" + 
      "<p><b>H</b>: Fix object</p>" +
      "<p><b>R</b>: Reset System</p>" +
      "<hr>";
};

var update = function () {
  var i;
  for (i = 0; i <mAllObjects.length; i++) {
    mAllObjects[i].update(mContext);
  }
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




