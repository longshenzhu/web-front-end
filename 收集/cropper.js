const cropper = function(src, imgDomWidth, imgDomHeight, newWidth, newHeight, startX, startY, ratio) {
  if(!src || !imgDomWidth || !imgDomHeight || !newWidth || !newHeight || !startX || !startY){
    console.error("截图参数传入有误");
    return;
  }
  console.log("截图参数：",src, imgDomWidth, imgDomHeight, newWidth, newHeight, startX, startY, ratio);
  return new Promise((resolve, reject) => {
    var imgObject = new Image();
    imgObject.crossOrigin = 'anonymous';
    imgObject.src = src;
    imgObject.onerror = function (){
      // console.error("图片加载失败，请检查图片路径是否有误！");
      reject("图片加载失败，请检查图片路径是否有误！");
    }
    imgObject.onload = function (){
        let newImg = getImagePortion(imgObject, imgDomWidth, imgDomHeight, newWidth, newHeight, startX, startY, ratio);
        resolve(newImg);
    }
  })
}

//图片截取
const getImagePortion = function(imgObj, imgDomWidth, imgDomHeight, newWidth, newHeight, startX, startY, ratio) {
  //imgDomWidth, imgDomHeight 原图片需要压缩的宽高， newWidth, newHeight, startX, startY：截图宽高和起始位置
  //set up canvas for thumbnail 为截图提供canvas
  var tnCanvas = document.createElement('canvas');
  var tnCanvasContext = tnCanvas.getContext('2d');
  tnCanvas.width = newWidth;
  tnCanvas.height = newHeight;
  
  //将源图片放置到canvas
  var bufferCanvas = document.createElement('canvas');
  var bufferContext = bufferCanvas.getContext('2d');
  bufferCanvas.width = imgDomWidth;
  bufferCanvas.height = imgDomHeight;
  bufferContext.drawImage(imgObj, 0, 0, imgDomWidth, imgDomHeight);

  //剪裁图片
  tnCanvasContext.drawImage(bufferCanvas, startX, startY, newWidth, newHeight, 0, 0, newWidth, newHeight);
  return tnCanvas.toDataURL();
}

export { cropper, getImagePortion }
