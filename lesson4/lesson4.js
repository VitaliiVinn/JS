// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

let a = [
  {name: "somebody"},
  {name: "viber"},
  {name: "nuke"},
  {name: "contract"},
  {name: "geological"},
  {name: "jump"},
  {name: "huge"},
  {name: "toy"},
  {name: "month"},
  {name: "jogging"}
];

for (let blocks of a) {
  document.write(`<div>${blocks.name}</div>`);
}
document.write("********************");
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

let b = ["somebody", "viber", "nuke", "contract", "geological", "jump", "huge", "toy", "month", "jogging"];
for (let i = 0; i < b.length; i++) {
  document.write(`<div>${b[i] + " " + i}</div>`);

}
document.write("********************");

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let c = ["wardrobe", "queen", "somebody", "viber", "nuke", "contract", "geological", "jump", "huge", "toy", "month",
  "jogging", "hike", "knife", "directory", "loop", "standart", "beautiful", "curtain", "unit", "firestone", "mouse"];

let u = 0;

while (u < 20) {
  document.write(`<div><h1>${c[u]}</h1></div>`);
  u++;
}
document.write("********************");

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let d = ["wardrobe", "queen", "somebody", "viber", "nuke", "contract", "geological", "jump", "huge", "toy", "month",
  "jogging", "hike", "knife", "directory", "loop", "standart", "beautiful", "curtain", "unit", "firestone", "mouse"];
let n = 0;

while (n < 20) {
  document.write(`<h1>${c[n] + " " + n}</h1>`);
  n++;
}
document.write("********************");
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write(`<ul>`);
for (let p = 0; p < listOfItems.length; p++) {
  document.write(`<li>${listOfItems[p]}</li>`)
}
document.write(`</ul>`);
document.write("********************");
// ШАБЛОН:
//   <ul>
//     <li>ITEM OF ARRAY</li>
//     <!--
//         і тд інші об'єкти масиву
//          ...
//          ...
//          ...
//     -->
//   </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
//
// -----------------------------------------------
//
//   Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

let products = [
  {
    title: 'milk',
    price: 22,
    image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
  },
  {
    title: 'juice',
    price: 27,
    image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
  },
  {
    title: 'tomato',
    price: 47,
    image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
  },
  {
    title: 'tea',
    price: 15,
    image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
  },
];


for (let product of products) {
  document.write(`<div class = "product-card">
<h3 class = "product-title">${product.title} ${product.price}</h3>
<img src="${product.image}" alt="" class="product-image">
</div>`);

}
document.write("********************");


//
// ШАБЛОН
// <div class="product-card">
//   <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
//
//
//
// --------------------
//   є масив
// за допомоги циклу вивести:
//   - користувачів зі статусом true
let users = [
  {name: 'vasya', age: 31, status: false},
  {name: 'petya', age: 30, status: true},
  {name: 'kolya', age: 29, status: true},
  {name: 'olya', age: 28, status: false},
  {name: 'max', age: 30, status: true},
  {name: 'anya', age: 31, status: false},
  {name: 'oleg', age: 28, status: false},
  {name: 'andrey', age: 29, status: true},
  {name: 'masha', age: 30, status: true},
  {name: 'olya', age: 31, status: false},
  {name: 'max', age: 31, status: true}
];

for (let r = 0; r < users.length; r++) {
  if (users[r].status) {
    console.log(users[r]);
  }
}
console.log();

// за допомоги циклу вивести:
//   - користувачів зі статусом false

let users1 = [
  {name: 'vasya', age: 31, status: false},
  {name: 'petya', age: 30, status: true},
  {name: 'kolya', age: 29, status: true},
  {name: 'olya', age: 28, status: false},
  {name: 'max', age: 30, status: true},
  {name: 'anya', age: 31, status: false},
  {name: 'oleg', age: 28, status: false},
  {name: 'andrey', age: 29, status: true},
  {name: 'masha', age: 30, status: true},
  {name: 'olya', age: 31, status: false},
  {name: 'max', age: 31, status: true}
];

for (let r1 = 0; r1 < users1.length; r1++) {
  if (users1[r1].status === false) {
    console.log(users1[r1]);
  }
}

// // за допомоги циклу вивести:
// // - користувачів які старші за 30 років
let users2 = [
  {name: 'vasya', age: 31, status: false},
  {name: 'petya', age: 30, status: true},
  {name: 'kolya', age: 29, status: true},
  {name: 'olya', age: 28, status: false},
  {name: 'max', age: 30, status: true},
  {name: 'anya', age: 31, status: false},
  {name: 'oleg', age: 28, status: false},
  {name: 'andrey', age: 29, status: true},
  {name: 'masha', age: 30, status: true},
  {name: 'olya', age: 31, status: false},
  {name: 'max', age: 31, status: true}
];

for (let r2 = 0; r2 < users2.length; r2++) {
  if (users2[r2].age > 29) {
    console.log(users2[r2]);
  }
}
