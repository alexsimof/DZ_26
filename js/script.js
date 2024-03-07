// first task

const books = [
 { title: 'Гаррі Поттер', author: 'Дж.К. Ролінг' },
 { title: '1984', author: 'Джордж Орвелл' },
 { title: 'Хоббіт', author: 'Дж.Р.Р. Толкієн' }
];

let res = books.find((item) => item.author == 'Джордж Орвелл' )
// console.log(res)

// two task

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let num = numbers.filter((item) => item % 2 == 0);
// console.log(num)

// third task

const prices = [100, 200, 300, 400, 500];
let price = prices.map((item) => (item*10/100)+item )
// console.log(price)

// fourth task

const numbers2 = [45, 80, 32, 100, 105];
let num2 = numbers2.filter((item) => item > 100)
// console.log(num2)

// fifth task

const nums = [1, 2, 3, 4, 5, -6, 7];
let newNums = nums.filter((item) => item < 0)
// console.log(newNums)

const sentences = ["Я люблю JavaScript", "Масиви це весело", "Програмування це круто"];
let arr = filter.sentences((item) => item)