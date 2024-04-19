var navSlide= () =>{
    let burger = document.querySelector('.burger');
    let nav = document.querySelector('.nav-links');
    let navLinks = document.querySelectorAll('.nav-links li');
    burger.addEventListener('click', () =>{
        nav.classList.toggle('nav-active'); //togle nav//
        navLinks.forEach((link, index) =>{
            if(link.style.animation) { //animation link//
                link.style.animation="";}
            else {
                link.style.animation=`navLinkFade 0.5s ease forwards
                 ${index / 7+ 0.3}s`;
            };
            })
        })
    }
navSlide();

let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})


// cart//
let Vapeproducts = [
    {
        id: 1,
        name: 'Vaporesso',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpudspw4oDbx6I14LR4Qbx-KrFsICi-vb_H7HRP5G8PA&s',
        price: 1200
    },
    {
        id: 2,
        name: 'Legion',
        image: 'https://www.vapeshop.co.uk/cdn/shop/products/geekvape-l200-aegis-legend-2-vape-kit-rainbow_1200x1200.jpg?v=1691059104',
        price: 100
    },
    {
        id: 3,
        name: 'Legend',
        image: 'https://cdn.sistemawbuy.com.br/arquivos/61793d4f71e57473a93a378e72c4df88/produtos/65c3a4f616968/voopoodrag4kit_gunrosewood-800x800-65c617e007aec_mini.jpg',
        price: 220
    },
    {
        id: 4,
        name: 'Aldeia',
        image: 'https://www.vampirevape.co.uk/media/wysiwyg/arcfox_kit_1.jpg',
        price: 800
    },
    {
        id: 5,
        name: 'Luxe 2',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVJVj4epDNqNOSfpvBg5fNzyuck7HCS2OBE4zgubKW1g&s',
        price: 320
    },
    {
        id: 6,
        name: 'Drag',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgg9Jnoq1od2hjdiKiiM3gECZ-wkLeWGyk1t8YXc11Hg&s',
        price: 300
    }
];
let listCards  = [];
function initApp(){
    Vapeproducts.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Delete Product</button>`;
        list.appendChild(newDiv);
    })
}
initApp();

const Addnew= e=>{
    let id=document.getElementById("NewItemId").value;
    let name=document.getElementById("NewItem").value;
    let price =document.getElementById("priceTag").value;
    let image=document.getElementById("imageC").value;
    let Vapeproducts= JSON.parse(localStorage.getItem('Vapeproducts')) || [];
    Vapeproducts.push({id,name,image,price});
    localStorage.setItem('Vapeproducts',JSON.stringify(Vapeproducts));
   
// e.preventDefault()//
 }





function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(Vapeproducts[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}