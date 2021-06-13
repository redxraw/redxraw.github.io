//https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty
//https://hacker-news.firebaseio.com/v0/item/27489187.json?print=pretty

var title = document.getElementById('title');
console.log("started!");
let topNEWSUrl = "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty";
let getDetailsUrl="https://hacker-news.firebaseio.com/v0/item/27489187.json?print=pretty";

function getNews(url, cFunction) {
    
//    var data = $.ajax({
//       type: "GET",
//       url: url,
//       data:{
//           what: 'ever'
//       },
//       dataType: 'json',
//       success:function(data){
//           cFunction(this);
//       }
//    });
    
    var xhttp;
  xhttp=new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      cFunction(this);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

function myFunction(xhttp){
    console.log(xhttp.responseText);
}

function addNews(dataText) {
  var node = document.createElement("LI");
  var textnode = document.createTextNode(dataText);
  node.appendChild(textnode);
  document.getElementById("newsList").appendChild(node);
}

function arrangeNews(){
    var responseBody = getNews(getDetailsUrl);
    console.log(responseBody);
//    addNews(responseBody.title);
}

//arrangeNews();
getNews(getDetailsUrl,myFunction);

