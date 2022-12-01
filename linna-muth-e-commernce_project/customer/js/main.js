let productName=[
    {image:"image/ima.png" ,Name:"Black and White Round Neck  T-shirt ",Price:"PRICE :15$" },
    {image:"image/white.png" ,Name:"banded T-shirts for mens",Price:"PRICE :15$" },
    {image:"image/blue t-shirt.png",Name:"Blue T-shirt  for women Solid 100%",Price:"PRICE :10$"},
    {image:"image/grey.png",Name:" Yellow T-shirt",Price:"PRICE :15$"},
    {image:"image/pink.png" ,Name:"Black and White Round Neck Half Sleeve T-shirt  for women",Price:"PRICE :15$" },
    {image:"image/hodie white.png" ,Name:"banded T-shirts for mens",Price:"PRICE :15$" },
    {image:"image/white-pink.png",Name:"Blue T-shirt  for women Solid 100%",Price:"PRICE :10$"},
    {image:"image/image-white.png",Name:" White T-shirt",Price:"PRICE :15$"},
   
    
]

let card = document.querySelector(".search")
// let main_card= document.querySelector(".contain")
for(let product of productName){
    
    let div = document.createElement("div");
    div.setAttribute("class","ptoto")

    
    let div1 = document.createElement("div")
    div1.setAttribute("class","nav")
    div.appendChild(div1)

    let img = document.createElement("img");
    img.setAttribute("src",product.image);
    div1.appendChild(img)
    console.log(div1)

    let p = document.createElement("p");
    p.textContent=product.Name;
    
    let price = document.createElement("Price");
    price.textContent=product.Price;
    console.log(price)

    let button = document.createElement("button");
    button.textContent="BUY"

    div.appendChild(p);
    // p.appendChild(price);
    div.appendChild(price)
    div.appendChild(button);
    
    // card.appendChild(div)
    card.appendChild(div)

    // main_card.appendChild(div)
    // main_card.appendChild(div1)
    

}








// #funtion search name of product 
function searchName(event){
    let searchtext = searchNameInput.value;
    let mytext = searchtext.toLowerCase();
    let listname = document.querySelectorAll("#search .ptoto ");
    for(let value  of listname){
        let nameoflist = value.firstElementChild.textContent.toLowerCase();
        let displaystyle=""
        if(nameoflist.indexOf(mytext)==-1){
            displaystyle="none"
        }
        else{
            displaystyle="block"
        }
        value.style.display=displaystyle;
    }
}
// main
let searchNameInput = document.getElementById("research").querySelector("input");
searchNameInput.addEventListener("keyup",searchName)