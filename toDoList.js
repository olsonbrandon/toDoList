function generateList () {
  var inputListElement = document.getElementById('list-values');
  var listValues = inputListElement.value;
  var listValuesArray = listValues.split(',');
  var unorderedListElement = document.getElementById('unordered-list');
  var displayDiv = document.getElementById('display-list');

for (var i = 0; i < listValuesArray.length; i++) {
  var listItemElement = document.createElement('li');
  if (listValues === '') {
    alert('Don\'t Procrastinate Your To Do List');
    break;
  } else{
    listItemElement.innerText = listValuesArray[i];
    listItemElement.setAttribute('id', i);
    listItemElement.setAttribute('class', 'clickable');

    listItemElement.addEventListener("click", crossOffItem);
    unorderedListElement.appendChild(listItemElement);
  }
    inputListElement.value = '';
  }
}

function crossOffItem (event) {
  var element = event.target;
  var classArray = element.className.split(' ');
  var index;
  for (var i = 0; i < classArray.length; i++) {
    if (classArray[i] === 'cross-off') {
      index = i;
      break;
    }
  }
  if (index) {
  classArray.splice(index, 1);
} else {
  classArray.push('cross-off');
}
element.className = classArray.join(' ');
}
