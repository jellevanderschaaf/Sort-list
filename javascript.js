var nameList = [];
var undefined = "";

console.log(nameList);

function list() {
    inputValue = document.getElementById('inputList').value;
    document.getElementById('outputList').innerHTML += inputValue + "<br>";

    nameList.push(inputValue);

}

document.getElementById('list').addEventListener('click', list);

function sortList() {
    var sortedOutput = nameList.sort();
    document.getElementById('sortedList').innerHTML = sortedOutput[0] + "<br>" + sortedOutput[1] + "<br>" + sortedOutput[2] + "<br>" + sortedOutput[3];

}

document.getElementById('sort').addEventListener('click', sortList);