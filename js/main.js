
// input field by id function 
function getInputFuildById(input) {
    const getInputFuild = document.getElementById(input);
    const getInputFuildString = getInputFuild.value
    const getInputFuildNumber = parseInt(getInputFuildString);
    return getInputFuildNumber;
}

// get Element to innerText by id function 
function getElementTextById(inputElementId) {
    const getElement = document.getElementById(inputElementId);
    const getElementString = getElement.innerText;
    const getElementNumber = parseInt(getElementString)
    return getElementNumber

}

// set element by id 
function setElementById(inputSetElementId, value) {
    const setElementValue = document.getElementById(inputSetElementId);
    setElementValue.innerText = value;

}

// select player function 
function selectPlayer(playerId) {
    const orderlist = document.querySelectorAll("#selectList li")
    if (orderlist.length == 5) {
        alert("Select Five Players Already ")
    }
    else {
        const getPlayerName = playerId.parentNode.children[1].innerText
        const creaiteLiTage = document.createElement("li");
        creaiteLiTage.innerText = getPlayerName
        const getOlTage = document.getElementById("selectList")
        getOlTage.appendChild(creaiteLiTage)

    }
}

// calclulation player cost
document.getElementById("btn-Calculate").addEventListener("click", function () {
    const getPerPlayerCost = getInputFuildById("Per-Player-fuild")
    if (isNaN(getPerPlayerCost)) {
        alert("Please enter the numbers as Input")
    }
    else {
        const orderlist = document.querySelectorAll("#selectList li").length
        const allPlayerTotalCost = getPerPlayerCost * orderlist
        setElementById("Player-Expenses", allPlayerTotalCost)
    }

    // console.log(allPlayerTotalCost)

})

// calclulation total play in the cost 
document.getElementById("btn-Calculate-total").addEventListener("click", function () {
    const getTotalCost = getElementTextById("Player-Expenses");
    const getManagerfuildValue = getInputFuildById("Manager-fuild");
    const getCoachfuildValue = getInputFuildById("Coach-fuild");
    if (isNaN(getManagerfuildValue) || isNaN(getCoachfuildValue)) {
        alert("Please enter the number as Input")
    }
    else {
        const totalAmount = getTotalCost + getManagerfuildValue + getCoachfuildValue;
        setElementById("Total-balance", totalAmount)
    }

})








