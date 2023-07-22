let breakingImg = document.querySelector("#breakingImg");
let breakingNews_title = document.querySelector("#breakingNews .title");
let breakingNews_desc = document.querySelector("#breakingNews .description");
let topNews = document.querySelector(".topNews");
let sportsNews = document.querySelector("#sportsNews .newsBox");
let businessNews = document.querySelector("#businessNews .newsBox");
let techNews = document.querySelector("#techNews .newsBox");

// fetching news data from a website providing api

const apiKey = "4a81bfc4b1bb474b9921e642ab5bb7b9";

const fetchData = async (category, pageSize) => {
  const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&pageSize=${pageSize}&apiKey=${apiKey}`;
  const data = await fetch(url);
  const response = await data.json();
  console.log(response);
  return response.articles;
};
// fetchData('general',5)

//adding breaking news

const add_breakingNews = (data) => {
  breakingImg.innerHTML = `<img src=${data[0].urlToImage}>`;
  breakingNews_title.innerHTML = `<a href=${data[0].url} target="maindata"><h2>${data[0].title}</h2></a>`;
  breakingNews_desc.innerHTML = `${data[0].description}`;
};
fetchData("general", 5).then(add_breakingNews);

const add_topNews = (data) => {
  let html = "";
  let title = "";
  data.forEach((element) => {
    if (element.title.length < 100) {
      title = element.title;
    } else {
      title = element.title.slice(0, 100) + "...";
    }

    html += `<div class="news">
                    <div class="text">
                        <div class="title" id = "hello">
                        <a href=${element.url} target="maindata"><p><em>${title}</em></p></a>
                        </div>
                        <style>  
.fa {  
  font-size: 20px;  
  cursor: pointer;  
  user-select: none;  
}  
.fa:hover {  
  color: darkblue;  
}  
p {  
 color: darkblue;  
 }  
</style>  
</head>  
<body>  
<center>  
<i onclick="myFunction(this)" class="fa fa-thumbs-up"></i>  
</center>  
<script>  
function myFunction(x) {  
  x.classList.toggle("fa-thumbs-down");  
}  
</script> 
                    </div>
                </div>`;
  });
  topNews.innerHTML = html;
};
fetchData("general", 20).then(add_topNews);

const add_sportsNews = (data) => {
  let html = "";
  let title = "";
  data.forEach((element) => {
    if (element.title.length < 100) {
      title = element.title;
    } else {
      title = element.title.slice(0, 100) + "...";
    }

    html += `<div class = 'newsCard'>
                    <div class="img">
                        <img src=${element.urlToImage}>
                    </div>
                    <div class="text">
                        <div class="title">
                        <a href=${element.url} target="maindata"><p>${title}</p></a>
                        </div>
                        <i onclick="myFunction(this)" class="fa fa-thumbs-up"></i>
                    </div>
                </div>`;
  });
  sportsNews.innerHTML = html;
};
fetchData("sports", 8).then(add_sportsNews);
const add_businessNews = (data) => {
  let html = "";
  let title = "";
  data.forEach((element) => {
    if (element.title.length < 100) {
      title = element.title;
    } else {
      title = element.title.slice(0, 100) + "...";
    }

    html += `<div class="newsCard">
                    <div class="img">
                        <img src=${element.urlToImage}>
                    </div>
                    <div class="text">
                        <div class="title">
                        <a href=${element.url} target="maindata">
                        <p>${title}</p></a>
                        </div>
                        <i onclick="myFunction(this)" class="fa fa-thumbs-up"></i>

                    </div>
                </div>`;
  });
  businessNews.innerHTML = html;
};
fetchData("business", 8).then(add_businessNews);
const add_techNews = (data) => {
  let html = "";
  let title = "";
  data.forEach((element) => {
    if (element.title.length < 100) {
      title = element.title;
    } else {
      title = element.title.slice(0, 100) + "...";
    }
    html += `<div class="newsCard">
                    <div class="img">
                        <img src=${element.urlToImage}>
                    </div>
                    <div class="text">
                        <div class="title">
                        <a href=${element.url} target="maindata"><p>${title}</p></a>
                        </div>
                        <i onclick="myFunction(this)" class="fa fa-thumbs-up"></i>

                    </div>
                </div>`;
  });
  techNews.innerHTML = html;
};
fetchData("technology", 8).then(add_techNews);
