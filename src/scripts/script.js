var btn = document.querySelector("#btn-input");
var inputTextArea = document.querySelector("#input-textarea");
var outputTextArea = document.querySelector("#output-textarea");
var apiEndPoint =
  "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=";
var requestString = "";

btn.addEventListener("click", () => {
  requestString = apiEndPoint + inputTextArea.value;
  console.log("Request->" + requestString);
  callTranslateApi();
});

function callTranslateApi() {
  fetch(requestString)
    .then(response => response.json())
    .then((jsonParse) => {
      let translatedTest = jsonParse.contents.translated;
      outputTextArea.innerHTML = translatedTest;
      console.log("Translated Text->" + translatedTest);
    })
    .catch((error) => {
      alert("Oop's we hit a snag!! Please try again later");
      console.log(error);
    });
}
