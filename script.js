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

  const element = document.getElementById("basic");
  const savedPosts = JSON.parse(localStorage.getItem("gamePosts")) || [];

  // 投稿の表示と削除ボタンの追加
  savedPosts.forEach((post, index) => {
    const postWrapper = document.createElement("div");
    postWrapper.innerHTML = post;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "削除";
    deleteButton.onclick = () => {
      savedPosts.splice(index, 1);
      localStorage.setItem("gamePosts", JSON.stringify(savedPosts));
      postWrapper.remove();
    };

    postWrapper.appendChild(deleteButton);
    element.insertAdjacentElement("afterend", postWrapper);
  });

  window.FormEntered = function() {
    const name = document.getElementById("name");
    const creator = document.getElementById("creator");
    const gameDiscription = document.getElementById("gameDiscription");
    const gameURL = document.getElementById("gameURL");

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

    const postWrapper = document.createElement("div");
    postWrapper.innerHTML = htmlContent;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "削除";
    deleteButton.onclick = () => {
      const index = savedPosts.indexOf(htmlContent);
      if (index !== -1) {
        savedPosts.splice(index, 1);
        localStorage.setItem("gamePosts", JSON.stringify(savedPosts));
      }
      postWrapper.remove();
    };

    postWrapper.appendChild(deleteButton);
    element.insertAdjacentElement("afterend", postWrapper);

    savedPosts.push(htmlContent);
    localStorage.setItem("gamePosts", JSON.stringify(savedPosts));
  };
});
