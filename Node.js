  const HomeText = document.getElementById('Home');
  const DayOfSSCC = document.getElementById("The_Day_Of_SSCC");
  const RoomOfMembers = document.getElementById("Page_For_Members");
  const Activity = document.getElementById("Activity");

  window.onload =function(){
    HomeText.hidden = false;
    DayOfSSCC.hidden = true;
    RoomOfMembers.hidden = true;
    Activity.hidden = true;
  }
  
  window.ToHome = function(){
    HomeText.hidden = false;
    DayOfSSCC.hidden = true;
    RoomOfMembers.hidden = true;
    Activity.hidden = true;
  }
  
  window.ToTutorial = function(){
    HomeText.hidden = true;
    DayOfSSCC.hidden = false;
    RoomOfMembers.hidden = true;
    Activity.hidden = true;
  }
  
  window.ToData = function(){
    HomeText.hidden = true;
    DayOfSSCC.hidden = true;
    RoomOfMembers.hidden = false;
    Activity.hidden = true;
  }

  window.ToElse = function(){
    HomeText.hidden = true;
    DayOfSSCC.hidden = true;
    RoomOfMembers.hidden = true;
    Activity.hidden = false;
};

