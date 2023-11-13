document.querySelector("form").addEventListener('submit', (e) => {
    e.preventDefault();

    const firstName = e.target.children[0].value;
    const lastName = e.target.children[1].value;
    const country = e.target.children[2].value;
    const score = e.target.children[3].value;
    const errorMsg = document.getElementById('errorMsg');

    errorMsg.style.display = "none";

    if(firstName === '' || lastName === '' || country === '' || score === '')
    return (errorMsg.style.display = "block");

    const scoreCardContainer = document.getElementById('scoreCardContainer')
     const scoreCardElement = document.createElement("div");

     scoreCardElement.classList.add("scoreCard");

     scoreCardElement.innerHTML = `
        <div class="name-container">
            <p class="playerName">${firstName} ${lastName}</p>
            <p class="submissionDate">${generateDateAndTime()}</p>
        </div>
        <p class="playerCountry">${country}</p>
        <p class="playerScore">${score}</p>
        <div class="ctaContainer">
            <button>&#x1f5d1;</button>
            <button>+5</button>
            <button>-5</button>
        </div> `

     scoreCardContainer.appendChild(scoreCardElement);
     sortScoreBoard()
     activateBtnEventListener()
});

function activateBtnEventListener(){
    document.querySelectorAll(".ctaContainer").forEach((btn)=>{
        btn.addEventListener("click", (e)=>{
            let text = e.target.textContent;
            // console.log(text);
            let playerScore = e.target.parentElement.parentElement.children[2];
            // console.log(scorePlayer);

            if(text.length > 2) return;

            // console.log(e.target.parentElement.parentElement);
            // console.log("hi");

            if(text === '🗑')
            return e.target.parentElement.parentElement.remove();

            playerScore.textContent = parseInt(playerScore.textContent) + parseInt(text);

            sortScoreBoard()
        
        });
    });
}

activateBtnEventListener();

function sortScoreBoard(){
    let scoreCardContainer = document.getElementById("scoreCardContainer");

    let scoreCard = document.querySelectorAll(".scoreCard");

    let elementsInArray = [];
    scoreCard.forEach((ele)=> elementsInArray.push(ele));

    // console.log(elementsInArray);
    let sortedElements = elementsInArray.map((ele)=>{
        return ele;
    })
    .sort((a,b)=>{
        let numA = parseInt(a.children[2].textContent),
        numB = parseInt(b.children[2].textContent)

        if(numA > numB) return -1;
        if(numA < numB) return 1;
    });

    sortedElements.forEach((el)=>{
        scoreCardContainer.append(el);
    })
}

function generateDateAndTime(){
    let dateObject = new Date();
    // console.log(dateObject);
    let month = dateObject.toLocaleString("default", {month:"long"})
    // console.log(month);
    day = dateObject.getDate(),
    year = dateObject.getFullYear(),
    time = dateObject.toLocaleTimeString().slice(0,8);
    // console.log(time);

    let generateResult = `${month} ${day}: ${year} ${time}`

    return generateResult;
}