// copy count 
let copyCount = 0;
const navberCopy = document.getElementById('navberCopy');
const btnCopys = document.getElementsByClassName('copy-btn');
for (const btnCopy of btnCopys) {
  btnCopy.addEventListener('click', function() {
    copyCount++;
    navberCopy.innerText = copyCount;
  });
}

// save count
let saveCount = 0;
const navherts = document.getElementById('navheart');
const btnsaves = document.getElementsByClassName('save-btn');
for (const btnsave of btnsaves) {
  btnsave.addEventListener('click', function() {
    saveCount++;
    navherts.innerText = saveCount;
  });
}
const navstar = document.getElementById('navestar');
const callButtons = document.getElementsByClassName('call-btn');
const historyList = document.getElementById('historyList');
const clearHistoryButton = document.getElementById('clearHistory');
function addCallHistory(serviceName, number) {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  const historyItem = document.createElement('li');
  historyItem.className = 'flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-sm mb-2';

  historyItem.innerHTML = `
    <div>
      <h3 class="font-semibold text-lg">${serviceName}</h3>
      <p class="text-gray-600">${number}</p>
    </div>
    <span class="text-gray-500 text-sm">${timeString}</span>
  `;
  historyList.prepend(historyItem);
}
for (const callButton of callButtons) {
  callButton.addEventListener('click', function() {
    let currentStar = parseInt(navstar.innerText);

    if (currentStar < 20) {
      alert("You don't have sufficient star");
      return;
    }
    const card = callButton.closest('.rounded-2xl');
    const serviceName = card.querySelector('h3').innerText;
    const number = card.querySelector('h2').innerText;
    addCallHistory(serviceName, number);
    navstar.innerText = currentStar - 20;
  });
}
clearHistoryButton.addEventListener('click', function() {
  historyList.innerHTML = ''; 
});