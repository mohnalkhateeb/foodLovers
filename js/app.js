'use strict'

let imgArr = ['burger.jpg','pizza.jpg','shawarma.jpg']
let formEL = document.getElementById('order')
let tabelEl =document.getElementById('ordertable')
// let selectEl =document.getElementById('ftype')
let foodArr = [];
// fillSelect()
function FoodOrder(source,custmer,type,price)
{
    this.source = source;
    this.custmer = custmer;
    this.type =type;
    this.price =price;
    foodArr.push(this);
}
// function fillSelect()
// {
//     for(let i=0;i<imgArr.length;i++)
//     {
//         let optinEl = document.createElement('option')
//         optinEl.value=imgArr[i].split('.')[0]
//         selectEl.appendChild(optinEl)
//     }
// }
getFromLocalStorge()
formEL.addEventListener('submit',handler)
function handler(event)
{
    event.preventDefault()   
     let custmer =event.target.custmer.value;
    let type = event.target.ftype.value;
    let price = Math.floor(Math.random() * 20 - Math.random()* 2)
    let source;
    for(let i=0;i<imgArr.length;i++)
    {
        if(type == imgArr[i].split('.')[0])
        source= 'img/'+imgArr[i]
    } 
    new FoodOrder(source,custmer,type,price)
    console.log(foodArr)
    saveToLocalStorge()
    render()
}
function render()
{
    tabelEl.textContent=''
    let trhEl= document.createElement('tr')
    let th1El = document.createElement('th')
    th1El.textContent='order imge'
    let th2El = document.createElement('th')
    th2El.textContent='Order Detail'
    trhEl.appendChild(th1El)
    trhEl.appendChild(th2El)
    tabelEl.appendChild(trhEl)
    for (let i =0 ; i<foodArr.length ; i++)
    {
        let imgEl = document.createElement('img')
        imgEl.setAttribute('src',foodArr[i].source)
        let trEl = document.createElement('tr')
        tabelEl.appendChild(trEl)
        let td1El = document.createElement('td')
        td1El.appendChild(imgEl)
        let td2El = document.createElement('td')
        td2El.innerHTML='Custmer Name :' + foodArr[i].custmer+'<br>'+'Food Type :'+foodArr[i].type+'<br>'+'Food Price: '+ foodArr[i].price
        trEl.appendChild(td1El)
        trEl.appendChild(td2El) 
    }
}

function saveToLocalStorge()
{
    let food= JSON.stringify(foodArr)
    localStorage.setItem('food',food)
}
function getFromLocalStorge()
{
    let SringObj = localStorage.getItem('food')
    let foodObj = JSON.parse(SringObj)
    if (foodObj != null)
    {foodArr=foodObj}
}
render()