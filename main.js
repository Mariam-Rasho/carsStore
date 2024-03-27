const homeCart = document.getElementById("table-cars");
let items = JSON.parse(localStorage.getItem('cart'));
console.log(items.length);
console.log(homeCart);
for (let i = 0; i < items.length; i++) {
    console.log(items[i].count);
    console.log(items[i].price);
    console.log(items[i].src);
    homeCart.innerHTML +=
        `<tr id="${items[i].id}">
    <td scope="row" class="d-flex align-items-center"> <img src=${items[i].src} class="img cardo pe-3"  style="width: 200px; height: 150px;"><div><h4>${items[i].name}</h4>${items[i].desc}</div>
    </td>
    <td>${items[i].count}</td>
    <td>$${items[i].price}</td>
    <td>${items[i].color} </td>
    <td><button class="fs-5" style="border:none; background-color:transparent;" onclick="deleteItem(${items[i].id})">delete</button></td>
</tr>`
}

function deleteItem(itemId) {
    let index = items.findIndex(item => item.id === itemId);

    if (index !== -1) {
        items.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(items));
        items = JSON.parse(localStorage.getItem('cart'));

        location.reload();
    }
}


//         cartItem.appendChild(card);
// document.addEventListener('DOMContentLoaded', function() {
//     const selectedCar = JSON.parse(localStorage.getItem('selectedCar'));
//     const table = document.getElementById('cartTable');
// let btnCart=document.querySelectorAll(".addtoCart");
//  console.log(btnCart);
//  let cart=[];
//   for(let i = 0; i < btnCart.length; i++)
//   {
//     btnCart[i].addEventListener('click',addtocart);
//     if (selectedCar) {
//         const row = table.insertRow();
//          var cell1 = row.insertCell(0);
//           var cell2 = row.insertCell(1);
//           var cell3 = row.insertCell(2);
//           var cell4 = row.insertCell(3);
//           cell1.innerHTML = '<img src="' + carImage + '" alt="Car Image">';
//           cell2.innerHTML = carName;
//           cell3.innerHTML = carPrice;
//           cell4.innerHTML = '<button onclick="deleteItem(this)">Delete</button>';
//     }
//   }

// function deleteItem(button) {
//     var row = button.parentNode.parentNode;
//     row.parentNode.removeChild(row);
//   }
// var addItemId =0;
// function addToCart(itemId){
//     addItemId +=1;
//     var setItem = document.createElement('div');
//     setItem.classList.add('cartImg');
//     setItem.setAttribute('id',addItemId);
//     var img=document.createElement('img');
//     img.setAttribute('src',item.children[0].currentSrc);
//     var title = document.createElement('div');
//     title.innerText=item.children[1].innerText;
//     var label=document.createElement('div');
//     label.innerText =item.children[2].querySelectorAll[0].innerText;
//     var select = document.createElement('span');
//     select.innerText=item.children[2].children[1].value;
//     label.append(select);
//     var cartItems =document.getElementById('title');
//     setItem.append(img);
//     setItem.append(title);
//     setItem.append(label);
//     cartItems.append(setItem);
//     console.log(item);
// }
/////////////////////////////////////////////////////
// var addItemId =0;
// function addToCart(itemId){
//     addItemId +=1;
//     var setItem = document.createElement('div');
//     setItem.classList.add('cartImg');
//     setItem.setAttribute('id',addItemId);
//     var img=document.createElement('img');
//     img.setAttribute('src',item.children[0].currentSrc);
//     var title = document.createElement('div');
//     title.innerText=item.children[1].innerText;
//     var label=document.createElement('div');
//     label.innerText =item.children[2].querySelectorAll[0].innerText;
//     var select = document.createElement('span');
//     select.innerText=item.children[2].children[1].value;
//     label.append(select);
//     var cartItems =document.getElementById('title');
//     setItem.append(img);
//     setItem.append(title);
//     setItem.append(label);
//     cartItems.append(setItem);
//     console.log(item);
// }
// function addToCart(item) {
//     let item = document.getElementById(item);
//     let itemName = item.querySelector('.card-title').innerText;
//     let itemPrice = item.querySelector('h5').innerText;
//     let itemImage = item.querySelector('img').src;

//     let cartTable = document.getElementById('cartTable');
//     let newRow = cartTable.insertRow();
//     let cell1 = newRow.insertCell(0);
//     let cell2 = newRow.insertCell(1);
//     let cell3 = newRow.insertCell(2);

//     // cell1.innerHTML = <img src="${itemImage}" style="width: 50px;">;
//     cell2.textContent = itemName;
//     cell3.textContent = itemPrice;
// }