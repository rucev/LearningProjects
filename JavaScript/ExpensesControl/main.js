let recordList = [];

window.onload = (event) => {
  loadRecord();
  updateRecord();
  updateMoney();
};

const saveSubmit = (event) => {
  event.preventDefault();
  addValue();  
  updateMoney();
  updateRecord();
  saveRecord();
};

const addValue = () => {
  let moneyObj = {};
  let inputValue = document.getElementById("amount");
  let inputConcept = document.getElementById("concept");
  moneyObj.value = inputValue.value;
  moneyObj.concept = inputConcept.value;
  recordList.push(moneyObj);
  resetForm();
};

const resetForm = () =>{
  document.getElementById("transaction").reset();
}

const updateMoney = () => {
  let expenses = 0;
  let income = 0;
  let total = 0;
  for (let item of recordList) {
    total += Number(parseFloat(item.value).toFixed(2));
    if (item.value < 0) {
      expenses += -Number(parseFloat(item.value).toFixed(2));
    } else {
      income += Number(parseFloat(item.value).toFixed(2));
    }
  }
  document.getElementById("total").textContent = (Math.round((total)  * 100) / 100).toString();
  document.getElementById("expenses").textContent = (Math.round((expenses) * 100) / 100).toString();
  document.getElementById("income").textContent = (Math.round((income) * 100) / 100).toString();

};

const deleteEntry = (itemIndex) =>{
  recordList.splice(itemIndex, 1);
  return updateRecord() + updateMoney() + saveRecord()
};

const updateRecord = () => {
  let recordUpdated = "";
  for (let item of recordList) {
    if (item.value < 0) {
      recordUpdated += 
        '<li class="expense-text">' +
        item.concept +
        " --> " +
        item.value +
        '<span class="close" onclick="deleteEntry('+recordList.indexOf(item)+')">X</span></li>';
    } else {
      recordUpdated +=
        '<li class="income-text">' +
        item.concept +
        " --> " +
        item.value +
        '<span class="close" onclick="deleteEntry('+recordList.indexOf(item)+')">X</span></li>';
    } 
  }
  document.getElementById("record").innerHTML = recordUpdated;
};


const saveRecord = () => {
  localStorage.setItem("save-practica", JSON.stringify(recordList));
};

const loadRecord = () => {
  let data = localStorage.getItem("save-practica");
  if (data !== null) recordList = JSON.parse(data);
};
