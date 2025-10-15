const sections = {
  Home: 'Home',
  Tutorial: 'Tutorial',
  Data: 'Data',
  GamePost: 'GamePost',
  UsefulURL: 'UsefulURL'
};

const Menutab = document.getElementById('menutab');
const Menuicon = document.getElementById('menuicon');

// 初期表示（ページ読み込み時）
document.addEventListener('DOMContentLoaded', () => {
  showSection('Home');
});

// セクション表示切り替え関数
function showSection(sectionId) {
  Object.keys(sections).forEach(id => {
    const sectionEl = document.getElementById(id);
    const tabEl = document.querySelector(`.class${sections[id]}`);

    // セクションの表示・非表示
    if (sectionEl) {
      sectionEl.hidden = id !== sectionId;
    }

    // タブの色変更
    if (tabEl) {
      if (id === sectionId) {
        tabEl.style.color = 'red';      // 選択中のタブを赤に
        tabEl.style.fontWeight = 'bold'; // 見やすく
      } else {
        tabEl.style.color = 'black';     // その他のタブを黒に
        tabEl.style.fontWeight = 'normal';
      }
    }
  });

  // メニューを自動で閉じる
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
