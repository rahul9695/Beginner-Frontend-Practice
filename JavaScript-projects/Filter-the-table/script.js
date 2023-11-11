const userData = [
    {
        id : 1,
        name : "Alfreds Futterkiste",
        country : "Germany"
    },
    {
        id : 2,
        name : "Island Trading",
        country : "UK"
    },
    {
        id : 3,
        name : "Berglunds snabbkop",
        country : "Sweden"
    },
    {
        id : 4,
        name : "Koniglich Essen",
        country : "Germany"
    },
    {
        id : 5,
        name : "Laughing Bacchus Winecellars",
        country : "Canada"
    },
    {
        id : 6,
        name : "Magazzini Alimentari Riuniti",
        country : "Italy"
    },
    {
        id : 7,
        name : "North/South",
        country : "UK"
    },
    {
        id : 8,
        name : "Paris specialites",
        country : "France"
    },
]
const table = document.getElementById('tbody');

const populateData = (dataSet) => {
    for(let obj of dataSet){
        const td1 = document.createElement('td');
        td1.innerText = obj.name;
        const td2 = document.createElement('td');
        td2.innerText = obj.country;
        const tr = document.createElement('tr');
        tr.append(td1, td2);
        table.append(tr);
    }
}

populateData(userData);

const searchInput = document.getElementById('search');
searchInput.addEventListener('keyup', (e) => {
    const userInput = e.target.value.toLowerCase();
    const filteredDataTable = userData.filter((item) => item.name.toLowerCase().includes(userInput) || item.country.toLowerCase().includes(userInput));
    table.innerHTML = "";
    populateData(filteredDataTable);
});