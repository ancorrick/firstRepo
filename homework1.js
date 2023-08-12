// 1

// function ifSigned(a, b, c) {
//     if (a === 0 || b === 0 || c === 0) {
//         return 'unsigned'
//     }
    
//     let count = 0

//     if (a < 0) count++
//     if (b < 0) count++
//     if (c < 0) count++

//     if(count % 2 === 0) {
//         return '+'
//     }

//     return '-'
// }

// 1.1

// function findSign(a, b, c) {
//     const prod = a * b * c
    
//     const sign = {
//         0: 'unsigned',
//         [-1]: '-',
//         [+1]: '+',
//     }
    
//     return sign[prod / Math.abs(prod)] || sign[0]
// }

// console.log(findSign(5, -1, 5))

// console.log(ifSigned(14, -5, -5))

// 2

// function findFIB(n){
//     let a1 = 0, a2 = 1
//         for(let i = 0; i < n; i++) {
//         a2 = a1 + a2
//         a1 = a2 - a1
//         }

//     return a1
// }

// console.log(findFIB(10))

// 5

// const str = '10010'
// let sum = 0

// let pow = 0

// for (let i = str.length - 1; i >= 0; i--) {
//     if(+str[i] === 1) sum += 2 ** pow
//     pow++
// }

// console.log(sum)

// 18

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
