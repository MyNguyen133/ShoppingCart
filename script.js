const btn = document.querySelectorAll("button");


btn.forEach(function(button, index) {
    button.addEventListener("click", function(event) {
        var btnItem = event.target;
        var product = btnItem.parentElement;
        var productImg = product.querySelector("img").src;
        var productName = product.querySelector("p").innerText;
        var productPrice = product.querySelector("p1").innerText;

        addcart(productPrice, productImg, productName);
        inputchange()
       deleteCart();
       
    })
})

function addcart(productPrice, productImg, productName) {
    var addtr = document.createElement("tr");
    var trcontent = '<tr><td><img style="width: 150px;" src="' + productImg + '">' + productName + '</td><td><p><span class="price">' + productPrice + '</span><sup>đ</sup></p></td><td><input style="width:30px" type="number" value="1" min="1"></td><td style="cursor:pointer;"><span class="cart-delete">Xóa</span></td></tr>';
    var cartTable = document.querySelector("tbody");
    addtr.innerHTML = trcontent;
    cartTable.appendChild(addtr);
    
   
    carttotal();
}
function carttotal() {
    var cartItem = document.querySelectorAll("tbody tr");
    var totalC = 0;
    for (var i = 0; i < cartItem.length; i++) {
        var inputElement = cartItem[i].querySelector("input");
        if (inputElement) {
            var inputValue = inputElement.value;
            var productPriceStr = cartItem[i].querySelector(".price").innerHTML;
            var productPrice = parseFloat(productPriceStr);
            var totalA = inputValue * productPrice * 1000000;
            totalC = totalC + totalA;
        }
    }
    var cartTotalA = document.querySelector(".price-total span");
    cartTotalA.innerText = totalC.toLocaleString('de-DE');
    
    
}

//---------------Delete--------------
function deleteCart() {
    var cartItem = document.querySelectorAll("tbody tr");
    for (var i = 0; i < cartItem.length; i++) {
        var productT = document.querySelectorAll(".cart-delete");
        productT[i].addEventListener("click", function(event) {
            var cartDelete = event.target;
            var cartitemR = cartDelete.parentElement.parentElement;
            cartitemR.remove();
            carttotal();
           
        });
    }
}

function inputchange(){
    var cartItem = document.querySelectorAll("tbody tr");
    for (var i = 0; i < cartItem.length; i++) {
        var inputValue = cartItem[i].querySelector("input");
        inputValue.addEventListener("change",function(){
        carttotal()
        })
        deleteCart();
    }
    

}


