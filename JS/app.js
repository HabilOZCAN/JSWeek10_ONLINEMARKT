const selectedProducts = [];

element = document.getElementById("productlist");

element.addEventListener("click", function (pEvent) {
    let button = pEvent.target;
    let parentDiv = document.getElementById('selectedproduct');
    let index = button.id;
    if (pEvent.target.nodeName.toLowerCase() === "button") {
        if(selectedProducts.length !==0 && selectedProducts.some(elem => elem.productName === productList[index].productName))
        {
                let seachedIndex = selectedProducts.findIndex(item => item.productName === productList[index].productName);
                selectedProducts[seachedIndex].count +=1; 
        }else{
            let tempElement = {productName:"", price:0, productImage:"", count:1};
            tempElement.productName = productList[index].productName;
            tempElement.price =  productList[index].price;
            tempElement.productImage = productList[index].productImage;    
            selectedProducts.push(tempElement);
        }
        parentDiv.innerHTML="";
        parentDiv.innerHTML = `<div id = "selectedproduct" class="generated">
                                <i class="fa fa-shopping-cart"></i>
                                <div>
                                    <p>Product Name</p>
                                    <p>Price</p>
                                    <p>Product Image</p>
                                </div>`;

        for (index = 0; index < selectedProducts.length; index++) {  
            newName = selectedProducts[`${index}`].productName;
            newPrice = selectedProducts[`${index}`].price;
            newImageSrc = selectedProducts[`${index}`].productImage;
            newCount = selectedProducts[`${index}`].count; 
            parentDiv.innerHTML += `<div class = "generated" id = "generatedSelection-${index}">
                                        <p>${newName}</p>
                                        <p>${newPrice} CH</p>
                                        <img src="${newImageSrc}">
                                        <p>${newCount}</p>
                                        <button id=${index}>Remove</button> 
                                    </div>`;
        }
        parentDiv.innerHTML+= `</div>`;
    

    }
});

elementrem = document.getElementById("selectedproduct");
elementrem.addEventListener("click", function (pEvent) {
    let button = pEvent.target;
    let parentDiv = document.getElementById('selectedproduct');
    let index = button.id;
    if (pEvent.target.nodeName.toLowerCase() === "button") {
            if(selectedProducts[index].count === 1){
                selectedProducts.splice(index, 1);
            }else{
            selectedProducts[button.id].count -=1; }
        }
        parentDiv.innerHTML="";
        parentDiv.innerHTML = `<div id = "selectedproduct" class="generated">
                                <i class="fa fa-shopping-cart"></i>
                                <div>
                                    <p>Product Name</p>
                                    <p>Price</p>
                                    <p>Product Image</p>
                                </div>`;

        for (index = 0; index < selectedProducts.length; index++) {  
            newName = selectedProducts[`${index}`].productName;
            newPrice = selectedProducts[`${index}`].price;
            newImageSrc = selectedProducts[`${index}`].productImage;
            newCount = selectedProducts[`${index}`].count; 
            parentDiv.innerHTML += `<div class = "generated" id = "generatedSelection-${index}">
                                        <p>${newName}</p>
                                        <p>${newPrice} CH</p>
                                        <img src="${newImageSrc}">
                                        <p>${newCount}</p>
                                        <button id=${index}>Remove</button> 
                                    </div>`;
        }
        parentDiv.innerHTML+= `</div>`;
    }
);