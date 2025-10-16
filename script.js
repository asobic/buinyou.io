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

//セクション表示切り替え関数
function showSection(sectionId) {
  Object.keys(sections).forEach(id => {
    const sectionEl = document.getElementById(id);

    // セクションの表示・非表示
    if (sectionEl) {
      sectionEl.hidden = id !== sectionId;
    }

    // 対象のタブをすべて取得（button と a）
    const tabEls = document.querySelectorAll(`.class${sections[id]}`);
    tabEls.forEach(tabEl => {
      if (id === sectionId) {
        tabEl.style.color = 'red';
        tabEl.style.fontWeight = 'bold';
      } else {
        tabEl.style.color = 'black';
        tabEl.style.fontWeight = 'normal';
      }
    });
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
