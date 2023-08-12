// 5 hw1

// const str = '10010'
// let sum = 0

// let pow = 0

// for (let i = str.length - 1; i >= 0; i--) {
//     if(+str[i] === 1) sum += 2 ** pow
//     pow++
// }

// console.log(sum)

// 18 hw1

// bad code

// const deposit = () => {
//     if(amount < 0) {
//         res = 'Invalid deposit amount. Please deposit a positive amount.'
//     } else {
//         bankAccount.balance += amount
//         res = `Deposited ${amount}. New balance: ${bankAccount.balance}`
//     }
// }

// const withdraw = () => {
//     if(amount < 0 || amount > bankAccount.balance) {
//         res = 'Invalid withdraw amount. Please deposit a positive amount.'
//     } else if (amount > bankAccount.balance) {
//         res = 'Insufficient balance or invalid withdrawal amount.'
//     } else {
//         res = `Withdrew ${amount}. New balance: ${bankAccount.balance}`
//     }
// }

// const bankAccount = {
//     accountNumber: "123456789",
//     balance: 1000,
//     accountHolder: "John Doe",
// }

// const deposit = (amount) => {
//     if(amount > 0) {
//         bankAccount.balance += amount
//         return `Deposited ${amount}. New balance: ${bankAccount.balance}`
//     }

//     return 'Invalid deposit amount. Please deposit a positive amount.'

// }

// const withdraw = (amount) => {
//     if(amount < 0) {
//         return 'Invalid withdraw amount. Please deposit a positive amount.'
//     } else if (amount > bankAccount.balance) {
//         return 'Insufficient balance or invalid withdrawal amount.'
//     }
//     bankAccount.balance -= amount

//     return `Withdrew ${amount}. New balance: ${bankAccount.balance}`

// }

// const updateBalance = (amount, transaction) => {
//     if(transaction === 'deposit') return deposit(amount)
//     if(transaction === 'withdraw') return withdraw(amount)
// }

// const res = updateBalance(200, "withdraw")

// console.log(res)

// const arr = [1, 3, 6, 7];

// const newArr = arr.map(item => item * 2);

// console.log(newArr);

// const arr = [1, 3, 6, 7];
// const cb = item => item * 2;
// const newArr = arr.map(cb);

// console.log(newArr);

// function myMap(arr,  cb) {
//   const newArr = [];
//   for(let i = 0; i < arr.length; i++){
//     newArr.push(cb(arr[i]));
//   }

//   return newArr;
// }

// const newArr = myMap(arr, cb);

// console.log(newArr);

// 1 hw2

// const arr1 = [1, 2, 3, 4]
// const arr2 = [5, 6, 7, 8, 9]

// const arr3 = arr1.concat(arr2)

// console.log(arr3)

// 2 hw2

// const arr = ['Keeper', 'of', 'the' ,'Light']

// 2.1 my
// const abbvArr = arr.map(item => {
//     return item[0].toUpperCase()
// })

// console.log(abbvArr)

// 2.2 teach
// const cb = (acc, el) => {
//     return acc + el[0].toUpperCase();
//   }

//   const myReduce = (arr, cb) => {
//     let acc = "";
//     for(let i = 0; i < arr.length; i++) {
//       acc = cb(acc, arr[i])
//     }
//     return acc
//   }

//   console.log(myReduce(arr, cb));

// 3 hw2

// let letterValue = {
//     'a': [1],
//     'b': [3],
//     'c': [3],
//     'd': [2],
//     'e': [1],
//     'f': [4],
//     'g': [2],
//     'h': [4],
//     'i': [1],
//     'j': [6],
//     'k': [5],
//     'l': [1],
//     'm': [3],
//     'n': [1],
//     'o': [1],
//     'p': [3],
//     'q': [7],
//     'r': [1],
//     's': [1],
//     't': [1],
//     'u': [1],
//     'v': [4],
//     'w': [4],
//     'x': [6],
//     'y': [4],
//     'z': [7],
// }
