let products =
JSON.parse(
localStorage.getItem("products")
) || [];

function addProduct(){

let name =
document.getElementById("productName").value;

let qty =
document.getElementById("productQty").value;

if(name==="" || qty===""){
alert("Enter details");
return;
}

products.push({
name:name,
qty:qty
});

localStorage.setItem(
"products",
JSON.stringify(products)
);

showProducts();
}

function showProducts(){

let list =
document.getElementById("productList");

if(!list) return;

list.innerHTML="";

products.forEach(product=>{

let li =
document.createElement("li");

li.innerHTML=
product.name+
" - Qty: "+
product.qty;

list.appendChild(li);

});

let count =
document.getElementById("productCount");

if(count){
count.innerText =
products.length;
}
}

function clearProducts(){

localStorage.removeItem(
"products"
);

products=[];

alert("Inventory Cleared");
}

showProducts();