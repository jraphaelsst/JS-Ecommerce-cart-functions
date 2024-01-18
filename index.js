var shoppingCart = () => {
    cart = []

    // Instantiate the Item Object
    const Item = (name, price, count) => {
        this.name = name;
        this.price = price;
        this.count = count;
    }
    /* */

    // Locally saves Cart on Local Storage
    const saveCart = () => {
        localStorage.setItem('shoppingCart', JSON.stringify(cart));
    }
    /* Fim */


    // Load Cart
    const loadCart = () => {
        // Transforms Object into JSON
        cart = JSON.parse(localStorage.getItem('shoppingCart'));
    }
    // Checks if Cart is not null. If not, load it
    if (localStorage.getItem('shoppingCart') != null) {
        loadCart();
    }
    /* */


    // Add Item to Cart
    var obj = {};
    obj.addItemToCart = (name, price, count) => {
        for (var item in cart) {
            // Adds to item count if it already exists
            if (cart[item].name === name) {
                cart[item].count++;
                saveCart();
                return;
            }
        }
    }
    // Adds a new Item to cart, in case it does not already exists
    var item = new Item(name, price, count);
    cart.push(item);
    saveCart();
    /* */


    // Sets the counting for an Item
    obj.setCountForItem = (name, count) => {
        for (var i in cart) {
            // Checa se o nome do produto existe no carrinho
            if (cart[i].name === name) {
                // Se existe, atribui a contagem ao item
                cart[i].count = count;
                break;
            }
        }
    };
    /* */


    // Subtracts quantity
    obj.removeItemFromCart = (name) => {
        for (var item in cart) {
            if (cart[item].name === name) {
                // Subtracts one unit of Item from Cart
                cart[item].count--;
                if (cart[item].count === 0) {
                    // Remove Item from Cart if count is 0
                    cart.splice(item, 1)
                }
                break;
            }
        }
        saveCart();
    }
    /* */


    // Remove all Items from Cart
    obj.removeItemFromCartAll = () => {
        for (var item in cart) {
            if (cart[item].name === name) {
                cart.splice(item, 1);
                break;
            }
        }
        saveCart();
    }
    /* */


    // Clear Cart
    obj.clearCart = () => {
        cart = [];
        saveCart();
    }
    /* */


    // Total count of Items
    obj.totalCount = () => {
        var totalCount = 0;
        for (var item in cart) {
            totalCount += cart[item].count;
        }
        return totalCount;
    }
    /* */


    // Total price of Items
    obj.totalCart = () => {
        var totalCart = 0;
        for (var item in cart) {
            totalCart += cart[item].price * cart[item].count;
        }
        return Number(totalCart.toFixed(2));
    }
    /* */


    // Listar carrinho
    obj.listCart = () => {
        var cartCopy = [];
        for (i in cart) {
            item = cart[i];
            itemCopy = {};
            for (j in item) {
                itemCopy[j] = item[j];
            }
            itemCopy.total = Number(item.price * item.count).toFixed(2);
            cartCopy.push(itemCopy)
        }
        return cartCopy;
    }
    return obj;
    /* */
}
