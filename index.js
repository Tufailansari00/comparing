for(let i=1;i<products.length;i++){
    document.getElementById('select1').innerHTML += `
    <option value="${i}">${products[i].title}</option>
    `
    
}
for(let i=1;i<products.length;i++){
    document.getElementById('select2').innerHTML += `
    <option value="${i}">${products[i].title}</option>
    `
    
}
function item1(a){
    document.getElementById('img1').src = products[a].image
    document.getElementById('price1').innerHTML = products[a].price
    document.getElementById('brand1').innerHTML = products[a].brand
    document.getElementById('decs1').innerHTML = products[a].description


}

function item2(a){
    document.getElementById('img2').src = products[a].image
    document.getElementById('price2').innerHTML = products[a].price
    document.getElementById('brand2').innerHTML = products[a].brand
    document.getElementById('decs2').innerHTML = products[a].description


}
