const goods = [
{
    name: 'fruits',
    price: 4000,
    promotion: 8,
},
{
    name: 'kleenex',
    price: 3000,
    promotion: 78,
},
{
    name: 'random1',
    price: 1000,
    promotion: 24,
},
{
    name: 'random2',
    price: 100,
    promotion: 16,
},
]


const applyDiscount = (price, discount) => (price * (100 - discount)) / 100
const convertToDollars = (price) => price / 100

const createRetailCart = (goods) => goods.map((good) => ({
    ...good,
    price: convertToDollars(applyDiscount(good.price, good.promotion)),
}))

// console.log(createRetailCart(goods))

const retailCart = createRetailCart(goods)

const hasPromotion = (good) => good.promotion > 0

const icludedInPromotion = retailCart.filter(hasPromotion)

const calcTotal = (cart) =>
    cart.reduce((totalPrice, good) => {
    totalPrice = totalPrice + good.price
    return totalPrice
}, 0)

const totalWithPromotion = calcTotal(retailCart)

const totalWithoutPromotion = convertToDollars(calcTotal(goods))

console.log(retailCart, icludedInPromotion, totalWithPromotion, totalWithoutPromotion)