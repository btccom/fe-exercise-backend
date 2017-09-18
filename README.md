Random Order Backend
====================
This is a backend service that generates random orders every 1 or 2 seconds; 
 - the order id begins from 1
 - price is integer
 - amount is integer

## Running
```
node app.js
```

The http API is exposed on TCP 5000 by default, but you can set a differnt port through env var `PORT` when running the app;

```
PORT=5001 node app.js
```

## HTTP API
The following endpoints are exposed:

### /listOrders
Get a paginated list of orders

```
GET /listOrders?start=<start order number>&size=<how many orders to fetch>
```

eg; `http://localhost:5000/listOrders?start=10&size=100` will fetch 100 orders from number 10.  

Example Output:
```json
[
    {
        "id": 10,
        "type": "buy",
        "quantity": 13,
        "price": 160
    }, {
        "id": 11,
        "type": "sell",
        "quantity":10,
        "price":87
    }
]
```

### Reset
Reset the whole order book (easy for testing purposes).

```
GET /reset
```
