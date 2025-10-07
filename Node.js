  const Home = document.getElementById('Home');
  const Tutorial = document.getElementById("Tutorial");
  const Data = document.getElementById("Data");
  const GamePost = document.getElementById("GamePost");

  window.onload =function(){
    Home.hidden = false;
    Tutorial.hidden = true;
    Data.hidden = true;
    GamePost.hidden = true;
  }
  
  window.ToHome = function(){
    Home.hidden = false;
    Tutorial.hidden = true;
    Data.hidden = true;
    GamePost.hidden = true;
  }
  
  window.ToTutorial = function(){
    Home.hidden = true;
    Tutorial.hidden = false;
    Data.hidden = true;
    GamePost.hidden = true;
  }
  
  window.ToData = function(){
    Home.hidden = true;
    Tutorial.hidden = true;
    Data.hidden = false;
    GamePost.hidden = true;
  }

  window.ToElse = function(){
    Home.hidden = true;
    Tutorial.hidden = true;
    Data.hidden = true;
    GamePost.hidden = false;
}

  window.FormEnterd = function()｛
｝

