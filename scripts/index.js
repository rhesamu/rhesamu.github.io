var lists = [];

function save() {
  var choices = document.getElementById('choices')
  var item = document.createElement('li');

  var textInput = document.getElementById("textinput");

  lists.push(textInput.value);

  //console.log(lists)
  item.appendChild(document.createTextNode(textInput.value))
  choices.appendChild(item);

  textInput.value = '';
}


function randomPick() {
  var len = lists.length;
  var randomize = Math.floor(Math.random() * Math.floor(len));
  var result = document.createTextNode(lists[randomize])

  var resultDiv = document.getElementById('result')
  var text = document.createElement('h3');
  text.appendChild(result);
  resultDiv.appendChild(text)

  document.getElementById("choose-btn").disabled = 'true';
}
