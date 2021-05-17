
Object.prototype.copy = function(){
    const obj = this;
    
    if(Array.isArray(obj)){
        return Array.slice.call(obj,0);
    }
    
    let res = {};
    if(typeof obj === "object" && obj !== null){
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                if(typeof obj[key] === "object" && obj[key] !== null){
                    if(res[key] == obj){
                        res[key] = obj;
                    }else{
                        res[key] = obj[key].copy();
                    }
                }else{
                    res[key] = obj[key];
                }
            }
        }
        return res;
    }else{
        return obj;
    }
}

const obj = {
    a: 1,
    b: ["a", 1, 2],
    c: null
}
console.log(obj.copy());