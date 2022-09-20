var btn = document.querySelector("button");
var inputTextArea = document.querySelector('#input-textarea');
var  apiEndPoint = 'https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=';
var requestString = '';
var translatedString = '';


btn.addEventListener('click',() => {

    requestString = apiEndPoint + inputTextArea.value;
    console.log('Request->'+requestString);
    callTranslateApi();
})

function callTranslateApi(){
    fetch(requestString).then(response => {
        console.log('Reponse->'+ response.json());
        return response;
    }).then(jsonParse => {
        console.log('Translated Text->' + jsonParse.contents.translated)
    }).catch(error => {
        console.log('Error Occured : '+error);
    })
}