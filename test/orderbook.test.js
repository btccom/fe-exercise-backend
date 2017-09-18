const assert = require('assert');
const {OrderBook, Order} = require('../lib/orderbook');

describe('OrderBook', function() {
    it('can get orders', function() {
        const orderBook = new OrderBook();
        const order1 = new Order(1, 'buy', 100);
        const order2 = new Order(2, 'buy', 100);

        orderBook.orders.push(order1);
        orderBook.orders.push(order2);

        assert(orderBook.getOrders(0, 2).length === 2);
        assert(orderBook.getOrders(0, 1).length === 1);
        assert(orderBook.getOrders(1, 2).length === 1);
        assert(orderBook.getOrders(0, 2)[0].id === 1);
        assert(orderBook.getOrders(0, 2)[1].id === 2);
    });

    it('can generate orders', function() {
        const orderBook = new OrderBook();
        orderBook._generateOrder();
        orderBook._generateOrder();

        assert(orderBook.getOrders(0, 2).length === 2);
        assert(orderBook.getOrders(0, 1).length === 1);
        assert(orderBook.getOrders(1, 2).length === 1);
        assert(orderBook.getOrders(0, 2)[0].id === 1);
        assert(orderBook.getOrders(0, 2)[1].id === 2);
    });
});
