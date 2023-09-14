const Users = ('./users.js')
const Cart = ('./cart.js')
const Products = ('./products.js')
const Order = ('./order.js')
module.exports = {
    users: new Users(),
    cart: new Cart(),
    products: new Products(),
    order: new Order(),
}