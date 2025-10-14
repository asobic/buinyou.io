//const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbysxGiZhYHIAqm7RBduXa2CIreus4BBwV1J0poPLVNGY4dsPmKVcGXAIBT6919AWDknnw/exec";

const sections = {
  Home: document.getElementById('Home'),
  Tutorial: document.getElementById('Tutorial'),
  Data: document.getElementById('Data'),
  GamePost: document.getElementById('GamePost'),
  UsefulURL: document.getElementById('usefulURL')
};

const Menutab = document.getElementById('menutab');
const Menuicon = document.getElementById('menuicon');

// 初期表示設定
window.onload = () => showSection('Home');

// セクション表示切り替え関数
function showSection(sectionId) {
  for (const id in sections) {
    sections[id].hidden = id !== sectionId;
  }
  Menutab.style.display = 'none';
}

// 各セクションへのナビゲーション関数
    
  window.ToHome = () => showSection("Home");
  window.ToTutorial = () => showSection("Tutorial");
  window.ToData = () => showSection("Data");
  window.ToGamePost = () => showSection("GamePost");
  window.ToUsefulURL = () => showSection("UsefulURL");

// メニューアイコンのクリックイベント
Menuicon.addEventListener('click', () => {
  Menutab.style.display = Menutab.style.display === 'block' ? 'none' : 'block';
});

// メニューを閉じる関数
window.batsu = () => {
  Menutab.style.display = 'none';
};


    /* 投稿一覧を取得して表示
    const posts = await fetchPosts();
    posts.forEach((post) => displayPost(post));

     投稿処理
    window.FormEntered = async function () {
      const name = document.getElementById("name");
      const creator = document.getElementById("creator");
      const gameURL = document.getElementById("gameURL");
      const gameDiscription = document.getElementById("gameDiscription");
      const logoInput = document.querySelector('input[type="file"]');

      const workName = name?.value.trim();
      const creatorName = creator?.value.trim();
      const gameLink = gameURL?.value.trim();
      const description = gameDiscription?.value.trim();
      const logoFile = logoInput?.files[0];

      if (!workName || !creatorName || !gameLink || !logoFile) {
        alert("すべての項目（ロゴ画像含む）を入力してください");
        return;
      }

      const logoImage = URL.createObjectURL(logoFile);

      const payload = {
        action: "add",
        name: workName,
        creator: creatorName,
        url: gameLink,
        description: description
      };

      try {
        const response = await fetch(SCRIPT_URL, {
          method: "POST",
          body: JSON.stringify(payload),
          headers: { "Content-Type": "application/json" }
        });

        const id = await response.text();
        displayPost({
          id,
          name: workName,
          creator: creatorName,
          url: gameLink,
          description,
          date: new Date().toLocaleString(),
          logoImage
        });

        入力欄リセット
        name.value = "";
        creator.value = "";
        gameURL.value = "";
        gameDiscription.value = "";
        logoInput.value = null;
      } catch (error) {
        alert("投稿に失敗しました：" + error);
      }
    };

    投稿表示関数
    function displayPost(post) {
      const postWrapper = document.createElement("div");
      postWrapper.innerHTML = `
        <p>
          作品名：${post.name}<br>
          制作者名：${post.creator}<br>
          ロゴ画像：<br>
          ${post.logoImage ? `<img src="${post.logoImage}" width="150">` : '<span>（画像は表示されません）</span>'}<br>
          作品URL：<a href="${post.url}" target="_blank">${post.url}</a><br>
          説明：${post.description}<br>
          投稿日時：${post.date}
        </p>
      `;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "削除";
      deleteButton.onclick = async () => {
        await deletePost(post.id);
        postWrapper.remove();
      };

      postWrapper.appendChild(deleteButton);
      element.insertAdjacentElement("afterend", postWrapper);
    }

     投稿取得関数
    async function fetchPosts() {
      try {
        const response = await fetch(SCRIPT_URL, {
          method: "POST",
          body: JSON.stringify({ action: "get" }),
          headers: { "Content-Type": "application/json" }
        });
        return await response.json();
      } catch (error) {
        console.error("取得失敗:", error);
        return [];
      }
    }

     投稿削除関数
    async function deletePost(id) {
      try {
        await fetch(SCRIPT_URL, {
          method: "POST",
          body: JSON.stringify({ action: "delete", id }),
          headers: { "Content-Type": "application/json" }
        });
      } catch (error) {
        alert("削除に失敗しました：" + error);
      }
    }*/
