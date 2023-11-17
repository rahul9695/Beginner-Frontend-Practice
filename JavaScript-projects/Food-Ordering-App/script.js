document.addEventListener("DOMContentLoaded", function () {
    const orderButton = document.getElementById("orderBtn");
    const loadingMessage = document.getElementById("loading");
    const orderResult = document.getElementById("orderResult");
    const foodImage = document.getElementById("foodImage");
    const orderID = document.getElementById("orderID");

    orderButton.addEventListener("click", function () {
        // Simulate order processing using a promise
        loadingMessage.style.display = "block";

        const foodSelection = getSelectedFood();
        const orderPromise = simulateOrder(foodSelection);

        orderPromise
            .then(function (result) {
                loadingMessage.style.display = "none";
                displayOrderResult(result.foodImage, result.orderID);
            })
            .catch(function (error) {
                loadingMessage.style.display = "none";
                console.error("Error processing order:", error);
            });
    });

    function getSelectedFood() {
        const foodItems = document.querySelectorAll('.food-menu input[type="checkbox"]:checked');
        return Array.from(foodItems).map(item => item.value);
    }

    function simulateOrder(foodSelection) {
        return new Promise(function (resolve) {
            const randomProcessingTime = Math.floor(Math.random() * 5000) + 2000; // Random processing time between 2 to 7 seconds

            setTimeout(function () {
                const orderID = generateOrderID();
                const foodImageURL = generateFoodImage(foodSelection);
                resolve({ foodImage: foodImageURL, orderID: orderID });
            }, randomProcessingTime);
        });
    }

    function generateOrderID() {
        return "Order #" + Math.floor(Math.random() * 1000);
    }

    function generateFoodImage(foodSelection) {
        // Provide actual image URLs for selected food items
        const foodImageMap = {
            'Burger': 'burger-image.jpg',
            'Fries': 'fries-image.jpg',
            'Soda': 'soda-image.jpg'
            // Add more food items as needed
        };

        // For simplicity, use the first selected food item's image
        const lastSelectedFood = foodSelection[foodSelection.length-1];
        return foodImageMap[lastSelectedFood] || '';
    }

    function displayOrderResult(foodImageURL, orderIDText) {
        orderResult.style.display = "block";
        foodImage.src = foodImageURL;
        orderID.textContent = orderIDText;
    }
});