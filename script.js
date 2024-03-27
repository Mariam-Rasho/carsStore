// const btnCart = document.querySelectorAll(".addtoCart");
// console.log(btnCart);
// const cart = [];
var id = 0;

function addToCart(item) {
    const car = { id: "", src: "", name: "", desc: "", price: "", count: "1", color: "white" };
    // if (!cart.includes(car))
    const carImage = item.querySelector('.img').src;
    const title = item.querySelector('.card-title').innerText;
    const description = item.querySelector('h3').innerText;
    const priceCar = item.querySelector(".price").innerText;
    car.src = carImage;
    car.name = title;
    car.desc = description;
    car.price = priceCar;
    console.log(car.id);
    console.log(car.price);
    let items = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [];
    console.log(!items.find((item) => item.name === car.name));

    if (!items.find((item) => item.name === car.name)) {
        let x = id++;
        car.id = x;
        items.push(car);
        localStorage.setItem("cart", JSON.stringify(items));
        console.log(items.length);
    }
}
let carDetail = [];
//function showDetails
function showDetails(car) {
    const carImage = car.querySelector('.img').src;
    const title = car.querySelector('.card-title').innerText;
    const description = car.querySelector('h3').innerText;
    const priceCar = car.querySelector(".price").innerText;
    //cull del element on details page
    const cars = { src: "", name: "", desc: "", price: "", count: "", };
    cars.src = carImage;
    cars.desc = description;
    cars.name = title;
    cars.price = priceCar;
    if (!carDetail.find((item) => item.name === cars.name)) {
        carDetail = [];
        carDetail.push(cars);
        localStorage.setItem('car', JSON.stringify(carDetail))
    }

}





// if (!cart.find((item) => item.name === car.name)) {
//     cart.push({...car }); // إضافة نسخة جديدة من الكائن car
//     localStorage.setItem("cart", JSON.stringify(cart));
//     console.log(cart.length);
// } else {
//     console.log("العنصر موجود بالفعل في السلة");
// }

// for (let i = 0; i < btnCart.length; i++) {
//     btnCart[i].addEventListener('click', () => {
//         let item = btnCart[i].parentNode.parentElement.parentElement;
//         if (!cart.includes(item.innerHTML)) {
//             cart.push(item.innerHTML);
//             localStorage.setItem("cart", JSON.stringify(cart));
//             console.log(cart.length);

//         }

//     });




// function addtocart() {
//     let item = btnCart[i].parentNode.parentElement.parentElement;
//     cart.push(item.innerHTML);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     console.log(cart.length);
//   عرض عناصر السلة في صفحة السلة
// قم بمسح أي عناصر سابقة في سلة الشراء
// let items = JSON.parse(localStorage.getItem('cart'));
// for (let i = 0; i < items.length; i++) {
//     let cartItem = document.createElement('div');
//     cartItem.innerHTML = items[i];
//     homeCart.appendChild(cartItem);

// }
// }

// function addToCart(image, name, price) {
//   // Get car information
//   var carImage = document.querySelector('img').src;
//   var carName = document.querySelector('h5').innerText;
//   var carPrice = document.querySelector('h3').innerText;

//   // Create new row in the shopping cart table
//   var table = document.getElementById('cartTable');
//   var row = table.insertRow(1);
//   var cell1 = row.insertCell(0);
//   var cell2 = row.insertCell(1);
//   var cell3 = row.insertCell(2);
//   var cell4 = row.insertCell(3);
//   cell1.innerHTML = '<img src="' + carImage + '" alt="Car Image">';
//   cell2.innerHTML = carName;
//   cell3.innerHTML = carPrice;
//   cell4.innerHTML = '<button onclick="deleteItem(this)">Delete</button>';
// // }

// function addToCart(image,name, price) {
//   // Add the selected car to the basket
//   const car = { image,name, price };
//   localStorage.setItem('selectedCar', JSON.stringify(car));
//   window.location.href = 'detailsCars.html';
// }
// const openShopping =document.querySelector(".shopping");
// const list =document.querySelector(".listCard")opping");
// const list =document.querySelector(".listCard")opping");
// const list =document.querySelector(".listCard")