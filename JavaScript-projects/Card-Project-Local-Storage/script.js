const firstNameValue = document.getElementById('firstNameValue');
const lastNameValue = document.getElementById('lastNameValue');
const countryValue = document.getElementById('countryValue');
const phoneNumberValue = document.getElementById('phoneNumberValue');
const stateValue = document.getElementById('stateValue');
const cityValue = document.getElementById('cityValue');
const addressValue = document.getElementById('addressValue');

const storedUserInfo = localStorage.getItem("userInfo");

if(storedUserInfo) {
    const userInfo = JSON.parse(storedUserInfo);
    
    firstNameValue.innerText = userInfo.firstName;
    lastNameValue.innerText = userInfo.lastName;
    countryValue.innerText = userInfo.country;
    phoneNumberValue.innerText = userInfo.phoneNumber;
    stateValue.innerText = userInfo.state;
    cityValue.innerText = userInfo.city;
    addressValue.innerText = userInfo.address;
}else {
    storeUserInfo();
}

function storeUserInfo () {
    const firstName = prompt("Let's create your batch ID, What's your first Name ?");
    const lastName = prompt("What's your last Name ?");
    const country = prompt("Country you live in ?");
    const phoneNumber = prompt("To get our program notifications, provide your Phone Number ?");
    const state = prompt("It's almost done, in which state do you live ?");
    const city = prompt("What's your current city ?");
    const address = prompt("Last, Your complete Address ?");

    const userInfo = {
        firstName,
        lastName,
        country,
        phoneNumber,
        state,
        city,
        address
    }

    localStorage.setItem("userInfo", JSON.stringify(userInfo));

    firstNameValue.innerText = userInfo.firstName;
    lastNameValue.innerText = userInfo.lastName;
    countryValue.innerText = userInfo.country;
    phoneNumberValue.innerText = userInfo.phoneNumber;
    stateValue.innerText = userInfo.state;
    cityValue.innerText = userInfo.city;
    addressValue.innerText = userInfo.address;
}