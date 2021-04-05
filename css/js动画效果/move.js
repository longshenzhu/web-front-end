//单属性运动
function startMove(obj, attr, target, cb) {
    clearInterval(obj.timer);
    obj.timer = setInterval(()=>{
        let cur = 0;
        if(attr == 'opacity'){
            cur = Math.round(parseFloat(getStyle(obj, attr))*100);
        } else {
            cur = parseInt(getStyle(obj, attr));
        } 
        let speed = (target - cur)/10;       //缓冲运动，越接近目标速度越小
        speed = speed > 0? Math.ceil(speed) : Math.floor(speed); 
        if(cur == target){
            clearInterval(obj.timer);
            if(cb){
                cb();
            }
        } else {
            if(attr == 'opacity') {
                obj.style.opacity = (cur + speed) /100;
            }else {
                obj.style[attr] = cur + speed + 'px';
            }
            
        } 
    },10);
}

//多属性同时运动
function startMoves(obj, options, cb) {
    var flag = true;   //运动都完成的标志
    clearInterval(obj.timer);
    obj.timer = setInterval(()=>{
        for (const attr in options) {
            if (options.hasOwnProperty(attr)) {
                const target = options[attr];
                let cur = 0;
                if(attr == 'opacity'){
                    cur = Math.round(parseFloat(getStyle(obj, attr))*100);
                } else {
                    cur = parseInt(getStyle(obj, attr));
                } 
                let speed = (target - cur)/10;       //缓冲运动，越接近目标速度越小
                speed = speed > 0? Math.ceil(speed) : Math.floor(speed); 
                if(cur != target) {
                    flag = false;
                }
                if(attr == 'opacity') {
                    obj.style.opacity = (cur + speed) /100;
                }else {
                    obj.style[attr] = cur + speed + 'px';
                }
            }
        }
        if(flag){
            clearInterval(obj.timer);
            if(cb){
                cb();
            }
        }
        
    },10);
}

function getStyle(obj, attr) {
            
    if(obj.currentStyle) {
        return obj.currentStyle[attr];
    }else {
        return getComputedStyle(obj, false)[attr];
    }
}

