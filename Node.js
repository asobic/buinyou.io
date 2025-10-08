document.addEventListener("DOMContentLoaded", function() {
    const element = document.getElementById('basic');
  let num = 1;
  while (true){
    if (localStorage.getItem('key${num}') !== null){
      element.insertAdjacentHTML("afterend", localStorage.getItem("key${num}"));
      num = num + 1;
}
    else{
      break;
}
  }
    
  const Home = document.getElementById('Home');
  const Tutorial = document.getElementById("Tutorial");
  const Data = document.getElementById("Data");
  const GamePost = document.getElementById("GamePost");

  window.onload =function(){
    Home.hidden = false;
    Tutorial.hidden = true;
    Data.hidden = true;
    GamePost.hidden = true;
  };
  
  window.ToHome = function(){
    Home.hidden = false;
    Tutorial.hidden = true;
    Data.hidden = true;
    GamePost.hidden = true;
  };
  
  window.ToTutorial = function(){
    Home.hidden = true;
    Tutorial.hidden = false;
    Data.hidden = true;
    GamePost.hidden = true;
  };
  
  window.ToData = function(){
    Home.hidden = true;
    Tutorial.hidden = true;
    Data.hidden = false;
    GamePost.hidden = true;
  };

  window.ToElse = function(){
    Home.hidden = true;
    Tutorial.hidden = true;
    Data.hidden = true;
    GamePost.hidden = false;
};

let i = localStorage.getItem("numbers");
window.FormEntered = function() {
  var name = document.getElementById("name");
  var creator = document.getElementById("creator");
  var gameDiscription = document.getElementById("gameDiscription");
  var gameURL = document.getElementById("gameURL");
  const element = document.getElementById("basic");
  const workName = name?.value ?? "";
const creatorName = creator?.value ?? "";
const logoImage = ""; // 必要に応じて画像タグなどを追加
const gameLink = gameURL?.value ?? "";

const htmlContent = `
  <p>
    作品名：${workName}<br>
    制作者名：${creatorName}<br>
    ロゴ画像：${logoImage}<br>
    作品URL：${gameLink}
  </p>
`;

element.insertAdjacentHTML("afterend", htmlContent);

localStorage.setItem("key${i}",htmlContent)

i = i + 1;
localStorage.setItem('numbers',i);
};
});

