const sections = {
  Home: 'Home',
  Tutorial: 'Tutorial',
  Data: 'Data',
  GamePost: 'GamePost',
  UsefulURL: 'UsefulURL'
};

const Menutab = document.getElementById('menutab');
const Menuicon = document.getElementById('menuicon');

// 初期表示（DOMが読み込まれたら Home を表示）
document.addEventListener('DOMContentLoaded', () => {
  showSection('Home');
});

// セクション表示切り替え
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
        tabEl.style.color = 'orange';
        tabEl.style.fontWeight = 'bold';
      } else {
        tabEl.style.color = 'white';
        tabEl.style.fontWeight = 'normal';
      }
    });
  });

  if (Menutab) Menutab.classList.remove('active');
}

// ナビゲーション関数を自動生成（ToHome(), ToActivity() など）
Object.keys(sections).forEach(id => {
  window[`To${id}`] = () => showSection(id);
});


if (Menuicon && Menutab) {
  Menuicon.addEventListener('click', () => {
    Menutab.classList.toggle('active');
  });
}

window.batsu = () => {
  if (Menutab) Menutab.classList.remove('active');
};