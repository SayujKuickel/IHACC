function openMobNavigation() {
  const mobilepage = document.getElementById("mobile-nav-section");

  mobilepage.style.transform = "translateY(0%)";
}

function closeMobNavigation() {
  const mobilepage = document.getElementById("mobile-nav-section");
  mobilepage.style.transform = "translateY(-100%)";
}
