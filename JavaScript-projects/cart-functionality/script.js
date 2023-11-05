
// -----------------------------------------------

const Products = [
    {   
        id: 1,
        name: "Product-1",
        price: 100
    },
    {
        id: 2,
        name: "Product-2",
        price: 200
    },
    {
        id: 3,
        name: "Product-3",
        price: 300
    },
    {
        id: 4,
        name: "Product-4",
        price: 400
    },
    {
        id: 5,
        name: "Product-5",
        price: 500
    }
];

const cartData = {};
let total = 0;

const populateData = () => {
    const leftContainer = document.getElementById('productDataWrapper');
    let productWrapper = "";

    for (let data of Products) {
        let productWrapperString =
            `<div class="product-wrapper">
                <p>${data.name}</p>
                <p>${data.price}</p>
                <div class="counter-wrapper">
                    <span onclick="decrementor(${data.id});">-</span>
                    <span id="counter${data.id}">0</span>
                    <span onclick="incrementor(${data.id});">+</span>
                </div>
            </div>`;

        productWrapper += productWrapperString;
    }

    leftContainer.innerHTML = productWrapper;
}

populateData();

const decrementor = (productId) => {
    const counter = document.getElementById(`counter${productId}`);
    let value = parseInt(counter.innerText);
    if (value > 0) value--;
    const noProduct = document.getElementById('no-product-in-cart');
    if(value === 0) noProduct.style.display = "block";
    counter.innerText = value;
    cartDataUpdate(productId, value);
}

const incrementor = (productId) => {
    const counter = document.getElementById(`counter${productId}`);
    let value = parseInt(counter.innerText);
    value++;
    const noProduct = document.getElementById('no-product-in-cart');
    if(value === 1) noProduct.style.display = "none";
    counter.innerText = value;
    cartDataUpdate(productId, value);
}

const cartDataUpdate = (productId, value) => {
    const productName = Products.find(product => product.id === productId).name;
    const productPrice = Products.find(product => product.id === productId).price;

    if (value === 1) {
        if (cartData[productId]) {
            // The item already exists in the cart; update the quantity.
            cartData[productId].quantity = 1;
            const cartPriceQuantity = document.querySelector(`.cart-product-wrapper[data-product-id="${productId}"] span:last-child`);
            cartPriceQuantity.innerHTML = `${cartData[productId].quantity} x ${productPrice}`;
        } else {
            // The item doesn't exist in the cart; add it.
            cartData[productId] = {
                name: productName,
                price: productPrice,
                quantity: 1
            };

            const cartProductDataContainer = document.createElement('div');
            cartProductDataContainer.classList.add("cart-product-wrapper");
            cartProductDataContainer.dataset.productId = productId;

            const cartNameSpan = document.createElement('span');
            cartNameSpan.innerHTML = productName;

            const cartPriceQuantity = document.createElement('span');
            cartPriceQuantity.innerHTML = `1 x ${productPrice}`;

            cartProductDataContainer.appendChild(cartNameSpan);
            cartProductDataContainer.appendChild(cartPriceQuantity);

            const cartDataWrapper = document.getElementById('cartDataWrapper');
            cartDataWrapper.appendChild(cartProductDataContainer);
        }
    } else if (value === 0) {
        delete cartData[productId];

        const cartProductDataContainer = document.querySelector(`.cart-product-wrapper[data-product-id="${productId}"]`);
        if (cartProductDataContainer) {
            cartProductDataContainer.remove();
        }
    } else {
        cartData[productId].quantity = value;
        const cartPriceQuantity = document.querySelector(`.cart-product-wrapper[data-product-id="${productId}"] span:last-child`);
        cartPriceQuantity.innerHTML = `${value} x ${productPrice}`;
    }

    total = Object.values(cartData).reduce((acc, item) => acc + item.quantity * item.price, 0);
    document.getElementById('total').innerText = total;
}