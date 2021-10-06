var subtotal=0;
var tax;
var grandTotal;

var menuItems = [
    {
        "name":"CAPPUCCINO",
        "price":"100.00",
        "image":"capuccino.jfif"
    },
    {
        "name":"ESPRESO",
        "price":"120.00",
        "image":"espresso.jfif",
    },
    {
        "name":"FRAPPUCINO",
        "price":"150.00",
        "image":"frap.jfif"
    },
    {
        "name":"LATTE",
        "price":"100.00",
        "image":"latte.jfif"
    },
    {
        "name":"MOCHA",
        "price":"110.00",
        "image":"mocca.jpg"
    },
    {
        "name":"COFFEE-CAKE",
        "price":"50.00",
        "image":"coffee cake.png"
    },
    {
        "name":"MANGO-JUICE",
        "price":"150.00",
        "image":"mango-juice.jpg"
    },
    {
        "name":"APPLE-JUICE",
        "price":"150.00",
        "image":"apple juice.jpg"
    },
]



function addItem(name, price){
    subtotal+=parseFloat(price);
    document.querySelector('#subtotal-num').innerHTML='P'+subtotal.toFixed(2);
    tax = subtotal*0.12;
    document.querySelector('#tax-num').innerHTML='P'+tax.toFixed(2);
    grandTotal = subtotal+tax;
    document.querySelector('#grandtotal-num').innerHTML='P'+grandTotal.toFixed(2);

    var cartItem =`   
    <div class="col-7">
        <div class="cart-item"><div class="cart-item-name">`+name+`</div>
        <div class="cart-items-price">P`+price+`</div>
         </div>
         </div>
           <div class="col-5 text-end cart-counter">
            <button class="btn btn-secondary" onclick="minusItem('`+name+`', '`+price+`')">-</button>
            <div class="cart-num">1</div>
            <button class="btn btn-secondary" onclick="addItem('`+name+`', '`+price+`')">+</button>
    </div>`;

    var checkID = document.getElementById('cart-'+name);
if(checkID){
    document.querySelector('#cart-'+name+' .cart-num').
    innerHTML=parseInt(document.querySelector('#cart-'+name+' .cart-num').innerHTML)+1;
}else{
    var div = document.createElement("div");
div.innerHTML = cartItem;
div.classList.add('row');
div.setAttribute('id','cart-'+name);
document.querySelector('#cart-item').appendChild(div);
    }
}
function minusItem(name, price){
    subtotal-=parseFloat(price);
    document.querySelector('#subtotal-num').innerHTML='P'+subtotal.toFixed(2);
    tax = subtotal*0.12;
    document.querySelector('#tax-num').innerHTML='P'+tax.toFixed(2);
    grandTotal = subtotal+tax;
    document.querySelector('#grandtotal-num').innerHTML='P'+grandTotal.toFixed(2);


    var checkID = document.getElementById('cart-'+name);
if(checkID){
    document.querySelector('#cart-'+name+' .cart-num').
    innerHTML=parseInt(document.querySelector('#cart-'+name+' .cart-num').innerHTML)-1;
    if(document.querySelector('#cart-'+name+' .cart-num').innerHTML<='0')
     document.querySelector('#cart-'+name).remove()
    }
}
function addMenu(name, price,image) {
    var cartItem=`
    <div class="menu-item" onclick="addItem('`+name+`', '`+price+`')">
    <img class="menu-item-image" src="image/`+image+`">
  <div class="menu-item-name">`+name+`</div>
  <div class="menu-item-price">P`+price+`</div>
</div>
`;
var div = document.createElement("div");
div.innerHTML = cartItem;   
div.classList.add('menu-item-container')              
    document.querySelector('#menu-item').appendChild(div);
}

function start(){
    for(var i=0; i<=menuItems.length-1; i++){
        addMenu(menuItems[i].name, menuItems[i].price, menuItems[i].image);
    }
}
start();