//https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty
//https://hacker-news.firebaseio.com/v0/item/27489187.json?print=pretty

var title = document.getElementById('title');
var titleTime = document.getElementById('titleTime');
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

function callNews2(callURL){
        var data = $.ajax({
       type: "GET",
       url: callURL,
       data:{
           what: 'ever'
       },
       dataType: 'json',
       success:function(data){
           let newsTitle = data.title;
           let newsURL = data.url;
           addNews(newsTitle, newsURL);
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

function addNews(newsTitle, newsURL) {
    // ul ol
    var node = document.createElement("LI");
    
    var hyperLink = document.createElement('a');
    var textnode = document.createTextNode(newsTitle);
    hyperLink.appendChild(textnode)
    hyperLink.title = newsTitle;
    hyperLink.href = newsURL;
    node.appendChild(hyperLink);
    document.getElementById("newsList").appendChild(node);
}

function setTitle(){
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    title.innerHTML = "Date: " + date;
    titleTime.innerHTML = "Time: " + time;
}

setTitle();
callNews(topNEWSUrl,getNewsID, arrangeNews);