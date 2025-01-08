
let productsdiv = document.querySelector(".product");
let Categorylistdiv=document.querySelector(".Categorylist");
let allcategory=[];
let displayProducts=async(allcheckcat=[])=>{
    // Categorylistdiv.innerHTML='';
    productsdiv.innerHTML='';
    let product= await fetch('https://fakestoreapi.com/products');
    console.log(product);
    let finalProduct = await product.json();
    console.log(finalProduct);
    finalProduct.forEach(element => {

        if(!allcategory.includes(element.category)){

        Categorylistdiv.innerHTML +=`<label for="">
                    <input type="checkbox" onclick='categoryFilter("")' value="${element.category}">${element.category}
                </label>`
                allcategory.push(element.category);
                
            }

            if(allcheckcat.length==0){
                allcheckcat=allcategory;
            }
            
            if(allcheckcat.includes(element.category)){

        productsdiv.innerHTML +=`<div class="productItems">
                <img src="${element.image}" alt="">
                <h4>${element.category}</h4>
                <p>Rs.${element.price} | ${element.rating.rate} </p>
                <h3>${element.title}</h3>
            </div>`
        }
    });
}
displayProducts();

let categoryFilter=()=>{
let checkInput=document.querySelectorAll("input[type='checkbox']")
let checkdata=[];
checkInput.forEach((e)=>{
    if(e.checked){
        checkdata.push(e.value);
    }
})
displayProducts(checkdata);
}
