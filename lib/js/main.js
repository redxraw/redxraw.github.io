//https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty
//https://hacker-news.firebaseio.com/v0/item/27489187.json?print=pretty

var title = document.getElementById('title');
console.log("started!");
let topNEWSUrl = "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty";
let getDetailsUrl="";
let newsList = "";
let maxLimit = 20;

function callNews(url, aFunction, bFunction) {
    
    var xhttp;
  xhttp=new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      aFunction(this,bFunction);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

function callNews2(url){
        var data = $.ajax({
       type: "GET",
       url: url,
       data:{
           what: 'ever'
       },
       dataType: 'json',
       success:function(data){
           var title = data.title;
           addNews(title);
//          console.log(title);
       }
    });
}

function getNewsID(xhttp, bFunction){
    data = JSON.parse(xhttp.responseText);
    var length = data.length;
    var temp = data.slice(0, maxLimit);
    
    for(var i in temp){
        bFunction(temp[i]);
    }
}

function arrangeNews(newID){
    let getDetailsUrl="https://hacker-news.firebaseio.com/v0/item/"+ newID +".json?print=pretty";
//    console.log(newID);
    callNews2(getDetailsUrl);
}

function addNews(dataText) {
    // ul
    // ol
  var node = document.createElement("LI");
  var textnode = document.createTextNode(dataText);
  node.appendChild(textnode);
  document.getElementById("newsList").appendChild(node);
}


function setTitle(){
    var today = new Date().toISOString().slice(0,10);
    console.log(today);
    title.innerHTML = today;
}

setTitle();
callNews(topNEWSUrl,getNewsID, arrangeNews);