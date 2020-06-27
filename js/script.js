'use strict'
let boxArray = [
    {text: 1, bgColor: 'style = "background: #000000"'},
    {text: 2, bgColor: 'style = "background: #333333"'},
    {text: 3, bgColor: 'style = "background: #f3f3f3;"'},
    {text: 4, bgColor: 'style = "background: #EFEFEF"'},
    {text: 5, bgColor: 'style = "background: #72C3DC"'},
    {text: 6, bgColor: 'style = "background: #2B8EAD"'},
    {text: 7, bgColor: 'style = "background: #6F98A8"'},
    {text: 8, bgColor: 'style = "background: #BFBFBF"'},
    {text: 9, bgColor: 'style = "background: #2F454E"'}
];
const generateBox = (input) => {
    input.forEach(function(item) {
        document.getElementById("boxContainer").innerHTML += '<div ' + item.bgColor + 'class=\"box\">' +  '<div class=\"boxText"\>' + item.text +'</div></div>';
    });
};
const shuffle = (input) => {
    const updated = input.sort(() => Math.random() - .5);
    document.getElementById("boxContainer").innerHTML = "";
    updated.forEach(function(item) {
        document.getElementById("boxContainer").innerHTML += '<div ' + item.bgColor + 'class=\"col-sm-4 col-xs-12 box\">' +  '<div class=\"boxText"\>' + item.text +'</div></div>';
    });
};
const sort = (input) => {
    const updated = input.sort((a,b) => a.text - b.text);
    document.getElementById("boxContainer").innerHTML = "";
    updated.forEach(function(item) {
        document.getElementById("boxContainer").innerHTML += '<div ' + item.bgColor + 'class=\"col-sm-4 col-xs-12 box\">' +  '<div class=\"boxText"\>' + item.text +'</div></div>';
    });
};
