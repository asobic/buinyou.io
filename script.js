const sections = {
  Home: 'Home',
  Tutorial: 'Tutorial',
  Data: 'Data',
  GamePost: 'GamePost',
  UsefulURL: 'usefulURL'
};

const Menutab = document.getElementById('menutab');
const Menuicon = document.getElementById('menuicon');

// DOM読み込み後に初期表示
document.addEventListener('DOMContentLoaded', () => {
  showSection('Home');
});

// セクション表示切り替え
function showSection(sectionId) {
  Object.keys(sections).forEach(id => {
    const sectionEl = document.getElementById(id);
    const tabEl = document.querySelector(`.${sections[id]}`);

    if (sectionEl) {
      sectionEl.hidden = id !== sectionId;
    }

    if (tabEl) {
      tabEl.style.color = id === sectionId ? 'red' : 'black';
    }
  });

  if (Menutab) Menutab.style.display = 'none';
}

// ナビゲーション関数を自動生成（ToHome(), ToTutorial() など）
Object.keys(sections).forEach(id => {
  window[`To${id}`] = () => showSection(id);
});

// メニューアイコンのクリックイベント
if (Menuicon && Menutab) {
  Menuicon.addEventListener('click', () => {
    Menutab.style.display = Menutab.style.display === 'block' ? 'none' : 'block';
  });
}

// メニューを閉じる関数
window.batsu = () => {
  if (Menutab) Menutab.style.display = 'none';
};
