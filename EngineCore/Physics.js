var gEngine = gEngine || {};
gEngine.Physics = (function () {
  var collision = function () {
    var i, j;
    for (i=5; i <gEngine.Core.mAllObjects.length; i++) {
      for (j = i +1; j <gEngine.Core.mAllObjects.length; j++) {
        if (gEngine.Core.mAllObjects[i].boundTest(gEngine.
          Core.mAllObjects[j])) {
          gEngine.Core.mContext.strokeStyle = 'green';
          gEngine.Core.mAllObjects[i].draw(gEngine.Core.mContext);
          gEngine.Core.mAllObjects[j].draw(gEngine.Core.mContext);
          console.log("Collision detected!");
        }
      }
    }
  };
  var mPublic = { 
    collision: collision
  };
  
  return mPublic;
  
}());