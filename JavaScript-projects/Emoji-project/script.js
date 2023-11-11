const tbody = document.getElementById('tbody');

const populateData = (emojiList) => {
    for(let obj of emojiList){
        const td1 = document.createElement('td');
        td1.innerText = obj.emoji;
        const td2 = document.createElement('td');
        td2.innerText = obj.aliases.join(", ");
        const td3 = document.createElement('td');
        td3.innerText = obj.description;
        const tr = document.createElement('tr');
        tr.append(td1, td2, td3);
        tbody.append(tr);
    }
};

populateData(emojiList);

const searchInput = document.getElementById('search');
searchInput.addEventListener('keyup', (e) => {
    const userInput = e.target.value.toLowerCase();
    const filteredDataTable = emojiList.filter((item) => item.aliases.join("").toLowerCase().includes(userInput) || item.description.toLowerCase().includes(userInput));
    tbody.innerHTML = "";
    populateData(filteredDataTable);
});