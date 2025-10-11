document.addEventListener("DOMContentLoaded", function() {
  const Home = document.getElementById('Home');
  const Tutorial = document.getElementById("Tutorial");
  const Data = document.getElementById("Data");
  const GamePost = document.getElementById("GamePost");
  const UsefulURL = document.getElementById("usefulURL");

  window.onload =function(){
    Home.hidden = false;
    Tutorial.hidden = true;
    Data.hidden = true;
    GamePost.hidden = true;
    UsefulURL.hidden = true;
  };
  
  window.ToHome = function(){
    Home.hidden = false;
    Tutorial.hidden = true;
    Data.hidden = true;
    GamePost.hidden = true;
    UsefulURL.hidden = true;
  };
  
  window.ToTutorial = function(){
    Home.hidden = true;
    Tutorial.hidden = false;
    Data.hidden = true;
    GamePost.hidden = true;
    UsefulURL.hidden = true;
  };
  
  window.ToData = function(){
    Home.hidden = true;
    Tutorial.hidden = true;
    Data.hidden = false;
    GamePost.hidden = true;
    UsefulURL.hidden = true;
  };

  window.ToElse = function(){
    Home.hidden = true;
    Tutorial.hidden = true;
    Data.hidden = true;
    GamePost.hidden = false;
    UsefulURL.hidden = true;
};

  window.ToUsefulURL = function(){
    Home.hidden = true;
    Tutorial.hidden = true;
    Data.hidden = true;
    GamePost.hidden = true;
    UsefulURL.hidden = false;
    

let i = parseInt(localStorage.getItem("numbers")) || 1;
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
};
});

