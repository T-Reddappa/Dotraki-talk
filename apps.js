var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// var serverURL = "https:api.funtranslations.com/translate/minion.json";
var serverURL = "https://api.funtranslations.com/translate/dothraki.json";
function getTranslationURL(text) {
  return serverURL + "?" + "text" + text;
}

function errorHandler(error) {
  alert("You exceeded the limit of 5 translations per hour!");
}

function clickHandler() {
  var inputText = txtInput.value; // input

  //calling
  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);
