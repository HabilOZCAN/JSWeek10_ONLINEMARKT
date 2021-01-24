/**
 * Istenen markette bulunan malların bir listesinin ortaya konulması ve bu şekilde istenen ürünlerin 
 * alışveriş sepetine alınarak satın alınmasının sağlamasıdır. 
 * Bu alıştırmada sepete ekleme ve çıkarma işlemeri implemente edilmiş ve 
 * alışveriş sepetinde bulunan ürünlerin fiyatının hesaplaması amaçlanmıtır.
 */



const selectedProducts = [];

element = document.getElementById("productlist");

element.addEventListener("click", function (pEvent) {
    let button = pEvent.target;
    let parentDiv = document.getElementById('selectedproduct');
    let index = button.id;
    if (pEvent.target.nodeName.toLowerCase() === "button") {
        if (selectedProducts.length !== 0 && selectedProducts.some(elem => elem.productName === productList[index].productName)) {
            let seachedIndex = selectedProducts.findIndex(item => item.productName === productList[index].productName);
            selectedProducts[seachedIndex].count += 1;
        } else {
            let tempElement = {
                productName: "",
                price: 0,
                productImage: "",
                count: 1
            };
            tempElement.productName = productList[index].productName;
            tempElement.price = productList[index].price;
            tempElement.productImage = productList[index].productImage;
            selectedProducts.push(tempElement);
        }
        parentDiv.innerHTML = "";
        parentDiv.innerHTML = `
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
        let price = 
        priceCalcuation(selectedProducts);

        parentDiv.innerHTML += `
                                <div>
                                    <p>TOTAL :</p>
                                    <p>${price} CH</p>
                                    <button id="priceButton">Buy</button>
                                </div>
                            `
    }
});

elementrem = document.getElementById("selectedproduct");
elementrem.addEventListener("click", function (pEvent) {
        let button = pEvent.target;
        let parentDiv = document.getElementById('selectedproduct');
        let index = button.id;
        if (pEvent.target.nodeName.toLowerCase() === "button") {
            if (selectedProducts[index].count === 1) {
                selectedProducts.splice(index, 1);
            } else {
                selectedProducts[button.id].count -= 1;
            }
        }

        if (selectedProducts.length !== 0) {

            parentDiv.innerHTML = "";
            parentDiv.innerHTML = `
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
            let price =
            priceCalcuation(selectedProducts);

            parentDiv.innerHTML += `
                                <div>
                                    <p>TOTAL :</p>
                                    <p>${price} CH</p>
                                    <button id="priceButton">Buy</button>
                                </div>
                            `
        }//if block controls the the selectedProduct array not empty
        else{
            parentDiv.innerHTML = "";
            parentDiv.innerHTML = `
                                <i class="fa fa-shopping-cart"></i>
                                <div>
                                    <p>Product Name</p>
                                    <p>Price</p>
                                    <p>Product Image</p>
                                </div>`;
        }

    } //Button If so all important event listener action should be upper of this currly breaket written.
); //end of action addEventListener....


function priceCalcuation(pProductsList){
    let total = 0;
    pProductsList.forEach(element => {
        total +=element.count*element.price; 
    });
    return (Math.round(total * 1000)/1000).toFixed(2);
}