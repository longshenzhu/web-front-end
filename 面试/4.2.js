

let form = {
    listA: [
        {price: 8, title: "ss", id: 1 },
        {price: 15, title: "ss", id: 2 }
    ],
    listB: [
        {price: 16, title: "ss", id: 3 },
        {price: 28, title: "ss", id: 4 },
    ],
    listC: [
        {price: 59, title: "ss", id: 5 },
        {price: 88, title: "ss", id: 6 },
        {price: 168, title: "ss", id: 7 }
    ],
}
 let res = 0;
 [...form.listA,...form.listB, ...form.listC].map(function(item){
    res += item.price
 })
console.log(res);