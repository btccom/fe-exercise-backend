class Order {
    constructor(id, type, quantity, price) {
        this.id = id;
        this.type = type;
        this.quantity = quantity;
        this.price = price;
    }
}

/**
 * @var int lastOrderId
 * @var []Order orders
 * @type boolean generating
 */
class OrderBook {
    constructor() {
        this.reset();
    }

    generateOrders() {
        if (this.generating) {
            return;
        }
        this.generating = true;

        this._setGenerateTimeout();
    }

    _setGenerateTimeout() {
        const self = this;

        const nexttime = 300 + (Math.random() * 2500);

        setTimeout(function() {
            self._generateOrderAndTimeout();
        }, nexttime);
    }

    _generateOrderAndTimeout() {
        this._generateOrder();
        this._setGenerateTimeout();
    }

    _generateOrder() {
        const type = ['buy', 'sell'][Math.floor(2 * Math.random())];
        const quantity = Math.ceil(1 + Math.random() * 15);
        const price = Math.ceil(50 + Math.random() * 180);

        const newOrder = new Order(this.lastOrderId++, type, quantity, price);
        console.log('_generateOrder', newOrder);

        this.orders.push(newOrder);
    }

    getOrders(from, to) {
        return this.orders.slice(from, to);
    }

    reset() {
        this.lastOrderId = 1;
        this.orders = [];
    }
}

module.exports.OrderBook = OrderBook;
module.exports.Order = Order;
