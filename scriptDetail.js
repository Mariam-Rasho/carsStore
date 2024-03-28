let items = JSON.parse(localStorage.getItem('car'));
console.log(items[0].src);
let row = document.querySelector(".item");
row.innerHTML = ` <div id="item" class="row align-items-center bg-Light" style="height: 700px;">
    <div class=" col ps-5 ">
    <h1 class="ps-5 pb-5 card-title">${items[0].name}</h1>
    <img class="img" src=${items[0].src} style="width: 400px; margin-left: 200px; "></div>
    <div class="col">
    <h2 class="mb-5">Details</h2>
    <h4 >Rating And Review </h4>⭐⭐⭐⭐
    <h3 class="mt-5">Description</h3>
    <p>${items[0].desc} Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit accusantium molestiae incidunt! Cumque, quasi delectus aspernatur ratione nulla omnis </p>
    <h3>Colors</h3>
    <div class="d-flex justify-content-around w-25 mb-5">
        <span  style="background-color: black; width: 30px; height: 30px; border-radius: 50%;" onclick="getColor()"></span>
        <span  style="background-color: beige; width: 30px; height: 30px; border-radius: 50%; " onclick="getColor()"></span>
        <span  style="background-color: blue; width: 30px; height: 30px; border-radius: 50%;" onclick="getColor()"></span>
    </div>
    <div class="mb-5 d-flex justify-content-around">
        <div>
            <button class="rounded-circle" onclick="decrease()"><i class="fa-solid fa-minus "></i></button>
            <span class="count fs-4">1</span>
            <button class="rounded-circle " style="background-color: #976E72; "><i class="fa-solid fa-plus " onclick="increase()"></i></button>
        </div>
        <div>
            <h4><span class="price">${items[0].price}</span>$</h4></h4>
        </div>
    </div>
    <div>
        <button type="button" class="btn fs-5 text-dark rounded-pill border border-secondary px-4 bg-white " onclick=" addToCart(item) "> Add To Cart</button>
        <button type="button " class="button text-light fs-5 px-4 addtoCart " onclick="addToCart(item) "> Buy Now </button></div>
    </div>
    </div>`

let count = document.querySelector(".count").innerText;
console.log(count);

function decrease() {
    if (count !== 0) {
        count--;
        console.log(count);
        document.querySelector(".count").innerText = count
    }
}

function increase() {
    // if (count !== 0) {
    count++;
    console.log(count);
    document.querySelector(".count").innerText = count
        // }
}
var color;

function getColor() {
    console.log(event.target.style.backgroundColor);
    color = event.target.style.backgroundColor;

}

function addToCart(item) {

    const car = { id: "", src: "", name: "", desc: "", price: "", count: "", color: "" };
    // if (!cart.includes(car)) {
    const carImage = item.querySelector('.img').src;
    const title = item.querySelector('.card-title').innerText;
    const description = item.querySelector('p').innerText;
    const priceCar = item.querySelector(".price").innerText;
    const countCar = document.querySelector(".count").innerText;


    car.src = carImage;
    car.name = title;
    car.desc = description;
    console.log(car.price);
    car.color = color;
    car.count = countCar;
    car.price = car.count * priceCar;
    console.log(car.id);
    console.log(car.price);
    // console.log(!cart.find((item) => item.name === car.name && item.color === car.color));
    let items = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [];
    if (!items.find((item) => item.name === car.name && item.color === car.color)) {
        let x = id++;
        car.id = x;

        items.push(car);
        localStorage.setItem("cart", JSON.stringify(items));
        console.log(items.length);
    }
}