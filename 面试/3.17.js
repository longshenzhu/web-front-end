var retange1 = [{x:1,y:2},{x:4,y:3}];
var retange2 = [{x:2,y:2},{x:5,y:3}];

function fn(retange1, retange2){
    var x1 = retange1[1];
    var x2 = retange2[0];

    //判断是否相交
    if(x1.x > x2.x && x1.y < x2.y){
        return 0;
    }
    //判断位置：左上、右下  | 左下、右上
    if(x1.x - x2.x >= 0 &&  x1.y-x2.y <= 0){
        //左上、右下
        
        return (x1.x- x2.x) * (x2.y -x1.y) ;
    }
    if(x1.x - x2.x > 0 &&  x1.y-x2.y > 0){
        //左下、右上
        return (x1.x- x2.x) * (x1.y -x2.y);
    } 
}
console.log(fn(retange1, retange2));

// <!-- function area(point1, point2){

//     //计算面积
//     return (x1-x2)*(y2 - y1);
// } -->