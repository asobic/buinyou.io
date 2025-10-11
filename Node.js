document.addEventListener("DOMContentLoaded", function() {
  const Home = document.getElementById('Home');
  const Tutorial = document.getElementById("Tutorial");
  const Data = document.getElementById("Data");
  const GamePost = document.getElementById("GamePost");
  const UsefulURL = document.getElementById("usefulURL");

function showSection(sectionId) {
  const sections = [Home, Tutorial, Data, GamePost, UsefulURL];
  sections.forEach(sec => sec.hidden = sec.id !== sectionId);
}
  function showSection(sectionId) {
  const sections = [Home, Tutorial, Data, GamePost, UsefulURL];
  sections.forEach(sec => sec.hidden = sec.id !== sectionId);
}

window.ToHome = () => showSection('Home');
window.ToTutorial = () => showSection('Tutorial');
window.ToData = () => showSection('Data');
window.ToElse = () => showSection('GamePost');
window.ToUsefulURL = () => showSection('usefulURL');

document.addEventListener("DOMContentLoaded", function() {
  const Home = document.getElementById('Home');
  const Tutorial = document.getElementById("Tutorial");
  const Data = document.getElementById("Data");
  const GamePost = document.getElementById("GamePost");
  const UsefulURL = document.getElementById("usefulURL");

  function showSection(sectionId) {
    const sections = [Home, Tutorial, Data, GamePost, UsefulURL];
    sections.forEach(sec => sec.hidden = sec.id !== sectionId);
  }

  window.ToHome = () => showSection('Home');
  window.ToTutorial = () => showSection('Tutorial');
  window.ToData = () => showSection('Data');
  window.ToElse = () => showSection('GamePost');
  window.ToUsefulURL = () => showSection('usefulURL');

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

    if (!workName || !creatorName || !gameLink) {
      alert("すべての項目を入力してください");
      return;
    }

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

