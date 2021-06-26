//https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty
//https://hacker-news.firebaseio.com/v0/item/27489187.json?print=pretty

function setTitle(){
    var title = document.getElementById('title');
    var titleTime = document.getElementById('titleTime');
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    title.innerHTML = "Date: " + date;
    titleTime.innerHTML = "Time: " + time;
}
function callAPI( callURL, callBackFunction) {
    var data = $.ajax({
        dataType: 'json',
        url: callURL,
        type: "GET",
        async: true,
        data:{ what: 'ever' },
        success: callBackFunction
    });
}
function getNewsList(data){
    var length = data.length;
    var temp = data.slice(0, maxLimit);
    let getUrl = "";
    
    for(var i in temp){
        getUrl = "https://hacker-news.firebaseio.com/v0/item/"+ temp[i] +".json?print=pretty";
        callAPI(getUrl,getNews);
    }
    
    console.log("hello"+hello);
}
function getNews(data){
    let newsTitle = data.title;
    let newsURL = data.url;
    addNews(newsTitle, newsURL);
}
function addNews(newsTitle, newsURL) {

//    var spanNode = document.createElement("span");
//    spanNode.innerHTML = newsTitle +" | ";
//    movingNews.append(spanNode);
    
    var node = document.createElement("LI");
    var hyperLink = document.createElement('a');
    var textnode = document.createTextNode(newsTitle);
    hyperLink.appendChild(textnode)
    hyperLink.title = newsTitle;
    hyperLink.href = newsURL;
    hyperLink.style.color = textColor;
    node.appendChild(hyperLink);
    document.getElementById("newsList").appendChild(node);

    // fade -  news ticker
    var node2 = document.createElement("LI");
    node2.className = "js-item";
    node2.innerText = newsTitle;
    document.getElementsByClassName("js-frame")[0].appendChild(node2);

    // marquee
    var span = document.createElement("span");
    span.className = "marquee__seperator";
    span.innerText = newsTitle;
    document.getElementsByClassName("marquee__item")[0].appendChild(span);

}
window.onload = function() {
    let topNEWSUrl = "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty";
    setTitle();
    callAPI(topNEWSUrl,getNewsList);
};

console.log("started!");
let maxLimit = 20;
let hello = "";
//let movingNews = $(".marquee");
