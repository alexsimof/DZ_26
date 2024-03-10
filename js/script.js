// task 1

const books = [
 { title: 'Гаррі Поттер', author: 'Дж.К. Ролінг' },
 { title: '1984', author: 'Джордж Орвелл' },
 { title: 'Хоббіт', author: 'Дж.Р.Р. Толкієн' }
];

let res = books.find((item) => item.author == 'Джордж Орвелл' )
// console.log(res)

// task 2

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let num = numbers.filter((item) => item % 2 == 0);
// console.log(num)

// task 3

const prices = [100, 200, 300, 400, 500];
let price = prices.map((item) => (item*10/100)+item )
// console.log(price)

// task 4

const numbers2 = [45, 80, 32, 100, 105];
let num2 = numbers2.filter((item) => item > 100)
// console.log(num2)

// task 5

const nums = [1, 2, 3, 4, 5, -6, 7];
let newNums = nums.filter((item) => item < 0)
// console.log(newNums)

// task 6

const sentences = ["Я люблю JavaScript", "Масиви це весело", "Програмування це круто"];

for (let sent of sentences) {
  arr = sent.split(" ")
  //console.log(arr[0]) // голову сломал, как засунуть это в масив?
}

// придумал вот так, но это всеравно не то...

// let arr = []
// for (let sent of sentences) {
//   arr.push(sent.split(" "))
// }
// console.log(arr.flat())

// task 7

const sentences2 = ["JavaScript цікавий", "Масиви це корисно", "Вивчайте програмування щодня"];
let arr2 = []
for (let sent2 of sentences2) {
  arr2.push(sent2.split(" "))
}
// console.log(arr2.flat().length)

// task 8

let orders = [];

let order1 = {
 table: 1,
 dishes: [
  { name: "Кава", price: 30 },
  { name: "Чізкейк", price: 50 }
 ],
 status: "в обробці"
};

let order2 = {
 table: 2,
 dishes: [
  { name: "Лате", price: 40 },
  { name: "Тірамісу", price: 60 }
 ],
 status: "готується"
};

let order3 = {
 table: 3,
 dishes: [
  { name: "Лате", price: 40 },
  { name: "Тірамісу", price: 60 }
 ],
 status: "letit"
};
// додати нове замовлення в систему.

function addOrder(orders, order) {
  orders.push(order)
}
addOrder(orders, order1);
addOrder(orders, order2);
addOrder(orders, order3);

// 2-- розрахувати загальну суму замовлення для конкретного столу.

function getTotalAmount(orders, tableNumber) {
  let totalPrice = 0;
  for (let order of orders) {
    if (order.table === tableNumber) {
      order.dishes.map((dsh) => totalPrice += dsh.price)
    }
  }
  return totalPrice;
}

// console.log(getTotalAmount(orders, 2))

// 3 --змінити статус замовлення для конкретного столу.

function changeOrderStatus(orders, tableNumber, status) {

  for (let order of orders) {
    if (order.table === tableNumber){
      order.status = status;
    }
  }
}

changeOrderStatus(orders, 1, "ready")


// скасувати замовлення для конкретного столу (видалити його з системи).

function cancelOrder(orders, tableNumber) {

  for (let order of orders) {
    if (order.table === tableNumber) {
      let ord = tableNumber - 1
      orders.splice(ord, 1)
    }
  }

  // return orders
}
cancelOrder(orders, 1)
console.log(orders)