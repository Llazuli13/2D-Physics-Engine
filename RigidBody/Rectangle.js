var Rectangle = function (center, width, height) {
  RigidShape.call(this, center);
  this.mType = "Rectanlge";
  this.mWidth = width;
  this.mHeight = height;
  this.mVertex = [];
  this.mFaceNormal = [];
  //0--TopLeft;1--TopRight;2--BottomRight;3--BottomLeft
  this.mVertex[0] = new Vec2(center.x - width / 2, center.y - height /2);
  this.mVertex[1] = new Vec2(center.x + width / 2, center.y - height /2);
  this.mVertex[2] = new Vec2(center.x + width / 2, center.y + height /2);
  this.mVertex[3] = new Vec2(center.x - width / 2, center.y + height /2);
};
