var nameList = [];

console.log(nameList);

function list() {
    inputValue = document.getElementById('inputList').value;
    document.getElementById('outputList').innerHTML += inputValue + "<br>";

    nameList.push(inputValue);

}

document.getElementById('list').addEventListener('click', list);

function sortList() {
    var sortedOutput = nameList.sort();
    sortedOutput.forEach(function(element) {
        document.getElementById('sortedList').innerHTML += element + "<br>";
    })
}

document.getElementById('sort').addEventListener('click', sortList);