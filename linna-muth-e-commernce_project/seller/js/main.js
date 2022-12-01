
const dialog = document.querySelector("#dailog_element");
const table = document.getElementById("list-product");

const btn_edit=document.querySelector("#edit")
const dailog_element=document.querySelector("#dailog_element")
// console.log(dialog)
let arrayOfproduct=[
    {
        img:"https://www.dominionpost.com/wp-content/uploads/2020/02/dove-resized.jpg",
        name:"T-shirt",
        description:"Black and White Round neck",
        price: 15,
    },
    {
        img:"https://www.dominionpost.com/wp-content/uploads/2020/02/dove-resized.jpg",
        name:"banded T-shirt",
        description:"White",
        price:15,
    },
    {
        img:"https://www.dominionpost.com/wp-content/uploads/2020/02/dove-resized.jpg",
        name:"T-shirt",
        description:"Blue",
        price:15,
    },
    {
        img:"https://www.dominionpost.com/wp-content/uploads/2020/02/dove-resized.jpg",
        name:"T-shirt",
        description:" Yellow",
        price:15 ,
    },
]

// function show________________________________________________
function show(element){
    element.style.display="block"
}
// function hide________________________________________________

function hide(element){
    element.style.display="none"
}

// save to local storage_______________________________________________
function saveProduct(){
    localStorage.setItem("arrayOfproduct" ,JSON.stringify(arrayOfproduct));
    console.log(localStorage)
}

// load function form local stroage_______________________________________________
function loadProduct(){
    let storeName = JSON.parse(localStorage.getItem("arrayOfproduct"));
    if(storeName !==null){
        Name = storeName;
        
    }
    
}


// create prodcut_______________________________________________

function displayList() {
    
    let listProduct = document.getElementById("tbody");
    listProduct.remove();
    let productTable = document.createElement("tbody");
    productTable.id = "tbody";
    
    table.appendChild(productTable);
    
    for(let index = 0; index< arrayOfproduct.length; index++) {
        let indexOfValue = arrayOfproduct[index];
        
        let tr = document.createElement("tr");
        tr.id = "table-row";
        tr.dataset.index = index;
        // console.log(tr)
        
        let nameProduct = document.createElement("td");
        nameProduct.textContent = indexOfValue.name;
        
        let descript = document.createElement("td");
        descript.textContent = indexOfValue.description;
        
        let price = document.createElement("td");
        price.textContent = indexOfValue.price;
        
        let img =document.createElement("img");
        img.src = indexOfValue.img;
        
        
        let storeImg = document.createElement("td");
        storeImg.id = "td-img"
        storeImg.appendChild(img);
        
        // button action 
        let tdButton = document.createElement("td");
        tdButton.id = "action"
        
        let bntDelete = document.createElement("button");
        bntDelete.id = "btn-delete";
        bntDelete.textContent = "Delete"
        bntDelete.addEventListener("click", deleteProduct)
        let bntEdit = document.createElement("button");
        bntEdit.id = "btn-edit";
        bntEdit.textContent = "Edit";
        tdButton.appendChild(bntDelete);
        tdButton.appendChild(bntEdit);
        
        
        
        tr.appendChild(storeImg);
        tr.appendChild(nameProduct);
        tr.appendChild(descript);
        tr.appendChild(price);
        tr.appendChild(tdButton);
        productTable.appendChild(tr);
        // console.log(productTable)
        
    }  
}
// create prodcut_______________________________________________
function addNewProduct(){
    show(dialog);
    // onCreate();
    // for show dialog form 
} 

// create prodcut_______________________________________________
function deleteProduct(event){
        let index = event.target.parentElement.parentElement.dataset.index;
        arrayOfproduct.splice(index,1)
        displayList();
 }
displayList(); 
    
// create prodcut_______________________________________________
function onCancel(){
    hide(dialog);
}
// create prodcut_______________________________________________
function onCreate(event){
    // console.log('ye')
    event.preventDefault();
    // show(dialog);
    console.log(document.querySelector("#img"))
    let newProduct = {};
    newProduct.img=document.querySelector("#img").value;
    newProduct.name=document.querySelector("#Name").value;
    newProduct.description=document.querySelector("#descrip").value;
    newProduct.price=document.querySelector("#price").value;
    arrayOfproduct.push(newProduct);
    hide(dialog)
    saveProduct();
    displayList();
}

// create prodcut_______________________________________________

// for add event listener_______________________________________________

let getBtnAddProduct = document.getElementById("btn-add-product");
getBtnAddProduct.addEventListener("click",addNewProduct)
// for call fiction _______________________________________________

// fuction edit
// let edit = document.querySelector("#edit") ;
// edit.addEventListener("click",editOfProduct)       
function editTask(event) {
    let editProduct = event.target.parentElement.parentElement.dataset.index;
    storeEditTask = editProduct;

    let task = arrayOfproduct[storeEditTask];

    document.getElementById('img').value = task.img;
    document.getElementById('Name').value = task.name;
    document.getElementById('description').value = task.description;
    document.getElementById('price').value = task.price;
    

    // dailog_element.textContent = "Edit Task";
    // dailog_element.textContent = "create";

    show(dialog);
}

  
            
            