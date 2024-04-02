// const btnCart = document.querySelectorAll(".addtoCart");
// console.log(btnCart);
// const cart = [];
var id = 0;

function addToCart(item, carItem) {
    const car = { id: "", src: "", name: "", desc: "", price: "", count: "1", color: "", };
    // if (!cart.includes(car))
    const carImage = item.querySelector('.img').src;
    const title = item.querySelector('.card-title').innerText;
    const description = item.querySelector('h3').innerText;
    const priceCar = item.querySelector(".price").innerText;
    car.src = carImage;
    car.name = title;
    car.desc = description;
    car.price = priceCar;
    car.color = carItem.color ? "carItem.color" : "white";
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
    const cars = { src: "", name: "", desc: "", price: "", count: "", color: "", };
    cars.src = carImage;
    cars.desc = description;
    cars.name = title;
    cars.price = priceCar;
    console.log(item);
    cars.color = `${item.color}`;
    if (!carDetail.find((item) => item.name === cars.name)) {
        carDetail = [];
        carDetail.push(cars);
        localStorage.setItem('car', JSON.stringify(carDetail))
    }

}

// https://freetestapi.com/api/v1/cars?search=[query]
// let carsArray = [];
// fetch("https://freetestapi.com/api/v1/cars")
//     .then(Response => Response.json())
//     .then(data => {
//         carsArray = data;
//         console.log(carsArray);
//         console.log(document.getElementById('btnSearch'));

//         document.getElementById('btnSearch').addEventListener('click', function(event) {
//             event.preventDefault(); // Prevent the default behavior
//             let searchValue = document.getElementById('search').value;
//             let crdo = document.querySelector(".cardo");

//             //filter
//             let item = carsArray.filter(item => item.model === searchValue)
//             console.log(item);
//             crdo.innerHTML = `<div class="col-4">
//     <div class="card car" id="item">
//         <img src="./OIP.jpg" class="img cardo">
//         <div class="card-body">
//             <div class="d-flex justify-content-around">
//                 <h5 class="card-title text-center my-3">${item.make}</h5>
//                 <h4 class="my-3">$<span class="price">${item.price}</span></h4>
//             </div>
//             <div class="container d-flex text-center my-3">
//                 <h7 class="col"><img src="./footer/seat-svgrepo-com(1) 1.png" style="width: 15px;">Seator</h7>
//                 <h7 class="col"><img src="./footer/wheel-to-control-vehicles-svgrepo-com(1) 2.png" style="width: 15px;">${item.transmission}</h7>
//                 <h7 class="col"><img src="./footer/SVGRepo_iconCarrier.png" style="width: 15px;">5KM/1-t</h7>
//             </div>
//             <h3 class="text-center my-3" id="desc" style="color: black;">Starting at $500/Day</h3>
//             <div class="d-flex justify-content-around">
//                 <a class="btn fs-5 text-dark rounded-pill border border-secondary " href="./details.html" onclick="showDetails(item)">Details</a>
//                 <button type="button" class="addtoCart button text-light fs-5 px-4" onclick="addToCart(item,${item})">Buy Now</button>
//             </div>
//         </div>
//     </div>
// </div>`
//         });
//     })


let carsArray = [];

fetch("https://freetestapi.com/api/v1/cars")
    .then(Response => Response.json())
    .then(data => {
        carsArray = data;
        console.log(carsArray);
    });
document.getElementById('btnSearch').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default behavior
    let searchValue = document.getElementById('search').value;
    let crdo = document.querySelector(".cardo");
    //filter
    let items = carsArray.filter(a => a.model == searchValue);
    console.log(items);
    items.forEach(item => {
        crdo.innerHTML = `<div class="col-4">
            <div class="card car" id="item">
                <img src="./OIP.jpg" class="img cardo">
                <div class="card-body">
                    <div class="d-flex justify-content-around">
                        <h5 class="card-title text-center my-3">${item.make}</h5>
                        <h4 class="my-3">$<span class="price">${item.price}</span></h4>
                    </div>
                    <div class="container d-flex text-center my-3">
                        <h7 class="col"><img src="./footer/seat-svgrepo-com(1) 1.png" style="width: 15px;">Seator</h7>
                        <h7 class="col"><img src="./footer/wheel-to-control-vehicles-svgrepo-com(1) 2.png" style="width: 15px;">${item.transmission}</h7>
                        <h7 class="col"><img src="./footer/SVGRepo_iconCarrier.png" style="width: 15px;">5KM/1-t</h7>
                    </div>
                    <h3 class="text-center my-3" id="desc" style="color: black;">Starting at $500/Day</h3>
                    <div class="d-flex justify-content-around">
                        <a class="btn fs-5 text-dark rounded-pill border border-secondary " href="./details.html" onclick="showDetails(item)">Details</a>
                        <button type="button" class="addtoCart button text-light fs-5 px-4" onclick="addToCart(item,${item})">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>`
    });
});

//query
// fetch(`https://freetestapi.com/api/v1/cars?search=${searchValue}`)
//     .then(response => response.json())
//     .then(data => {
//         data.forEach(item => {
//             console.log(item);
//             crdo.innerHTML = `<div class="col-4">
//         <div class="card car" id="item">
//             <img src="./OIP.jpg" class="img cardo">
//             <div class="card-body">
//                 <div class="d-flex justify-content-around">
//                     <h5 class="card-title text-center my-3">${item.make}</h5>
//                     <h4 class="my-3">$<span class="price">${item.price}</span></h4>
//                 </div>
//                 <div class="container d-flex text-center my-3">
//                     <h7 class="col"><img src="./footer/seat-svgrepo-com(1) 1.png" style="width: 15px;">Seator</h7>
//                     <h7 class="col"><img src="./footer/wheel-to-control-vehicles-svgrepo-com(1) 2.png" style="width: 15px;">${item.transmission}</h7>
//                     <h7 class="col"><img src="./footer/SVGRepo_iconCarrier.png" style="width: 15px;">5KM/1-t</h7>
//                 </div>
//                 <h3 class="text-center my-3" id="desc" style="color: black;">Starting at $500/Day</h3>
//                 <div class="d-flex justify-content-around">
//                     <a class="btn fs-5 text-dark rounded-pill border border-secondary " href="./details.html" onclick="showDetails(item)">Details</a>
//                     <button type="button" class="addtoCart button text-light fs-5 px-4" onclick="addToCart(item,${item})">Buy Now</button>
//                 </div>
//             </div>
//         </div>
//     </div>`
//         });

//     });
// console.log(searchValue);